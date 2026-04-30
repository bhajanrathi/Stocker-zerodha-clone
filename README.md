# Stocker — Zerodha Clone

A full-stack stock trading platform built with the MERN stack, inspired by Zerodha.

🔗 **Live Demo**: [stocker-zerodha-clone.vercel.app](https://stocker-zerodha-clone.vercel.app)

---

## Features

**Landing Page**
- Multi-page marketing site with Home, About, Products, Pricing, and Support pages
- Responsive navbar, footer, and a 404 page
- Login and Signup pages with form validation

**Authentication**
- JWT-based auth with bcrypt password hashing
- Tokens stored in secure, HTTP-only cookies
- Auth state managed via React Context — unauthenticated users are redirected to login automatically

**Trading Dashboard**
- **Watchlist** — 9 stocks with live-style price/change display, hover actions (Buy, Sell, Analytics), and a doughnut chart
- **Holdings** — Full portfolio table with P&L, net/day change, colour coding, and a bar chart
- **Positions** — Open CNC positions with P&L breakdown
- **Orders** — Today's order history
- **Funds** — Equity margin breakdown with Add Funds and Withdraw actions
- **Buy Window** — Draggable order modal with quantity, price inputs, and real-time margin calculation
- **Top Bar** — Displays NIFTY 50, SENSEX, logged-in username, and logout

---

## Tech Stack

| | |
|---|---|
| Frontend | React, React Router, Vite, Bootstrap |
| Dashboard | React, Vite, Chart.js, Material UI |
| Backend | Node.js, Express |
| Database | MongoDB, Mongoose |
| Auth | JWT, bcryptjs |
| Hosting | Vercel, Render, MongoDB Atlas |

---

## API

| Method | Endpoint | Description |
|---|---|---|
| POST | /auth/signup | Register user |
| POST | /auth/login | Login, sets JWT cookie |
| POST | /auth/verify | Verify session |
| GET | /allholdings | Fetch holdings |
| GET | /allpositions | Fetch positions |
| POST | /newOrder | Place order |