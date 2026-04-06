import { useState } from "react";
import { Car, Luggage, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BookingModal from "@/components/modals/BookingModal";

const VehiclesSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<string>("sedan");

  const vehicles = [
    {
      id: "sedan",
      name: "Sedan",
      description: "Perfect for individuals and couples",
      passengers: 4,
      luggage: "2-3 Medium bags",
      features: ["AC", "Music System", "Comfortable Seats"],
      icon: Car,
      image: "🚗"
    },
    {
      id: "suv",
      name: "SUV",
      description: "Spacious and comfortable for groups",
      passengers: 6,
      luggage: "4-5 Medium bags",
      features: ["AC", "Premium Interior", "Extra Space"],
      icon: Car,
      image: "🚙"
    },
    {
      id: "hatchback",
      name: "Hatchback",
      description: "Economical and agile",
      passengers: 5,
      luggage: "2-3 Small bags",
      features: ["AC", "Fuel Efficient", "Easy Parking"],
      icon: Car,
      image: "🚗"
    },
  ];

  const handleVehicleSelect = (id: string) => {
    setSelectedVehicle(id);
  };

  const handleBook = () => {
    setShowModal(true);
  };

  const selected = vehicles.find(v => v.id === selectedVehicle);

  return (
    <section id="fleet" className="py-16 px-4 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Fleet</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect vehicle for your journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {vehicles.map((vehicle) => (
            <Card
              key={vehicle.id}
              className={`p-6 cursor-pointer transition-all border-2 ${
                selectedVehicle === vehicle.id
                  ? "border-primary shadow-lg"
                  : "border-border"
              }`}
              onClick={() => handleVehicleSelect(vehicle.id)}
            >
              <div className="text-5xl mb-4">{vehicle.image}</div>
              <h3 className="text-2xl font-bold mb-2">{vehicle.name}</h3>
              <p className="text-muted-foreground mb-4">{vehicle.description}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm">{vehicle.passengers} Passengers</span>
                </div>
                <div className="flex items-center gap-3">
                  <Luggage className="w-4 h-4 text-primary" />
                  <span className="text-sm">{vehicle.luggage}</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-xs font-medium text-muted-foreground mb-3">
                  Features:
                </p>
                <div className="flex flex-wrap gap-2">
                  {vehicle.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Selected Vehicle Details */}
        {selected && (
          <Card className="p-8 border-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold mb-6">{selected.name}</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  {selected.description}
                </p>

                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-semibold mb-3">Specifications</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Capacity</span>
                        <span className="font-medium">{selected.passengers} Passengers</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Luggage</span>
                        <span className="font-medium">{selected.luggage}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Top Features</h4>
                    <ul className="space-y-2">
                      {selected.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button onClick={handleBook} size="lg" className="w-full">
                  Book {selected.name}
                </Button>
              </div>

              <div>
                <Card className="p-6 bg-primary/5">
                  <h4 className="text-lg font-semibold mb-4">Luggage Guide</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Small Bag (Carry-on)</p>
                      <p className="text-sm text-muted-foreground">
                        Briefcase, backpack, shopping bags
                      </p>
                    </div>
                    <div className="border-t pt-4">
                      <p className="text-sm font-medium mb-2">Medium Bag</p>
                      <p className="text-sm text-muted-foreground">
                        Standard luggage, duffel bag
                      </p>
                    </div>
                    <div className="border-t pt-4">
                      <p className="text-sm font-medium mb-2">Large Bag</p>
                      <p className="text-sm text-muted-foreground">
                        Oversized suitcase, multiple items
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        )}
      </div>

      <BookingModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={`Book ${selected?.name || "Vehicle"}`}
        type="vehicle-booking"
      />
    </section>
  );
};

export default VehiclesSection;
