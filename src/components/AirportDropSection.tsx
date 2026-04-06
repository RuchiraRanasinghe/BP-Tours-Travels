import { useState } from "react";
import { MapPin, Clock, Luggage, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BookingModal from "@/components/modals/BookingModal";

const AirportDropSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="airport-drop" className="py-16 px-4 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Card */}
          <Card className="p-6 border-2">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  From Location
                </label>
                <input
                  type="text"
                  placeholder="Enter pickup location"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  To Airport
                </label>
                <input
                  type="text"
                  placeholder="Select airport"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Departure Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Time</label>
                  <input
                    type="time"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Luggage
                </label>
                <select className="w-full px-4 py-2 rounded-lg border border-input bg-background">
                  <option>Light - 1-2 Bags</option>
                  <option>Medium - 3-4 Bags</option>
                  <option>Heavy - 5+ Bags</option>
                </select>
              </div>

              <Button className="w-full" size="lg">
                Check Availability
              </Button>
            </div>
          </Card>

          {/* Right Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Airport Drop</h2>
            </div>
            <p className="text-muted-foreground text-lg mb-6">
              Travel to the airport with peace of mind. Our professional drivers ensure you arrive with plenty of time, and our luggage assistance makes boarding stress-free.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Luggage className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Luggage Assistance</h3>
                  <p className="text-sm text-muted-foreground">
                    Help with loading and unloading your bags
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Timely Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    Arrive with sufficient time before departure
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Safe & Comfortable</h3>
                  <p className="text-sm text-muted-foreground">
                    Comfortable vehicles with professional drivers
                  </p>
                </div>
              </div>
            </div>

            <Button
              onClick={() => setShowModal(true)}
              size="lg"
              className="w-full"
            >
              Book Airport Drop
            </Button>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Book Airport Drop"
        type="airport-drop"
      />
    </section>
  );
};

export default AirportDropSection;
