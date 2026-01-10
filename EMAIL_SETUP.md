# Resend Email Setup

## Setup (2 minutes)

1. Go to https://resend.com and sign up
2. Go to API Keys → Create API Key
3. Copy the key (starts with `re_`)
4. Update `.env.local`:
   ```
   RESEND_API_KEY=re_your_key_here
   RECIPIENT_EMAIL=redsymptom@gmail.com
   ```
5. Restart dev server and test

## Notes
- Free tier: 100 emails/day, 3000/month
- Uses `onboarding@resend.dev` as sender (works immediately, no verification needed)
- To use a custom domain later, add it in Resend dashboard
- Change RECIPIENT_EMAIL to client's email for production
