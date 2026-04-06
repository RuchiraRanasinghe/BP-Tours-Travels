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
import { MessageCircle, Send } from "lucide-react";

interface ChatSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatSupportModal = ({ isOpen, onClose }: ChatSupportModalProps) => {
  const [messages, setMessages] = useState<
    Array<{ type: "user" | "agent"; text: string }>
  >([
    {
      type: "agent",
      text: "Hi! 👋 Welcome to BP Tours Support. How can we help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { type: "user", text: input }]);
      setInput("");
      // Simulate agent response
      setTimeout(() => {
        const responses = [
          "Thanks for reaching out! I'll help you with that.",
          "I understand. Let me look into that for you.",
          "Great question! Here's what I can help with...",
          "I'm here to assist. Can you provide more details?",
        ];
        const randomResponse =
          responses[Math.floor(Math.random() * responses.length)];
        setMessages((prev) => [...prev, { type: "agent", text: randomResponse }]);
      }, 500);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl h-[600px] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-primary" />
            Live Chat Support
          </DialogTitle>
          <DialogDescription>
            Chat with our support team - average response time 2 minutes
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-4 p-4 bg-muted/30 rounded-lg mb-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.type === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border border-border"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 rounded-lg border border-input bg-background"
            />
            <Button onClick={handleSend} size="icon">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <DialogClose className="absolute right-4 top-4" />
      </DialogContent>
    </Dialog>
  );
};

export default ChatSupportModal;
