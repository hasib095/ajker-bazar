# BazarDor

**Everyday essential prices in Bangladesh at a glance.**

BazarDor is a Bengali-language market price application that helps users explore everyday product prices in Bangladesh. Compare current prices, track price increases and decreases, sort products by price, and review price ranges across different markets.

<p align="center">
  <img src="./public/bazar-hero.png" alt="BazarDor market basket illustration" width="240" />
</p>

## Project Overview

BazarDor is a Next.js-based web application that displays daily prices for essential products, including rice, lentils, cooking oil, vegetables, and fish. Users can browse products by category, track price changes, and compare prices for specific products across different markets. The interface is designed around the Bengali language and Bangladeshi number formatting.

## Key Features

1. **Category-Based Product Browsing** — Explore categories and lists of everyday essential products.
2. **Today's Prices and Changes** — See whether prices have increased, decreased, or remained unchanged compared to the previous day.
3. **Price-Based Sorting** — Sort products within a category from lowest to highest price or highest to lowest price.
4. **Market-Based Price Comparison** — View minimum, maximum, and average prices, along with market names and categories.
5. **Account and Sign-In** — Use Better Auth for email/password authentication and configured Google or GitHub sign-in.

## Technologies Used

- **Next.js 16** — App Router and server-rendered pages
- **React 19** — Component-based user interfaces
- **Tailwind CSS 4** and **DaisyUI** — Styling and UI components
- **Better Auth** — Email/password and OAuth authentication
- **MongoDB** — Database for Better Auth user and session data
- **BazarDor Products API** — Product prices and market information

## Dependencies

### Runtime Dependencies

| Package | Purpose |
| --- | --- |
| `next` | Application framework and routing |
| `react`, `react-dom` | UI components and React rendering |
| `@better-auth/mongo-adapter` | MongoDB adapter for Better Auth |
| `better-auth` | Authentication |
| `mongodb` | MongoDB driver |
| `react-fast-marquee`, `react-marquee-text` | Scrolling product prices |
| `react-toastify` | UI notifications |

### Development Dependencies

| Package | Purpose |
| --- | --- |
| `eslint`, `eslint-config-next` | Code linting |
| `tailwindcss`, `@tailwindcss/turbopack` | Styling and CSS build tools |
| `babel-plugin-react-compiler` | React Compiler integration |

## Running Locally

### Prerequisites

- Node.js **20.9.0 or later**
- npm
- A MongoDB connection string
- Google/GitHub OAuth credentials if you want to enable OAuth sign-in

### Installation and Setup

Clone the repository and install the dependencies:

```bash
git clone https://github.com/hasib095/ajker-bazar.git
cd ajker-bazar
npm install
```

Create a `.env.local` file in the project root and add the following environment variables:

```dotenv
BETTER_AUTH_SECRET=replace-with-a-long-random-secret
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URL=mongodb+srv://<username>:<password>@<cluster>/<database>

# Configure these if you want to enable OAuth sign-in
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

Replace `MONGODB_URL` with your MongoDB connection string. Obtain OAuth credentials from the respective provider's developer console and configure the following local callback URLs:

- Google: `http://localhost:3000/api/auth/callback/google`
- GitHub: `http://localhost:3000/api/auth/callback/github`

**Never commit secret credentials to Git.**

Start the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

Other useful commands:

```bash
npm run lint
npm run build
npm run start
```

The application uses the following API to retrieve product information:

`https://api.abcz.workers.dev/api/bazardor/products`

An internet connection is required to retrieve product and price data.

## Links

- **GitHub Repository:** [hasib095/ajker-bazar](https://github.com/hasib095/ajker-bazar)
- **Products API:** [BazarDor Products API](https://api.abcz.workers.dev/api/bazardor/products)
- **Live Application:** No confirmed deployment URL is currently available.