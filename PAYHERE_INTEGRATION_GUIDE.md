# PayHere Integration Guide

## Overview
Complete PayHere payment integration for BP Tours application with modal-based payment flow.

---

## 📦 PAYHERE MODAL FLOW

### Step 1: Amount Selection
```
┌─────────────────────────────────┐
│  Payment Amount                 │
│  ┌───────────────────────────┐  │
│  │  Total: Rs. 5,000        │  │
│  └───────────────────────────┘  │
│                                  │
│  ○ Card / Bank Transfer        │
│  ○ Digital Wallet              │
│                                  │
│  [Continue to Payment]          │
└─────────────────────────────────┘
```

### Step 2: Payment Details (Card Information)
```
┌─────────────────────────────────┐
│  Email         [your@email.com] │
│  Phone         [+94 XXXXXXXXX]  │
│  First Name    [John]           │
│  Last Name     [Doe]            │
│  Card Number   [1234 5678 ...]  │
│  MM [--] YY [--] CVV [---]      │
│                                  │
│  [Pay Now]  [Back]              │
└─────────────────────────────────┘
```

### Step 3: Processing
```
┌─────────────────────────────────┐
│           Processing            │
│           ⟳ Spinning            │
│     Processing Payment...       │
│     Please wait securely...     │
└─────────────────────────────────┘
```

### Step 4: Success Confirmation
```
┌─────────────────────────────────┐
│          ✓ Success!             │
│    Payment Successful!          │
│  Rs. 5,000 credited to wallet   │
│  TXN: TXN7A2K8B9CX1             │
│          [Done]                 │
└─────────────────────────────────┘
```

---

## 🔧 IMPLEMENTATION DETAILS

### Component Structure

#### PaymentSection.tsx
Main payment interface with:
- Payment method selection (PayHere, Card, Digital Wallet)
- Quick top-up buttons (100, 500, 1000, 2500, 5000)
- Custom amount input
- Wallet balance display
- Transaction history
- Payment benefits

**Key Features:**
```tsx
const [showPayHere, setShowPayHere] = useState(false);
const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

const handlePayHere = (amount: number) => {
  setSelectedAmount(amount);
  setShowPayHere(true);
};
```

#### PayHereModal.tsx
Complete payment processing modal with:
- 4-step payment flow
- SSL security notice
- Real-time card formatting
- Expiry date validation
- CVV input masking
- Transaction reference generation

---

## 💳 PAYHERE REAL IMPLEMENTATION

### Option 1: PayHere Direct Integration (Production)

#### Step 1: Install PayHere SDK
```bash
npm install payhere-web-sdk
```

#### Step 2: Initialize PayHere in PayHereModal.tsx
```typescript
import payhere from 'payhere-web-sdk';

const PayHereModal = ({ isOpen, onClose, amount }: PayHereModalProps) => {
  const handlePayHere = () => {
    payhere.startPayment({
      sandbox: true, // Set to false for production
      merchant_id: "YOUR_MERCHANT_ID",
      return_web: "https://yourwebsite.com/payment-success",
      cancel_web: "https://yourwebsite.com/payment-cancel",
      notify_web: "https://yourserver.com/payhere-notify",
      order_id: `BPT${Date.now()}`,
      items: `Wallet Top-up Rs.${amount}`,
      amount: amount.toString(),
      currency: "LKR",
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      address: "Colombo",
      city: "Colombo",
      country: "Sri Lanka",
      custom_1: "wallet-topup",
      custom_2: userId,
    });
  };
};
```

#### Step 3: Handle Payment Callback
```typescript
// Backend webhook handler (Node.js Express example)
app.post('/payhere-notify', async (req, res) => {
  const { order_id, status, amount, merchant_id } = req.body;
  
  if (status === 2) { // Payment successful
    // Update user wallet in database
    await updateUserWallet(userId, amount);
    res.json({ status: 'ok' });
  } else if (status === 0) { // Pending
    // Handle pending payment
    res.json({ status: 'pending' });
  } else { // Failed
    res.json({ status: 'failed' });
  }
});
```

### Option 2: PayHere Hosted Checkout (Simpler)

```typescript
const handlePaymentFormViaPayHere = () => {
  const paymentObj = {
    sandbox: true,
    merchant_id: "YOUR_MERCHANT_ID",
    return_web: window.location.href,
    merchant_secret: "YOUR_SECRET", // Only on backend!
    notify_web: "YOUR_BACKEND_URL/payhere-notify",
    order_id: `BPT-${Date.now()}`,
    items: "Wallet Top-up",
    amount: selectedAmount.toString(),
    currency: "LKR",
    first_name: formData.firstName,
    last_name: formData.lastName,
    email: formData.email,
    phone: formData.phone,
  };
  
  // Redirect to PayHere hosted checkout
  window.location.href = `https://sandbox.payhere.lk/pay/checkout?${new URLSearchParams(paymentObj).toString()}`;
};
```

---

## 🔐 SECURITY BEST PRACTICES

### 1. Never Store Card Data Server-Side
```typescript
// ❌ WRONG - Never do this
const saveCardData = (cardData) => {
  database.save(cardData); // DANGEROUS!
};

// ✅ RIGHT - Token-based payment
const processPayment = async (token) => {
  const response = await fetch('/api/process-payment', {
    method: 'POST',
    body: JSON.stringify({ token, amount })
  });
};
```

### 2. Validate Amount on Backend
```typescript
// Backend validation
const processPayment = (req, res) => {
  const { userId, amount } = req.body;
  
  // Verify amount matches frontend
  const expectedAmount = getExpectedAmount(userId);
  if (amount !== expectedAmount) {
    return res.status(400).json({ error: 'Invalid amount' });
  }
  
  // Process payment
};
```

### 3. Use HTTPS Only
```typescript
// Always use secure connections
const API_URL = process.env.REACT_APP_API_URL; // Must be https://
```

### 4. Implement CSRF Protection
```typescript
// Add CSRF token to payment requests
const headers = {
  'X-CSRF-Token': csrfToken,
  'Content-Type': 'application/json'
};
```

---

## 📊 PAYHERE RESPONSE CODES

| Code | Status | Action |
|------|--------|--------|
| 0 | Pending | Wait for webhook notification |
| 1 | Processing | Payment being processed |
| 2 | Complete | ✅ Payment successful |
| -1 | Declined | ❌ Payment declined |
| -2 | Expired | ⏰ Authorization expired |
| -3 | Cancelled | 🚫 User cancelled |

---

## 🧪 TESTING THE INTEGRATION

### Test Card Numbers (Sandbox)
```
Visa:           4111 1111 1111 1111
MasterCard:     5555 5555 5555 4444
Diners Club:    3782 822463 10005
American Ex:    3714 496353 98431
```

### Test Expiry & CVV
```
Any future date (MM/YY)
Any 3 or 4 digit CVV
```

---

## 🎯 CURRENT IMPLEMENTATION (DEMO MODE)

The current `PayHereModal.tsx` includes:
- ✅ Full payment form with all fields
- ✅ Card number formatting (spaces every 4 digits)
- ✅ Input validation
- ✅ 4-step payment flow
- ✅ SSL security notice
- ✅ Processing animation
- ✅ Success confirmation
- ✅ Transaction reference ID generation

**To Enable Real PayHere Integration:**

1. Install PayHere SDK:
```bash
npm install payhere-web-sdk
```

2. Replace the mock processing in PayHereModal.tsx (Step 3 handling):
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setProcessing(true);
  setStep("processing");

  try {
    // Initialize PayHere payment
    const response = await fetch('/api/create-payhere-payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: amount,
        email: formData.email,
        phone: formData.phone,
        firstName: formData.firstName,
        lastName: formData.lastName,
        userId: currentUserId,
      })
    });

    const paymentData = await response.json();
    
    // Redirect to PayHere or use hosted checkout
    window.location.href = paymentData.paymentUrl;
    
  } catch (error) {
    console.error('Payment failed:', error);
    setStep("amount"); // Reset on error
  } finally {
    setProcessing(false);
  }
};
```

3. Create backend endpoint `/api/create-payhere-payment`:
```typescript
// Node.js/Express endpoint
app.post('/api/create-payhere-payment', async (req, res) => {
  const { amount, email, phone, firstName, lastName, userId } = req.body;
  
  const orderId = `BPT-${Date.now()}`;
  
  // Create payment object
  const paymentUrl = constructPayHereURL({
    merchant_id: process.env.PAYHERE_MERCHANT_ID,
    order_id: orderId,
    amount: amount,
    email: email,
    phone: phone,
    first_name: firstName,
    last_name: lastName,
  });
  
  res.json({ paymentUrl });
});
```

4. Handle webhook notifications:
```typescript
app.post('/payhere-webhook', async (req, res) => {
  const { order_id, status, amount, md5sig } = req.body;
  
  // Verify MD5 signature
  const hash = md5(`${merchant_id}${order_id}${amount}${status}${merchant_secret}`);
  if (hash !== md5sig) {
    return res.status(400).json({ error: 'Invalid signature' });
  }
  
  if (status === 2) {
    // Update user wallet
    await db.collection('wallets').updateOne(
      { userId },
      { $inc: { balance: amount } }
    );
    
    // Log transaction
    await db.collection('transactions').insertOne({
      userId,
      type: 'top-up',
      amount,
      orderId,
      status: 'completed',
      timestamp: new Date()
    });
  }
  
  res.json({ status: 'ok' });
});
```

---

## 📱 MOBILE OPTIMIZATION

The PayHereModal is fully responsive:
- ✅ Touch-friendly input fields
- ✅ Large tap targets (44px minimum)
- ✅ Keyboard-responsive forms
- ✅ Scrollable content
- ✅ Bottom sheet ready (can be adapted)

---

## 🚀 DEPLOYMENT CHECKLIST

- [ ] Set PAYHERE_MERCHANT_ID environment variable
- [ ] Set PAYHERE_MERCHANT_SECRET (server-side only)
- [ ] Change sandbox: true to sandbox: false
- [ ] Setup webhook endpoint on production server
- [ ] Configure return_web URL for production
- [ ] Setup email notifications
- [ ] Enable SMS notifications
- [ ] Test with real test cards
- [ ] Implement rate limiting on payment endpoint
- [ ] Setup error logging
- [ ] Configure SSL certificate
- [ ] Test on mobile devices

---

## 💬 FREQUENTLY ASKED QUESTIONS

**Q: Is card data stored securely?**
A: No, card data goes directly to PayHere's secure servers. Your backend never sees raw card data.

**Q: What currencies are supported?**
A: PayHere primarily supports LKR (Sri Lankan Rupees). Check current documentation for updates.

**Q: How long is the webhook retry?**
A: PayHere retries webhooks for 24 hours if they fail.

**Q: Can users save cards?**
A: Yes, PayHere supports tokenization for recurring payments. See PayHere documentation.

**Q: What about disputes/chargebacks?**
A: PayHere provides dispute resolution and chargeback protection. Contact their support for details.

---

## 📞 PAYHERE SUPPORT

- **Website**: https://payhere.lk
- **Documentation**: https://payhere.lk/developers
- **Email**: support@payhere.lk
- **Phone**: +94 112 444 444

---

## 🔗 USEFUL RESOURCES

- [PayHere SDK Documentation](https://payhere.lk/guide)
- [PayHere API Reference](https://payhere.lk/developers/hash-api)
- [PayHere Webhook Events](https://payhere.lk/developers/webhooks)
- [PayHere Test Card Numbers](https://payhere.lk/developers/test-cards)
