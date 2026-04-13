import { useEffect } from 'react';

interface RGB {
  r: number;
  g: number;
  b: number;
}

interface HSL {
  h: number;
  s: number;
  l: number;
}

/**
 * Converts RGB color to HSL
 */
const rgbToHsl = (rgb: RGB): HSL => {
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
};

/**
 * Extracts dominant color from image using canvas
 */
const extractDominantColor = (imageSrc: string): Promise<HSL> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 50;
      canvas.height = 50;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve({ h: 221, s: 83, l: 53 }); // Fallback to default blue
        return;
      }

      ctx.drawImage(img, 0, 0, 50, 50);

      const imageData = ctx.getImageData(0, 0, 50, 50);
      const data = imageData.data;

      let r = 0,
        g = 0,
        b = 0;
      const pixelCount = data.length / 4;

      // Sample every pixel to get average dominant color
      for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
      }

      r = Math.floor(r / pixelCount);
      g = Math.floor(g / pixelCount);
      b = Math.floor(b / pixelCount);

      const hsl = rgbToHsl({ r, g, b });
      resolve(hsl);
    };

    img.onerror = () => {
      // Fallback to default blue color if image fails to load
      resolve({ h: 221, s: 83, l: 53 });
    };

    img.src = imageSrc;
  });
};

/**
 * Hook to extract and apply dominant color from an image to CSS variables
 * Can apply to a specific element (local) or globally
 * @param imageSrc - Image source URL
 * @param enabled - Whether to enable color extraction
 * @param elementId - Optional element ID to apply colors locally (if not provided, applies globally)
 */
export const useColorExtraction = (imageSrc: string, enabled = true, elementId?: string) => {
  useEffect(() => {
    if (!enabled || !imageSrc) return;

    const applyDynamicColor = async () => {
      const hsl = await extractDominantColor(imageSrc);

      // Get target element (globally or specific element)
      const target = elementId ? document.getElementById(elementId) : document.documentElement;
      
      if (!target) return;

      // Update primary color CSS variable
      target.style.setProperty('--primary', `${hsl.h} ${hsl.s}% ${hsl.l}%`);

      // Update gradient colors for better visual harmony
      // Lighter version for gradients
      const lighter = {
        h: hsl.h,
        s: Math.max(hsl.s - 15, 0),
        l: Math.min(hsl.l + 15, 100),
      };
      target.style.setProperty('--blue-light', `${lighter.h} ${lighter.s}% ${lighter.l}%`);

      // Darker version for depth
      const darker = {
        h: hsl.h,
        s: Math.min(hsl.s + 10, 100),
        l: Math.max(hsl.l - 20, 0),
      };
      target.style.setProperty('--blue-dark', `${darker.h} ${darker.s}% ${darker.l}%`);

      // Update accent color to complement the primary
      const accentHue = (hsl.h + 120) % 360; // Complementary color (120° away)
      target.style.setProperty('--accent', `${accentHue} ${Math.min(hsl.s + 15, 100)}% 60%`);

      // Update ring color
      target.style.setProperty('--ring', `${hsl.h} ${hsl.s}% ${hsl.l}%`);
    };

    applyDynamicColor();
  }, [imageSrc, enabled, elementId]);
};

export default useColorExtraction;
