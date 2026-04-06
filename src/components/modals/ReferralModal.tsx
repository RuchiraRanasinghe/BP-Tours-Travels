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
import { Gift, Copy, CheckCircle } from "lucide-react";

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReferralModal = ({ isOpen, onClose }: ReferralModalProps) => {
  const [copied, setCopied] = useState(false);
  const referralCode = "BPTOURS2024ABC";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Gift className="w-6 h-6 text-primary" />
            Refer & Earn
          </DialogTitle>
          <DialogDescription>
            Share your referral code and earn rewards for every successful referral
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Your Referral Code */}
          <Card className="p-6 bg-primary/5 border-primary/20">
            <h3 className="font-semibold mb-3">Your Referral Code</h3>
            <div className="flex gap-2">
              <input
                type="text"
                value={referralCode}
                readOnly
                className="flex-1 px-4 py-2 rounded-lg border border-primary/30 bg-background font-mono font-bold"
              />
              <Button
                onClick={handleCopy}
                variant="outline"
                size="icon"
                className="w-12"
              >
                {copied ? (
                  <CheckCircle className="w-4 h-4 text-green-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
            {copied && (
              <p className="text-sm text-green-600 mt-2">✓ Copied to clipboard!</p>
            )}
          </Card>

          {/* Referral Benefits */}
          <div className="space-y-3">
            <h3 className="font-semibold">What You Earn</h3>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 border-2">
                <p className="text-sm text-muted-foreground mb-1">Per Referral</p>
                <p className="text-2xl font-bold text-primary">Rs. 500</p>
                <p className="text-xs text-muted-foreground mt-1">
                  When friend completes first ride
                </p>
              </Card>
              <Card className="p-4 border-2">
                <p className="text-sm text-muted-foreground mb-1">Friend Gets</p>
                <p className="text-2xl font-bold text-primary">Rs. 300</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Discount on first ride
                </p>
              </Card>
            </div>
          </div>

          {/* How It Works */}
          <div className="space-y-3">
            <h3 className="font-semibold">How It Works</h3>
            <div className="space-y-2">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                </div>
                <div>
                  <p className="font-medium text-sm">Share Your Code</p>
                  <p className="text-xs text-muted-foreground">
                    Send your referral code to friends
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                </div>
                <div>
                  <p className="font-medium text-sm">They Sign Up</p>
                  <p className="text-xs text-muted-foreground">
                    Your friend creates an account using your code
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                </div>
                <div>
                  <p className="font-medium text-sm">They Book & Ride</p>
                  <p className="text-xs text-muted-foreground">
                    They take their first ride and you earn!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Your Referrals */}
          <Card className="p-4 bg-muted/50">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-primary">5</p>
                <p className="text-xs text-muted-foreground">Total Referrals</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">3</p>
                <p className="text-xs text-muted-foreground">Completed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">Rs. 1,500</p>
                <p className="text-xs text-muted-foreground">Earned</p>
              </div>
            </div>
          </Card>

          {/* Actions */}
          <div className="flex gap-3">
            <Button className="flex-1" size="lg">
              Share Code
            </Button>
            <Button variant="outline" className="flex-1" size="lg" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>

        <DialogClose className="absolute right-4 top-4" />
      </DialogContent>
    </Dialog>
  );
};

export default ReferralModal;
