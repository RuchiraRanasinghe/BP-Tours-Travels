import { useState } from "react";
import { DollarSign, Calculator, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const PricingSection = () => {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [estimatedFare, setEstimatedFare] = useState<number | null>(null);

  const handleEstimate = () => {
    // Simulated fare calculation
    if (fromLocation && toLocation) {
      const randomFare = Math.floor(Math.random() * 100) + 30;
      setEstimatedFare(randomFare);
    }
  };

  return (
    <section id="pricing" className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Know the exact cost before you book
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Fare Estimator */}
          <Card className="p-8 border-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Fare Estimator</h3>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  From
                </label>
                <input
                  type="text"
                  placeholder="Enter pickup location"
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  To
                </label>
                <input
                  type="text"
                  placeholder="Enter destination"
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                />
              </div>

              <Button onClick={handleEstimate} className="w-full" size="lg">
                Estimate Fare
              </Button>
            </div>

            {estimatedFare && (
              <div className="bg-primary/10 dark:bg-primary/5 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">
                  Estimated Fare
                </p>
                <p className="text-3xl font-bold text-primary">
                  Rs. {estimatedFare}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Final price may vary based on distance and demand
                </p>
              </div>
            )}
          </Card>

          {/* Price Information */}
          <Card className="p-8 border-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">What's Included</h3>
            </div>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Base fare</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Distance charges</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Fuel surcharge</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Toll fees (as applicable)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Professional driver</span>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-muted rounded-lg">
              <div className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                <TrendingDown className="w-4 h-4" />
                Special Discounts
              </div>
              <p className="text-sm">
                Enjoy up to 20% discount on round trips and regular bookings
              </p>
            </div>
          </Card>
        </div>

        {/* Pricing Table */}
        <Card className="p-8 border-2 mt-8">
          <h3 className="text-2xl font-bold mb-6">Standard Pricing</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Service</th>
                  <th className="text-left py-3 px-4 font-semibold">Base Fare</th>
                  <th className="text-left py-3 px-4 font-semibold">Per KM</th>
                  <th className="text-left py-3 px-4 font-semibold">Min Fare</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-muted/50">
                  <td className="py-3 px-4">Sedan</td>
                  <td className="py-3 px-4">Rs. 100</td>
                  <td className="py-3 px-4">Rs. 20</td>
                  <td className="py-3 px-4">Rs. 150</td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="py-3 px-4">SUV</td>
                  <td className="py-3 px-4">Rs. 150</td>
                  <td className="py-3 px-4">Rs. 30</td>
                  <td className="py-3 px-4">Rs. 250</td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="py-3 px-4">Premium</td>
                  <td className="py-3 px-4">Rs. 200</td>
                  <td className="py-3 px-4">Rs. 40</td>
                  <td className="py-3 px-4">Rs. 350</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="py-3 px-4">Airport Transfer</td>
                  <td className="py-3 px-4">Rs. 300</td>
                  <td className="py-3 px-4">Rs. 25</td>
                  <td className="py-3 px-4">Rs. 500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PricingSection;
