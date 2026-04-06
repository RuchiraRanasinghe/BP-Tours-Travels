import { useState } from "react";
import { Zap, Clock, RotateCw, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BookingModal from "@/components/modals/BookingModal";

const BookingSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [bookingType, setBookingType] = useState<"now" | "schedule" | "round-trip" | "multi-stop">("now");

  const bookingOptions = [
    {
      id: "now",
      icon: Zap,
      title: "Ride Now",
      description: "Get a ride immediately with instant booking"
    },
    {
      id: "schedule",
      icon: Clock,
      title: "Schedule a Ride",
      description: "Book for a future date and time"
    },
    {
      id: "round-trip",
      icon: RotateCw,
      title: "Round Trip",
      description: "Book outbound and return journey together"
    },
    {
      id: "multi-stop",
      icon: MapPin,
      title: "Add Stop",
      description: "Multiple pickups and drop-offs in one ride"
    },
  ];

  const handleBooking = (type: any) => {
    setBookingType(type);
    setShowModal(true);
  };

  return (
    <section id="local-transport" className="py-16 px-4 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Local Transport</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible booking options for all your local travel needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {bookingOptions.map((option) => (
            <Card
              key={option.id}
              className="p-6 hover:shadow-lg transition-all cursor-pointer"
              onClick={() => handleBooking(option.id)}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <option.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{option.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {option.description}
              </p>
              <Button size="sm" variant="outline" className="w-full">
                Book Now
              </Button>
            </Card>
          ))}
        </div>

        {/* Quick Booking Card */}
        <Card className="p-8 border-2">
          <h3 className="text-2xl font-bold mb-6">Quick Booking</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Pickup Location
              </label>
              <input
                type="text"
                placeholder="Enter your location"
                className="w-full px-4 py-2 rounded-lg border border-input bg-background"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Dropoff Location
              </label>
              <input
                type="text"
                placeholder="Where to?"
                className="w-full px-4 py-2 rounded-lg border border-input bg-background"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                When
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-input bg-background">
                <option>Now</option>
                <option>Schedule Later</option>
              </select>
            </div>
          </div>

          <Button className="w-full" size="lg">
            Check Availability
          </Button>
        </Card>
      </div>

      <BookingModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={`Book ${bookingOptions.find(b => b.id === bookingType)?.title}`}
        type={`local-${bookingType}`}
      />
    </section>
  );
};

export default BookingSection;
