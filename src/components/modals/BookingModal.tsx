import { useState } from "react";
import { X, Calendar, Users, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
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

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: string;
}

const BookingModal = ({ isOpen, onClose, title, type }: BookingModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    fromLocation: "",
    toLocation: "",
    date: "",
    time: "",
    passengers: "1",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        fromLocation: "",
        toLocation: "",
        date: "",
        time: "",
        passengers: "1",
        notes: "",
      });
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription>
            Fill in the details below to complete your booking
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {submitted ? (
            <Card className="p-8 bg-green-50 border-green-200">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <ArrowRight className="w-8 h-8 text-green-600 rotate-45" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  Booking Submitted!
                </h3>
                <p className="text-green-800 mb-4">
                  We'll confirm your booking within 5 minutes. Check your email for updates.
                </p>
                <p className="text-sm text-green-700">
                  Booking Reference: BPT{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
              </div>
            </Card>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Personal Information */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Your Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Full name"
                      className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+94 XXXXXXXXX"
                    className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm"
                  />
                </div>
              </div>

              {/* Booking Details */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Booking Details</h4>
                <div>
                  <label className="block text-sm font-medium mb-1">From</label>
                  <input
                    type="text"
                    name="fromLocation"
                    value={formData.fromLocation}
                    onChange={handleChange}
                    required
                    placeholder="Pickup location"
                    className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">To</label>
                  <input
                    type="text"
                    name="toLocation"
                    value={formData.toLocation}
                    onChange={handleChange}
                    required
                    placeholder="Drop location"
                    className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Time</label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Passengers</label>
                    <select
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4+</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="space-y-3">
                <label className="block text-sm font-medium">
                  Special Requests (Optional)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any special requirements or notes..."
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm resize-none"
                />
              </div>

              {/* Submit */}
              <div className="flex gap-3 pt-4">
                <Button
                  type="submit"
                  className="flex-1"
                  size="lg"
                >
                  Confirm Booking
                </Button>
                <Button
                  type="button"
                  onClick={onClose}
                  variant="outline"
                  size="lg"
                >
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </div>

        <DialogClose className="absolute right-4 top-4" />
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
