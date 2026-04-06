import { useState } from "react";
import { Plane, Calendar, Users, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BookingModal from "@/components/modals/BookingModal";

const AirportPickupSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="airport-pickup" className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Plane className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Airport Pickup</h2>
            </div>
            <p className="text-muted-foreground text-lg mb-6">
              Never worry about your airport arrival. Our flight tracking system automatically updates your driver with real-time flight information for timely pickup.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Plane className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Flight Tracking</h3>
                  <p className="text-sm text-muted-foreground">
                    Smart flight monitoring for automatic driver updates
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Loader className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Timely Arrival</h3>
                  <p className="text-sm text-muted-foreground">
                    Driver arrives exactly when your flight lands
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">No Waiting Hassles</h3>
                  <p className="text-sm text-muted-foreground">
                    Your driver waits without extra charges
                  </p>
                </div>
              </div>
            </div>

            <Button
              onClick={() => setShowModal(true)}
              size="lg"
              className="w-full"
            >
              Book Airport Pickup
            </Button>
          </div>

          {/* Right Card */}
          <Card className="p-6 border-2">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  From Airport
                </label>
                <input
                  type="text"
                  placeholder="Select airport"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Destination
                </label>
                <input
                  type="text"
                  placeholder="Enter destination"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Arrival Date
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
                  <Users className="w-4 h-4 inline mr-2" />
                  Passengers
                </label>
                <select className="w-full px-4 py-2 rounded-lg border border-input bg-background">
                  <option>1 Passenger</option>
                  <option>2 Passengers</option>
                  <option>3 Passengers</option>
                  <option>4+ Passengers</option>
                </select>
              </div>

              <Button className="w-full" size="lg">
                Check Availability
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <BookingModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Book Airport Pickup"
        type="airport-pickup"
      />
    </section>
  );
};

export default AirportPickupSection;
