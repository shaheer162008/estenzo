# Estenzo - UAE Premium Clothing E-commerce Store

A modern, full-featured e-commerce platform built with Next.js, designed specifically for the UAE market. Features premium clothing collections, secure payments, and a comprehensive admin dashboard.

## Features

- 🛍️ **Complete E-commerce Platform**
  - Product catalog with categories (Men, Women, Kids, Accessories)
  - Shopping cart and wishlist functionality
  - Secure checkout with Stripe payments
  - Order tracking and management

- 🔐 **Advanced Authentication**
  - Email/password authentication
  - Google OAuth integration
  - Two-factor authentication (2FA) support
  - Password reset functionality

- 📱 **Responsive Design**
  - Mobile-first approach
  - Desktop and tablet optimized
  - Custom color theme (#950000, #FFFEFF)
  - Modern UI with ShadCN components

- 🏪 **Admin Dashboard**
  - Product management (CRUD operations)
  - Order management and tracking
  - User management
  - Reviews and ratings system
  - Analytics and reporting

- 🌐 **UAE Market Focus**
  - AED currency support
  - UAE-wide delivery options
  - Local payment methods
  - Arabic language support (ready)

- 📝 **Content Management**
  - WordPress blog integration
  - SEO optimized
  - Email newsletters
  - Customer reviews system

## Tech Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS, ShadCN/UI Components
- **Database**: MongoDB with Mongoose
- **Authentication**: NextAuth.js with Google OAuth
- **Payments**: Stripe
- **State Management**: React Context/Hooks
- **Email**: Nodemailer for password reset
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- MongoDB database
- Stripe account
- Google OAuth app (optional)

### Installation

1. **Clone and install dependencies**:
   ```bash
   git clone <your-repo>
   cd estenzo
   npm install
   ```

2. **Environment Setup**:
   Create a `.env.local` file with the following variables:
   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/estenzo-ecommerce
   
   # Authentication
   NEXTAUTH_SECRET=your-nextauth-secret-here
   NEXTAUTH_URL=http://localhost:3000
   
   # Google OAuth (optional)
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   
   # Stripe
   STRIPE_SECRET_KEY=sk_test_your-stripe-secret-key
   STRIPE_PUBLISHABLE_KEY=pk_test_your-stripe-publishable-key
   STRIPE_WEBHOOK_SECRET=whsec_your-webhook-secret
   
   # Email
   EMAIL_SERVER_HOST=smtp.gmail.com
   EMAIL_SERVER_PORT=587
   EMAIL_SERVER_USER=your-email@gmail.com
   EMAIL_SERVER_PASSWORD=your-app-password
   EMAIL_FROM=your-email@gmail.com
   
   # WordPress (optional)
   WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
   ```

3. **Database Setup**:
   - Install MongoDB locally or use MongoDB Atlas
   - The application will automatically create the required collections

4. **Stripe Setup**:
   - Create a Stripe account
   - Get your test keys from the Stripe dashboard
   - Set up webhooks for payment processing

5. **Run the development server**:
   ```bash
   npm run dev
   ```

6. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
│   ├── ui/             # ShadCN UI components
│   └── layout/         # Layout components (Navbar, Footer)
├── lib/                # Utility functions and database connection
├── models/             # MongoDB schemas
├── types/              # TypeScript type definitions
└── hooks/              # Custom React hooks
```

## Customization

### Color Theme
The application uses a custom color theme:
- Primary: #950000 (Deep Red)
- Secondary: #FFFEFF (Off-White)

Colors are defined in `src/app/globals.css` and can be customized there.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

## Support

For support and questions:
- Email: info@estenzo.com
- Phone: +971-50-XXX-XXXX

---

Built with ❤️ for the UAE fashion market

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
