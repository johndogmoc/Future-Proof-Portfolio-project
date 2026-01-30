# EmailJS Setup Guide

## 📧 How to Enable Email Functionality

Your contact form is now configured to send emails to **john.dogmoc@urios.edu.ph** using EmailJS. Follow these steps to complete the setup:

---

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's FREE!)
3. Sign up with your Google account or email

---

## Step 2: Add Email Service

1. In the EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** (recommended)
4. Click **"Connect Account"** and authorize with your Gmail (john.dogmoc@urios.edu.ph)
5. Copy the **Service ID** (looks like: `service_abc1234`)

---

## Step 3: Create Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template content:

### Subject:
```
New Contact Form Message: {{subject}}
```

### Body:
```
You have a new message from your portfolio contact form!

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Click **"Save"**
5. Copy the **Template ID** (looks like: `template_xyz5678`)

---

## Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"**
2. Find your **Public Key** (looks like: `aBcDeFgHiJkLmNoPqR`)
3. Copy it

---

## Step 5: Update Your Code

Open `src/pages/ContactPage.jsx` and replace these lines (around line 49-51):

```javascript
const serviceId = 'YOUR_SERVICE_ID'  // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'  // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY'  // Replace with your Public Key
```

With your actual credentials:

```javascript
const serviceId = 'service_abc1234'  // Your actual Service ID
const templateId = 'template_xyz5678'  // Your actual Template ID
const publicKey = 'aBcDeFgHiJkLmNoPqR'  // Your actual Public Key
```

---

## Step 6: Test It!

1. Run your dev server: `npm run dev`
2. Go to the Contact page
3. Fill out the form and submit
4. Check your Gmail inbox at **john.dogmoc@urios.edu.ph**
5. You should receive the email! 🎉

---

## 🔒 Security Note

Your EmailJS credentials are safe to use in frontend code because:
- The Public Key is designed to be public
- EmailJS has rate limiting to prevent abuse
- You can set up domain restrictions in the EmailJS dashboard

---

## 📝 Optional: Domain Restriction

For extra security, in EmailJS dashboard:
1. Go to **"Account"** → **"Security"**
2. Add your Vercel domain to **"Allowed Domains"**
3. This prevents others from using your credentials

---

## ✅ What's Already Done

- ✅ EmailJS package installed
- ✅ Contact form integrated with EmailJS
- ✅ Email address updated to john.dogmoc@urios.edu.ph
- ✅ Loading state added to submit button
- ✅ Error handling implemented
- ✅ Success/failure messages configured

---

## 🆘 Troubleshooting

**Problem**: "Failed to send message" error
- **Solution**: Make sure you replaced YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_PUBLIC_KEY with your actual credentials

**Problem**: Email not received
- **Solution**: Check your Gmail spam folder, and verify the template is set up correctly in EmailJS

**Problem**: "Invalid public key" error
- **Solution**: Double-check you copied the Public Key correctly from the EmailJS dashboard

---

## 📚 Resources

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Dashboard: https://dashboard.emailjs.com/

---

**Need Help?** Feel free to check the EmailJS documentation or reach out to their support!
