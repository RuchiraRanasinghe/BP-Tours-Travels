# BP Tours - Complete Testing Guide

## 🧪 TESTING CHECKLIST

### Page Load & Navigation
- [ ] Page loads without errors in browser console
- [ ] Navbar appears fixed at top
- [ ] Logo and "BP Tours" text visible
- [ ] Hero section displays properly
- [ ] All sections load without lag

### Smooth Scrolling
- [ ] Click "Book Now" button → scrolls to booking section
- [ ] Click navbar links → smooth scroll to sections
- [ ] Hash URLs work (e.g., `/#airport-pickup`)
- [ ] Mobile menu links scroll properly

---

## ✈️ AIRPORT SERVICES TESTING

### Airport Pickup Section
**Location**: Click "Airport" → "Airport Pickup"

- [ ] Section displays with correct ID `#airport-pickup`
- [ ] Section title: "Airport Pickup"
- [ ] Features visible:
  - [ ] Flight Tracking
  - [ ] Timely Arrival
  - [ ] No Waiting Hassles
- [ ] "Book Airport Pickup" button appears
- [ ] Click button → BookingModal opens
- [ ] Modal form has all fields:
  - [ ] Name, Email, Phone
  - [ ] From Airport, Destination
  - [ ] Arrival Date, Time
  - [ ] Passengers dropdown
  - [ ] Submit button
- [ ] Fill and submit form → Shows success message
- [ ] Success message shows booking reference
- [ ] Modal closes after success

### Airport Drop Section
**Location**: Click "Airport" → "Airport Drop"

- [ ] Section displays with correct ID `#airport-drop`
- [ ] Section title: "Airport Drop"
- [ ] Features visible:
  - [ ] Luggage Assistance
  - [ ] Timely Delivery
  - [ ] Safe & Comfortable
- [ ] Quick booking card on page
- [ ] "Book Airport Drop" button opens BookingModal
- [ ] All functionality works (fill, submit, success)

### Meet & Greet Section
**Location**: Click "Airport" → "Meet & Greet"

- [ ] Section displays with correct ID `#meet-greet`
- [ ] Shows 3 service cards:
  - [ ] Personal Greeting
  - [ ] Assistance
  - [ ] Professional Service
- [ ] "How It Works" section with 4 steps
- [ ] "Book Meet & Greet" button works
- [ ] Modal opens and form submits correctly

---

## 🚗 LOCAL TRANSPORT TESTING

### Book Ride Section
**Location**: Click "Book Ride" or scroll down

- [ ] Section displays
- [ ] Shows 4 booking option cards:
  - [ ] Ride Now (⚡)
  - [ ] Schedule a Ride (🕐)
  - [ ] Round Trip (🔄)
  - [ ] Add Stop (📍)
- [ ] Quick booking card visible with:
  - [ ] Pickup location input
  - [ ] Dropoff location input
  - [ ] When selector (Now/Schedule)
  - [ ] Check Availability button
- [ ] Each option button opens BookingModal
- [ ] Modal title changes based on selection

---

## 💰 PRICING TESTING

### Pricing Section
**Location**: Click "Pricing" → "Fare Estimator"

- [ ] Section displays with correct ID `#pricing`
- [ ] Section title: "Transparent Pricing"
- [ ] Fare Estimator card visible with:
  - [ ] From input field
  - [ ] To input field
  - [ ] "Estimate Fare" button
- [ ] Enter locations → click estimate
- [ ] Shows estimated fare: "Rs. XXX"
- [ ] Price information card shows:
  - [ ] Base fare
  - [ ] Distance charges
  - [ ] Fuel surcharge
  - [ ] Toll fees
  - [ ] Professional driver
- [ ] Pricing table visible with rates for:
  - [ ] Sedan
  - [ ] SUV
  - [ ] Premium
  - [ ] Airport Transfer

---

## 💳 PAYMENT TESTING (NEW!)

### Payment Section
**Location**: Click "Account" → "Payment Methods"

- [ ] Section displays with correct ID `#payment-methods`
- [ ] Section title: "Payment Methods"

#### Payment Methods Cards
- [ ] PayHere card shows "Recommended" badge
- [ ] Credit/Debit Card option visible
- [ ] Digital Wallet option visible
- [ ] Each card has "Select" button

#### Quick Top-Up
- [ ] Quick amount buttons visible:
  - [ ] Rs. 100
  - [ ] Rs. 500
  - [ ] Rs. 1,000
  - [ ] Rs. 2,500
  - [ ] Rs. 5,000
- [ ] Custom amount input available
- [ ] Click amount → PayHereModal opens

#### Wallet Balance Tab
- [ ] Current Balance displayed: "Rs. 2,500"
- [ ] Recent Top-Ups section shows transactions
- [ ] Payment History section shows ride charges
- [ ] All amounts properly formatted

### PayHere Modal Testing

#### Step 1: Amount Selection
- [ ] Modal opens with amount
- [ ] Shows "Total Amount: Rs. XXX"
- [ ] Radio buttons for payment type
- [ ] "Continue to Payment" button works

#### Step 2: Payment Details
- [ ] Email field populated/editable
- [ ] Phone field populated/editable
- [ ] First Name field
- [ ] Last Name field
- [ ] Card Number input:
  - [ ] Formats with spaces (1234 5678 ...)
  - [ ] Max 16 digits
  - [ ] Shows Card icon
- [ ] Expiry Month dropdown (01-12)
- [ ] Expiry Year dropdown (2026-2035)
- [ ] CVV field (max 3 digits, masked)
- [ ] Order summary shows amount
- [ ] "Pay Now" button triggers processing
- [ ] "Back" button returns to amount selection

#### Step 3: Processing
- [ ] Shows spinning animation
- [ ] Text: "Processing Payment"
- [ ] Auto-transitions to success after 2 seconds

#### Step 4: Success
- [ ] Green success card displays
- [ ] Checkmark icon visible
- [ ] Shows "Payment Successful!"
- [ ] Shows amount added to wallet
- [ ] Transaction reference displayed
- [ ] "Done" button closes modal

---

## 🚙 VEHICLES & FLEET TESTING

### Fleet Section
**Location**: Click "Vehicles" → "Fleet"

- [ ] Section displays with correct ID `#fleet`
- [ ] 3 vehicle cards visible:
  - [ ] Sedan 🚗
  - [ ] SUV 🚙
  - [ ] Hatchback 🚗
- [ ] Click vehicle → Card gets border highlight
- [ ] Selected vehicle info updates on right:
  - [ ] Name and description
  - [ ] Capacity info
  - [ ] Features list
  - [ ] Luggage guide with three categories
- [ ] "Book [Vehicle]" button works
- [ ] BookingModal opens with vehicle type

---

## 📍 TRACKING TESTING

### Tracking Section
**Location**: Click "Vehicles" → "Live Tracking"

- [ ] Section displays with correct ID `#track-ride`
- [ ] Section title: "Live Tracking"

#### Tracking Features
- [ ] "Track Your Ride" card:
  - [ ] Input field for booking ID
  - [ ] "Start Tracking" button
  - [ ] Enter ID → Success alert shows
- [ ] "Share Trip Progress" card:
  - [ ] "Share Tracking Link" button
  - [ ] Click → Email input appears
  - [ ] Enter email → "Send Link" button
  - [ ] Confirmation message shows
- [ ] 3 feature cards:
  - [ ] Real-Time Updates
  - [ ] Easy Sharing
  - [ ] Accurate Route

---

## 🆘 SUPPORT & SAFETY TESTING

### Support Section
**Location**: Click "Support" → "24/7 Support"

- [ ] Section displays with correct ID `#support`

#### Support Cards
- [ ] 24/7 Support card:
  - [ ] Message icon
  - [ ] "Start Chat" button → ChatSupportModal opens
- [ ] Emergency Assistance card:
  - [ ] Red alert icon
  - [ ] Phone number button
  - [ ] "Call Emergency Support Now" works
- [ ] Ride Safety card:
  - [ ] Shield icon
  - [ ] "Learn More" button

#### Chat Modal
- [ ] Message interface displays
- [ ] Shows initial agent message
- [ ] Type message → "Send" button
- [ ] Message appears in chat
- [ ] Bot replies with canned response
- [ ] Close button works

#### Emergency Modal
- [ ] Lists emergency contacts:
  - [ ] Police (119)
  - [ ] Ambulance (110)
  - [ ] BP Tours Support
  - [ ] Fire Department (110)
- [ ] Each has phone button for calling
- [ ] "I Need Immediate Help" button works
- [ ] Confirmation screen appears

### Contact Section
**Location**: Click "Support" → "Contact Us"

- [ ] Section displays with correct ID `#contact`
- [ ] 3 cards with info:
  - [ ] Phone card with number
  - [ ] Email card with email
  - [ ] Location card with address
- [ ] Contact form visible:
  - [ ] Name input
  - [ ] Email input
  - [ ] Subject dropdown (5 options)
  - [ ] Message textarea
- [ ] Submit form → Success notification

---

## 👤 ACCOUNT TESTING

### Account Section
**Location**: Click "Account" → "My Account"

- [ ] Section displays with correct ID `#my-account`
- [ ] User profile card on left:
  - [ ] Avatar icon
  - [ ] User name "John Doe"
  - [ ] Email shown
  - [ ] Menu buttons for:
    - [ ] Profile
    - [ ] My Rides
    - [ ] Saved Places
    - [ ] Payment Methods

#### Profile Tab
- [ ] Shows read-only profile info
- [ ] "Edit" button → Edit mode
- [ ] Edit mode shows:
  - [ ] Name input (editable)
  - [ ] Email input (editable)
  - [ ] Phone input (editable)
  - [ ] "Save Changes" button
  - [ ] "Cancel" button
- [ ] Save button → Returns to read-only
- [ ] Cancel button → Discards changes

#### My Rides Tab
- [ ] Shows 3 recent rides:
  - [ ] From → To locations
  - [ ] Date of ride
  - [ ] Fare amount
  - [ ] Details button
- [ ] Each ride clickable for details

#### Saved Places Tab
- [ ] Shows saved places list:
  - [ ] Home
  - [ ] Work
  - [ ] Airport
- [ ] Each place shows name and address
- [ ] Edit/Delete buttons visible
- [ ] "Add Place" button at top

#### Payment Methods Tab
- [ ] Shows saved cards:
  - [ ] Visa •••• 4242
  - [ ] MasterCard •••• 5555
- [ ] Shows expiry dates
- [ ] Edit/Delete buttons visible
- [ ] "Add Card" button at top

---

## 📱 MOBILE MENU TESTING

### Mobile Menu (Hamburger)
**When screen width < 768px**

- [ ] Hamburger icon visible top-right
- [ ] Click icon → Menu opens
- [ ] Menu sections visible:
  - [ ] ✈️ Airport (4 links)
  - [ ] Booking (4 links)
  - [ ] Services (4 links)
  - [ ] Account (5 links including Payment)
  - [ ] Support (4 links)
- [ ] Click link → Menu closes & scrolls to section
- [ ] Click X → Menu closes

---

## 🌐 RESPONSIVE DESIGN TESTING

### Desktop (≥ 1024px)
- [ ] Full mega menu displays
- [ ] All content visible without scrolling sideway
- [ ] Buttons sized appropriately
- [ ] Forms have good spacing

### Tablet (768px - 1023px)
- [ ] Menu adapts to tablet size
- [ ] Mobile menu works
- [ ] Content readable

### Mobile (< 768px)
- [ ] Mobile menu hamburger visible
- [ ] All sections stack vertically
- [ ] Buttons full width or touch-sized
- [ ] Forms on single column
- [ ] Images responsive

---

## ⚡ PERFORMANCE TESTING

- [ ] Page loads in < 3 seconds
- [ ] No console errors
- [ ] Smooth scrolling (60fps)
- [ ] Modals open instantly
- [ ] Forms respond immediately
- [ ] No visual jank during interactions

---

## 🔍 ACCESSIBILITY TESTING

- [ ] All buttons have text/labels
- [ ] Form inputs have labels
- [ ] Links are clearly visible
- [ ] Color contrast is sufficient
- [ ] Tab navigation works
- [ ] Screen reader compatible (test with NVDA/JAWS)

---

## 🐛 COMMON ISSUES & FIXES

| Issue | Cause | Fix |
|-------|-------|-----|
| Modal not opening | Event handler not connected | Check onClick handler |
| Scroll not working | Section ID mismatch | Verify `id={section-id}` |
| Styling issues | Tailwind not building | Run `npm run dev` |
| Modal form reset | State not clearing | Check handleClose function |
| PayHere button not visible | Payment section not imported | Check Index.tsx imports |

---

## ✅ FINAL VERIFICATION

Use this checklist for final sign-off:

- [ ] All 11 sections present and working
- [ ] All 5 modals open and functional
- [ ] All navbar links navigate correctly
- [ ] Mobile menu works on small screens
- [ ] Forms can be submitted
- [ ] Smooth scrolling enabled
- [ ] No console errors
- [ ] No broken images
- [ ] Responsive design tested
- [ ] All buttons are clickable
- [ ] All section IDs correct
- [ ] Payment section & modal fully functional

---

## 📊 DETAILED TEST RESULTS TEMPLATE

```
Test Date: _______________
Tester: ___________________
Browser: __________________
Device: ___________________

RESULTS:
✅ = Working
❌ = Not working
⚠️ = Partial/needs fix

[Copy and fill out]
```

---

## 🚀 BROWSER COMPATIBILITY

Test on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Chrome
- [ ] Mobile Safari

---

## 📞 TESTING SUPPORT

If issues occur:
1. Check browser console for errors
2. Verify all imports are correct
3. Check that all component files exist
4. Run `npm run build` to verify build
5. Clear browser cache and reload
6. Check network tab for failed requests

---

## 🎯 SUCCESS CRITERIA

✅ **All tests pass if:**
- Every link navigates to correct section
- Every modal opens and closes cleanly
- Every form can be filled and submitted
- Mobile menu works on small screens
- No errors in browser console
- Page responsive on all screen sizes
- Payment flow completes 4 steps
- All section content displays properly
