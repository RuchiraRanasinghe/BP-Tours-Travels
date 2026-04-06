import { useState } from "react";
import { Users, Smile, Briefcase, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BookingModal from "@/components/modals/BookingModal";

const MeetGreetSection = () => {
  const [showModal, setShowModal] = useState(false);

  const services = [
    {
      icon: Smile,
      title: "Personal Greeting",
      description: "Our trained staff greet you with a warm welcome"
    },
    {
      icon: Briefcase,
      title: "Assistance",
      description: "Help with luggage and navigation"
    },
    {
      icon: Award,
      title: "Professional Service",
      description: "Premium hospitality experience"
    },
  ];

  return (
    <section id="meet-greet" className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Meet & Greet Service</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium airport greeting service for a personalized arrival experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, idx) => (
            <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Card className="p-8 border-2">
            <h3 className="text-2xl font-bold mb-6">How It Works</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Provide Flight Details</h4>
                  <p className="text-sm text-muted-foreground">
                    Share your flight information
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">We Track Your Flight</h4>
                  <p className="text-sm text-muted-foreground">
                    Monitor your arrival in real-time
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Meet at Baggage Claim</h4>
                  <p className="text-sm text-muted-foreground">
                    We greet you with personalized service
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Smooth Departure</h4>
                  <p className="text-sm text-muted-foreground">
                    Comfortable ride to your destination
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Premium Experience</h3>
            </div>

            <p className="text-muted-foreground mb-6">
              Our Meet & Greet service is perfect for:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>First-time visitors to the city</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Corporate clients and executives</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Group arrivals and tours</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>VIP and special occasions</span>
              </li>
            </ul>

            <Button
              onClick={() => setShowModal(true)}
              size="lg"
              className="w-full"
            >
              Book Meet & Greet
            </Button>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Book Meet & Greet Service"
        type="meet-greet"
      />
    </section>
  );
};

export default MeetGreetSection;
