# CRWN Clothing eCommerce

Welcome to **CRWN Clothing** – an eCommerce platform where users can browse by category, add or remove items from the cart, and complete purchases. Built with React, Firebase, Firestore, and Stripe, this project offers a seamless shopping experience with user authentication and data persistence.

![CRWN Clothing Home Page](./src/assets/home-page.jpg)

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

CRWN Clothing is designed to simulate a real-world shopping app, with authentication for added security, category-based browsing, and a cart that persists using Redux Persist and Firestore. Users can authenticate with Firebase, store cart data, and make payments with Stripe.

## Key Features

- **User Authentication**: Firebase authentication, supporting email/password and Google sign-in.
- **Firestore Data Storage**: Categories, products, and user data are stored in Firestore.
- **Redux State Management**: Uses Redux Toolkit and `redux-persist` for managing state and ensuring data persistence.
- **Shopping Cart**: Add, remove, and update items in the cart.
- **Stripe Payment Integration**: Secure payment processing via Stripe.
- **Responsive Design**: Mobile-friendly layout for a smooth shopping experience on all devices.

![Product Categories](./src/assets/products.jpg)

## Technologies Used

### Frontend

- **React** – Core library for building user interfaces
- **React Router** – Client-side routing for seamless navigation
- **Redux Toolkit** – State management and asynchronous actions
- **Redux Persist** – Persistent state storage in local storage
- **SASS** – Styling preprocessor for efficient styling

### Backend & Database

- **Firebase** – Backend-as-a-service for authentication and hosting
- **Firestore** – Real-time database for storing user and product data

### Payment Processing

- **Stripe** – Payment processing API for handling purchases

![Cart and Checkout](./src//assets/cart-checkout.jpg)

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js and npm installed
- Firebase project configured with Firestore and Authentication

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shay122990/ecom-react-crwn
   ```
2. Navigate into the project directory:
   ```bash
   cd crwn-clothing
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root and add your Firebase and Stripe API keys:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_key
   ```

### Running the Project

To run the app in development mode:

```bash
npm start
```

## Available Scripts

- **`npm start`** – Runs the app in development mode
- **`npm run build`** – Builds the app for production
- **`npm run test`** – Launches the test runner
- **`npm run eject`** – Ejects the app from `react-scripts`

## Folder Structure

- `src/components`: Reusable components like buttons, form elements, and product cards.
- `src/pages`: Main application views (e.g., Homepage, Category pages, Cart).
- `src/firebase`: Firebase configuration and API interaction functions.
- `src/redux`: Redux state slices and store configuration.
- `public`: Static assets and configuration files.

## Contributing

Feel free to open issues and pull requests to improve this project. Follow the standard GitHub flow for contributions.

## License

Distributed under the MIT License. See `LICENSE` for more information.

---
