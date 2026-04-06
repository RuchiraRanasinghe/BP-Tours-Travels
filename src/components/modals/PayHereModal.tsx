import { useState } from "react";
import { X, Lock, CheckCircle, AlertCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface PayHereModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
}

const PayHereModal = ({ isOpen, onClose, amount }: PayHereModalProps) => {
  const [step, setStep] = useState<"amount" | "details" | "processing" | "success">("amount");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  });
  const [processing, setProcessing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setStep("processing");

    // Simulate PayHere API call
    setTimeout(() => {
      setStep("success");
      setProcessing(false);
    }, 2000);
  };

  const handleClose = () => {
    if (step === "success") {
      setStep("amount");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        cardNumber: "",
        expiryMonth: "",
        expiryYear: "",
        cvv: "",
      });
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Lock className="w-6 h-6 text-primary" />
            PayHere Secure Payment
          </DialogTitle>
          <DialogDescription>
            Secure payment powered by PayHere
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {step === "amount" && (
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 border-2">
              <h3 className="text-xl font-bold mb-4">Payment Amount</h3>

              <div className="mb-6 p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-primary">
                <p className="text-muted-foreground text-sm mb-1">Total Amount</p>
                <p className="text-4xl font-bold text-primary">
                  Rs. {amount?.toLocaleString() || "0"}
                </p>
              </div>

              <div className="space-y-3">
                <label className="block">
                  <input
                    type="radio"
                    defaultChecked
                    className="mr-3"
                  />
                  <span className="font-medium">Card / Bank Transfer</span>
                </label>
                <label className="block">
                  <input
                    type="radio"
                    className="mr-3"
                  />
                  <span className="font-medium">Digital Wallet</span>
                </label>
              </div>

              <Button
                onClick={() => setStep("details")}
                className="w-full mt-6"
                size="lg"
              >
                Continue to Payment
              </Button>
            </Card>
          )}

          {step === "details" && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Alert className="bg-blue-50 border-blue-200">
                <Lock className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-blue-800">
                  Your payment is secured with 128-bit SSL encryption
                </AlertDescription>
              </Alert>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+94 XXXXXXXXX"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="First name"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Last name"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\s/g, "");
                    if (value.length <= 16) {
                      const formatted = value
                        .replace(/(\d{4})/g, "$1 ")
                        .trim();
                      setFormData({
                        ...formData,
                        cardNumber: formatted,
                      });
                    }
                  }}
                  required
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background font-mono"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    MM
                  </label>
                  <select
                    name="expiryMonth"
                    value={formData.expiryMonth}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                  >
                    <option value="">Month</option>
                    {Array.from({ length: 12 }, (_, i) => {
                      const month = String(i + 1).padStart(2, "0");
                      return (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    YY
                  </label>
                  <select
                    name="expiryYear"
                    value={formData.expiryYear}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                  >
                    <option value="">Year</option>
                    {Array.from({ length: 10 }, (_, i) => {
                      const year = String(2026 + i).slice(-2);
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    CVV
                  </label>
                  <input
                    type="password"
                    name="cvv"
                    value={formData.cvv}
                    onChange={(e) => {
                      if (e.target.value.length <= 3) {
                        setFormData({
                          ...formData,
                          cvv: e.target.value,
                        });
                      }
                    }}
                    required
                    placeholder="•••"
                    maxLength={3}
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background font-mono"
                  />
                </div>
              </div>

              <Card className="p-4 bg-muted/50">
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Amount</span>
                  <span className="font-semibold">Rs. {amount?.toLocaleString() || "0"}</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-primary text-lg">
                    Rs. {amount?.toLocaleString() || "0"}
                  </span>
                </div>
              </Card>

              <div className="flex gap-3">
                <Button
                  type="submit"
                  className="flex-1"
                  size="lg"
                  disabled={processing}
                >
                  {processing ? "Processing..." : "Pay Now"}
                </Button>
                <Button
                  type="button"
                  onClick={() => setStep("amount")}
                  variant="outline"
                  size="lg"
                  className="flex-1"
                >
                  Back
                </Button>
              </div>
            </form>
          )}

          {step === "processing" && (
            <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 border-0">
              <div className="flex justify-center mb-4">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Processing Payment</h3>
              <p className="text-muted-foreground">
                Please wait while your payment is being processed securely...
              </p>
            </Card>
          )}

          {step === "success" && (
            <Card className="p-8 text-center bg-green-50 dark:bg-slate-800 border-green-200">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-green-900 dark:text-green-400 mb-2">
                Payment Successful!
              </h3>
              <p className="text-green-800 dark:text-green-200 mb-4">
                Your wallet has been credited with Rs. {amount?.toLocaleString()} 
              </p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-lg mb-6 text-left">
                <p className="text-sm text-muted-foreground mb-1">
                  Transaction Reference
                </p>
                <p className="font-mono font-bold">
                  TXN{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
              </div>
              <Button onClick={handleClose} className="w-full" size="lg">
                Done
              </Button>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PayHereModal;
