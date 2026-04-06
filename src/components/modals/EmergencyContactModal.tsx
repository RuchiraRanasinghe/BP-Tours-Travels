import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertCircle, Phone } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface EmergencyContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmergencyContactModal = ({ isOpen, onClose }: EmergencyContactModalProps) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const emergencyContacts = [
    {
      type: "Police",
      number: "119",
      description: "For immediate police assistance",
    },
    {
      type: "Ambulance",
      number: "110",
      description: "For medical emergencies",
    },
    {
      type: "BP Tours Support",
      number: "+94 (0) XXXXX XXXX",
      description: "24/7 dedicated support line",
    },
    {
      type: "Fire Department",
      number: "110",
      description: "For fire emergencies",
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-red-600" />
            Emergency Contact Information
          </DialogTitle>
          <DialogDescription>
            Important emergency numbers and contacts available 24/7
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <Alert className="bg-red-50 border-red-200">
            <AlertDescription className="text-red-800">
              In case of emergency, call the relevant emergency number or BP Tours
              support immediately.
            </AlertDescription>
          </Alert>

          {!showConfirm ? (
            <div className="space-y-3">
              {emergencyContacts.map((contact, idx) => (
                <Card key={idx} className="p-4 border-2 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-lg">{contact.type}</h4>
                      <p className="text-sm text-muted-foreground">
                        {contact.description}
                      </p>
                    </div>
                    <a
                      href={`tel:${contact.number}`}
                      className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-bold"
                    >
                      <Phone className="w-4 h-4" />
                      {contact.number}
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-8 bg-red-50 border-red-200">
              <div className="text-center">
                <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-red-900 mb-2">
                  Are You Safe?
                </h3>
                <p className="text-red-800 mb-6">
                  If you're experiencing an emergency with your ride, our support team
                  is ready to help immediately.
                </p>

                <div className="space-y-3">
                  <Button
                    size="lg"
                    className="w-full bg-red-600 hover:bg-red-700"
                    onClick={() => {
                      // Simulate emergency call
                      alert("Connecting to emergency support...");
                    }}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Emergency Support Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full"
                    onClick={onClose}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {!showConfirm && (
            <div className="flex gap-3 pt-4 border-t">
              <Button
                onClick={() => setShowConfirm(true)}
                className="flex-1 bg-red-600 hover:bg-red-700"
                size="lg"
              >
                I Need Immediate Help
              </Button>
              <Button
                onClick={onClose}
                variant="outline"
                size="lg"
                className="flex-1"
              >
                Close
              </Button>
            </div>
          )}
        </div>

        <DialogClose className="absolute right-4 top-4" />
      </DialogContent>
    </Dialog>
  );
};

export default EmergencyContactModal;
