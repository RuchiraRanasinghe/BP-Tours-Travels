import { useState } from "react";
import { CreditCard, Wallet, DollarSign, CheckCircle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PayHereModal from "@/components/modals/PayHereModal";

const PaymentSection = () => {
  const [showPayHere, setShowPayHere] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const paymentMethods = [
    {
      id: "payhere",
      name: "PayHere",
      description: "Pay with card or bank transfer",
      icon: Wallet,
      badge: "Recommended"
    },
    {
      id: "card",
      name: "Credit/Debit Card",
      description: "Visa, Mastercard, American Express",
      icon: CreditCard,
      badge: null
    },
    {
      id: "wallet",
      name: "Digital Wallet",
      description: "Apple Pay, Google Pay",
      icon: Wallet,
      badge: null
    },
  ];

  const quickAmounts = [100, 500, 1000, 2500, 5000];

  const handlePayHere = (amount: number) => {
    setSelectedAmount(amount);
    setShowPayHere(true);
  };

  return (
    <section id="payment-methods" className="py-16 px-4 md:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Payment Methods</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Safe, secure, and convenient payment options for all your rides
          </p>
        </div>

        {/* Payment Methods Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {paymentMethods.map((method) => (
            <Card
              key={method.id}
              className={`p-6 border-2 hover:shadow-lg transition-all cursor-pointer relative ${
                method.id === "payhere"
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-border"
              }`}
            >
              {method.badge && (
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {method.badge}
                </div>
              )}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <method.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{method.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {method.description}
              </p>
              <Button
                onClick={() =>
                  method.id === "payhere" && handlePayHere(100)
                }
                className="w-full"
                variant={method.id === "payhere" ? "default" : "outline"}
              >
                Select
              </Button>
            </Card>
          ))}
        </div>

        {/* Security Info */}
        <Card className="p-6 bg-white dark:bg-slate-800 border-border mb-12">
          <div className="flex items-start gap-4">
            <Lock className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Secure & Encrypted</h3>
              <p className="text-muted-foreground text-sm">
                All payments are processed securely with SSL encryption. Your payment information is never stored on our servers.
              </p>
            </div>
          </div>
        </Card>

        <Tabs defaultValue="quick" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="quick">Quick Top-Up</TabsTrigger>
            <TabsTrigger value="wallet">Wallet Balance</TabsTrigger>
          </TabsList>

          {/* Quick Top-Up */}
          <TabsContent value="quick" className="space-y-6">
            <Card className="p-6 border-2">
              <h3 className="text-xl font-bold mb-6">Quick Top-Up Your Wallet</h3>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                {quickAmounts.map((amount) => (
                  <Button
                    key={amount}
                    onClick={() => handlePayHere(amount)}
                    variant="outline"
                    className="h-auto py-4 flex flex-col items-center gap-2 hover:border-primary hover:text-primary"
                  >
                    <DollarSign className="w-5 h-5" />
                    <span className="font-bold">Rs. {amount}</span>
                  </Button>
                ))}
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold mb-3">Custom Amount</h4>
                <div className="flex gap-3">
                  <input
                    type="number"
                    placeholder="Enter amount in Rs"
                    min="100"
                    step="100"
                    onChange={(e) => {
                      if (e.target.value) {
                        setSelectedAmount(parseInt(e.target.value));
                      }
                    }}
                    className="flex-1 px-4 py-2 rounded-lg border border-input bg-background"
                  />
                  <Button
                    onClick={() => {
                      if (selectedAmount && selectedAmount >= 100) {
                        handlePayHere(selectedAmount);
                      }
                    }}
                    className="px-6"
                  >
                    Pay Now
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Wallet Balance */}
          <TabsContent value="wallet" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-to-br from-primary to-primary/80 text-white border-0">
                <p className="text-sm text-white/80 mb-2">Current Balance</p>
                <p className="text-4xl font-bold mb-4">Rs. 2,500</p>
                <p className="text-sm text-white/80">Available for rides</p>
              </Card>

              <Card className="p-6 border-2">
                <h4 className="font-semibold mb-4">Recent Top-Ups</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">PayHere Payment</p>
                      <p className="text-xs text-muted-foreground">Apr 5, 2026</p>
                    </div>
                    <span className="font-bold text-green-600">+Rs. 1,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">PayHere Payment</p>
                      <p className="text-xs text-muted-foreground">Apr 1, 2026</p>
                    </div>
                    <span className="font-bold text-green-600">+Rs. 1,500</span>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6 border-2">
              <h4 className="font-semibold mb-4">Payment History</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Ride: Home to Office</p>
                    <p className="text-xs text-muted-foreground">Apr 4, 2026</p>
                  </div>
                  <span className="font-bold text-red-600">-Rs. 350</span>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Ride: Office to Airport</p>
                    <p className="text-xs text-muted-foreground">Apr 3, 2026</p>
                  </div>
                  <span className="font-bold text-red-600">-Rs. 850</span>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Benefits Card */}
        <Card className="mt-12 p-8 border-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700">
          <h3 className="text-2xl font-bold mb-6">Payment Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Instant Refunds</h4>
                <p className="text-sm text-muted-foreground">
                  Quick refunds for cancelled rides
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Cashback Rewards</h4>
                <p className="text-sm text-muted-foreground">
                  Earn 2% cashback on every ride
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">No Hidden Fees</h4>
                <p className="text-sm text-muted-foreground">
                  Zero additional charges or surcharges
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <PayHereModal
        isOpen={showPayHere}
        onClose={() => setShowPayHere(false)}
        amount={selectedAmount || 0}
      />
    </section>
  );
};

export default PaymentSection;
