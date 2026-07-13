# efood

A food delivery marketplace built with React, Redux Toolkit, and styled-components, featuring restaurant listings, menu browsing, a shopping cart, and a full multi-step checkout flow.

## Overview

Users can browse a list of restaurants fetched from a live API, open a restaurant to view its menu, add items to a cart, and complete an order through a delivery and payment form. The project's focus was integrating global state management, routing, and an external API into a cohesive, production-shaped application.

## Features

- Restaurant listing and detail pages powered by React Router, with menus and restaurant data fetched from a REST API
- Product detail modal showing description, portion size, and price before adding an item to the cart
- Shopping cart with global state managed by Redux Toolkit, including add, remove, and clear actions
- Multi-step checkout flow (cart, delivery, payment, confirmation) inside a single sidebar component
- Real-time input masking and formatting for CEP, phone number, and card number, with per-step validation before advancing
- Order submission to a checkout API endpoint, with loading and error states handled during submission
- Component-scoped styling with styled-components and a shared global theme
- Fast local development and builds powered by Vite

## Tech Stack

- React 18
- React Router
- Redux Toolkit + React Redux
- styled-components
- Vite

## Project Structure

```
efood/
├── src/
│   ├── components/
│   │   ├── Cart/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── ProductCard/
│   │   ├── ProductModal/
│   │   └── RestaurantCard/
│   ├── pages/
│   │   ├── Home/
│   │   └── Restaurant/
│   ├── store/
│   │   ├── index.js
│   │   └── cartSlice.js
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
└── vite.config.js
```

## How to Run

```bash
git clone https://github.com/your-username/efood.git
cd efood
npm install
npm run dev
```

## Notes

This project was developed as part of my full stack Java formation, focused on practicing routing, global state management, and API integration in a component-based React application, as a step toward building full stack applications with React and Spring Boot.

## Possible Improvements

- Remove the unused local `data/restaurants.js` file if the app now relies entirely on the live API
- Add loading and empty states while restaurant and menu data are being fetched
- Add automated tests for the cart flow and checkout validation
