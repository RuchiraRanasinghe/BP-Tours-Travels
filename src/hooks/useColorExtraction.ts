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
 * Updates the --primary, --primary-foreground, and other related color variables
 */
export const useColorExtraction = (imageSrc: string, enabled = true) => {
  useEffect(() => {
    if (!enabled || !imageSrc) return;

    const applyDynamicColor = async () => {
      const hsl = await extractDominantColor(imageSrc);

      // Update primary color CSS variable
      const root = document.documentElement;
      root.style.setProperty('--primary', `${hsl.h} ${hsl.s}% ${hsl.l}%`);

      // Update gradient colors for better visual harmony
      // Lighter version for gradients
      const lighter = {
        h: hsl.h,
        s: Math.max(hsl.s - 15, 0),
        l: Math.min(hsl.l + 15, 100),
      };
      root.style.setProperty('--blue-light', `${lighter.h} ${lighter.s}% ${lighter.l}%`);

      // Darker version for depth
      const darker = {
        h: hsl.h,
        s: Math.min(hsl.s + 10, 100),
        l: Math.max(hsl.l - 20, 0),
      };
      root.style.setProperty('--blue-dark', `${darker.h} ${darker.s}% ${darker.l}%`);

      // Update accent color to complement the primary
      const accentHue = (hsl.h + 120) % 360; // Complementary color (120° away)
      root.style.setProperty('--accent', `${accentHue} ${Math.min(hsl.s + 15, 100)}% 60%`);

      // Update ring color
      root.style.setProperty('--ring', `${hsl.h} ${hsl.s}% ${hsl.l}%`);
    };

    applyDynamicColor();
  }, [imageSrc, enabled]);
};

export default useColorExtraction;
