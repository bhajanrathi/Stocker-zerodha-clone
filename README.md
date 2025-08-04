# Stocker App (Zerodha Clone)

A complete stock trading platform with authentication, landing page, and trading dashboard.

## 🚀 Features

- **Authentication System**: Secure signup/login with JWT tokens
- **Landing Page**: Marketing site with login/signup functionality
- **Trading Dashboard**: Protected dashboard for authenticated users
- **Real-time Data**: Holdings, positions, orders, and watchlist
- **Modern UI**: Clean, professional interface

## 📁 Project Structure

```
Stock-trading-platform/
├── backend/                 # Node.js/Express API
│   ├── controllers/         # Authentication controllers
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── schemas/            # Database schemas
│   ├── middlewares/        # Authentication middleware
│   └── util/               # JWT utilities
├── frontend/               # Landing page (React)
│   └── src/landing_page/
│       ├── pages/          # Login/Signup pages
│       ├── home/           # Home page components
│       └── ...
├── dashboard/              # Trading dashboard (React)
│   └── src/components/     # Dashboard components
└── start-apps.bat          # Startup script
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (running locally or cloud)
- npm or yarn

### 1. Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend Landing Page
cd ../frontend
npm install

# Dashboard
cd ../dashboard
npm install
```

### 2. Environment Setup

Create a `.env` file in the `backend` directory:

```env
MONGO_URL=mongodb://localhost:27017/stocker
TOKEN_KEY=your-secret-jwt-key-here
PORT=3002
```

### 3. Start All Applications

**Option 1: Using the batch script (Windows)**
```bash
start-apps.bat
```

**Option 2: Manual startup**
```bash
# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Frontend Landing Page
cd frontend
npm run dev

# Terminal 3 - Dashboard
cd dashboard
npm run dev
```

## 🌐 Application URLs

- **Backend API**: http://localhost:3002
- **Frontend Landing Page**: http://localhost:3000
- **Dashboard**: http://localhost:5173

## 🔐 Authentication Flow

1. **User visits landing page** (http://localhost:3000)
2. **User clicks Login/Signup** in navigation
3. **User fills form** and submits
4. **Backend authenticates** and sets JWT cookie
5. **User is redirected** to dashboard (http://localhost:5173)
6. **Dashboard checks authentication** and displays trading interface
7. **User can logout** and return to landing page

## 📊 Dashboard Features

- **Holdings**: View current stock holdings
- **Positions**: Track open positions
- **Orders**: Manage buy/sell orders
- **Watchlist**: Monitor favorite stocks
- **Funds**: Account balance and margin
- **Charts**: Visual data representation

## 🔧 API Endpoints

### Authentication
- `POST /auth/signup` - User registration
- `POST /auth/login` - User login
- `POST /auth/verify` - Verify authentication status

### Data Models
- **Users**: email, username, password (hashed)
- **Holdings**: name, qty, avg, price, net, day
- **Orders**: name, qty, price, mode
- **Positions**: product, name, qty, avg, price, net, day, isLoss

## 🎨 UI Components

### Landing Page
- Modern authentication forms
- Responsive design
- Professional styling
- Navigation with login/signup links

### Dashboard
- Protected routes
- User authentication display
- Logout functionality
- Trading interface components

## 🚀 Quick Start

1. Ensure MongoDB is running
2. Set up environment variables
3. Run `start-apps.bat` (Windows) or start manually
4. Visit http://localhost:3000
5. Sign up or login 
 # For test, use login-info:
**- Username: test_user**
**- E-Mail: testing@gmail.com**
**- Password: test_password**
6. Access dashboard at http://localhost:5173**

## 🔒 Security Features

- JWT token-based authentication
- Password hashing with bcrypt
- Protected dashboard routes
- Secure cookie handling
- CORS configuration

## 📝 Notes

- Backend runs on port 3002
- Frontend landing page runs on port 3000
- Dashboard runs on port 5173
- All applications communicate via HTTP/HTTPS
- Authentication state is maintained via cookies

## 🐛 Troubleshooting

- Ensure MongoDB is running
- Check all ports are available
- Verify environment variables are set
- Clear browser cookies if authentication issues occur
