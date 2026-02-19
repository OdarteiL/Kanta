# 🛍️ Kanta E-Commerce Platform

> A modern, full-stack e-commerce platform for Fashion & Electronics built with React, Node.js, and PostgreSQL.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)

## 🌟 Overview

Kanta is a modern, full-stack e-commerce platform specializing in fashion and electronics. Built with cutting-edge technologies, it offers a seamless shopping experience with features like advanced filtering, smooth animations, real-time cart management, and a powerful admin dashboard.

## ✨ Features

### 🛒 Customer Features
- **Product Catalog** - Browse fashion and electronics with beautiful product cards
- **Advanced Filtering** - Filter by category, brand, price range with sorting options
- **Smart Search** - Real-time product search across all items
- **Shopping Cart** - Real-time cart updates with quantity management
- **Multi-step Checkout** - Guided 4-step checkout with progress tracking
- **Order Management** - Track order history and status
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Framer Motion powered transitions

### 🔐 Authentication
- User registration and login
- JWT-based authentication
- Password hashing with Bcrypt
- Protected routes and API endpoints

### 👨‍💼 Admin Features
- **AdminJS Dashboard** - Beautiful, modern admin interface
- **Product Management** - Full CRUD operations for products
- **User Management** - View and manage user accounts
- **Order Tracking** - Monitor and update order statuses
- **Inventory Control** - Stock management and tracking
- **Search & Filters** - Advanced filtering in admin panel

## 🚀 Tech Stack

### Frontend (`/Kanta`)
- **React 18.3.1** - UI library
- **Vite 6.0.7** - Build tool and dev server
- **Redux Toolkit 2.5.0** - State management
- **React Router 6.28.0** - Client-side routing
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Framer Motion 11.11.17** - Animation library
- **React Hot Toast 2.4.1** - Toast notifications
- **Headless UI 2.2.0** - Accessible UI components
- **Heroicons 2.1.5** - Icon library
- **TypeScript** - Type safety (gradual migration)

### Backend (`/backend_kanta`)
- **Node.js + Express.js** - REST API server
- **PostgreSQL** - Relational database
- **Sequelize 6.35.2** - ORM for database operations
- **AdminJS 7.5.4** - Admin panel framework
- **JWT (jsonwebtoken 9.0.2)** - Authentication tokens
- **Bcrypt.js 2.4.3** - Password hashing
- **Multer 1.4.5** - File upload handling
- **Cloudinary 1.41.3** - Image storage (optional)
- **Express Validator 7.0.1** - Input validation
- **CORS 2.8.5** - Cross-origin resource sharing

## 📁 Project Structure

```
kanta/
├── Kanta/                      # Frontend React application
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # Page components
│   │   ├── redux/              # Redux slices and store
│   │   ├── router/             # Route configuration
│   │   ├── types/              # TypeScript type definitions
│   │   ├── config/             # App configuration
│   │   ├── data/               # Static data
│   │   └── assets/             # Images and static files
│   ├── public/                 # Public assets
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── README.md
│
├── backend_kanta/              # Backend Node.js API
│   ├── config/
│   │   └── database.js         # Database configuration
│   ├── controllers/
│   │   ├── authController.js   # Authentication logic
│   │   ├── productController.js # Product CRUD
│   │   └── orderController.js  # Order management
│   ├── middleware/
│   │   └── auth.js             # JWT authentication middleware
│   ├── models/
│   │   ├── User.js             # User model
│   │   ├── Product.js          # Product model
│   │   └── Order.js            # Order model
│   ├── routes/
│   │   ├── authRoutes.js       # Auth endpoints
│   │   ├── productRoutes.js    # Product endpoints
│   │   └── orderRoutes.js      # Order endpoints
│   ├── scripts/
│   │   └── seed.js             # Database seeding script
│   ├── server.js               # Main server file
│   ├── package.json
│   └── README.md
│
├── README.md                   # This file
├── .gitignore
├── BACKEND_COMPLETE.md         # Backend documentation
└── UPGRADE_SUMMARY.md          # Recent upgrade notes
```

## 🏁 Getting Started

### Prerequisites

- **Node.js** 18+ and npm
- **PostgreSQL** 14+
- **Git**

### Quick Start

#### 1. Clone the Repository

```bash
git clone https://github.com/OdarteiL/Kanta.git
cd kanta
```

#### 2. Setup Backend

```bash
cd backend_kanta
npm install
```

Create `.env` file:
```env
NODE_ENV=development
PORT=5000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=kanta_db
DB_USER=kanta_user
DB_PASSWORD=your_password

JWT_SECRET=your_super_secret_key_change_this
JWT_EXPIRE=7d

ADMIN_EMAIL=admin@kanta.com
ADMIN_PASSWORD=admin123

FRONTEND_URL=http://localhost:5173
```

Create PostgreSQL database:
```bash
sudo -u postgres psql
CREATE DATABASE kanta_db;
CREATE USER kanta_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE kanta_db TO kanta_user;
\q
```

Seed the database:
```bash
npm run seed
```

Start backend server:
```bash
npm run dev
```

Backend will run on `http://localhost:5000`
Admin panel: `http://localhost:5000/admin`

#### 3. Setup Frontend

```bash
cd ../Kanta
npm install
```

Create `.env` file:
```env
VITE_API_URL=http://localhost:5000/api
```

Start development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

## ⚙️ Configuration

### Frontend Environment Variables

Create `Kanta/.env`:
```env
VITE_API_URL=http://localhost:5000/api
VITE_AUTH0_DOMAIN=your-auth0-domain (optional)
VITE_AUTH0_CLIENT_ID=your-client-id (optional)
```

### Backend Environment Variables

Create `backend_kanta/.env`:
```env
# Server
NODE_ENV=development
PORT=5000

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=kanta_db
DB_USER=kanta_user
DB_PASSWORD=your_password

# JWT
JWT_SECRET=your_super_secret_key_change_this
JWT_EXPIRE=7d

# Admin
ADMIN_EMAIL=admin@kanta.com
ADMIN_PASSWORD=admin123

# CORS
FRONTEND_URL=http://localhost:5173

# Cloudinary (Optional)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Profile (Protected)
```http
GET /api/auth/profile
Authorization: Bearer <token>
```

### Product Endpoints

#### Get All Products
```http
GET /api/products?category=fashion&sort=price&order=asc&page=1&limit=12
```

Query Parameters:
- `category` - Filter by category (fashion, electronics)
- `brand` - Filter by brand
- `search` - Search by name
- `minPrice` - Minimum price
- `maxPrice` - Maximum price
- `sort` - Sort field (price, createdAt, name)
- `order` - Sort order (asc, desc)
- `page` - Page number
- `limit` - Items per page

#### Get Single Product
```http
GET /api/products/:id
```

#### Create Product (Admin)
```http
POST /api/products
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "name": "Product Name",
  "description": "Product description",
  "price": 99.99,
  "category": "fashion",
  "brand": "Brand Name",
  "stock": 100,
  "image": "image_url"
}
```

#### Update Product (Admin)
```http
PUT /api/products/:id
Authorization: Bearer <admin_token>
```

#### Delete Product (Admin)
```http
DELETE /api/products/:id
Authorization: Bearer <admin_token>
```

### Order Endpoints

#### Create Order (Protected)
```http
POST /api/orders
Authorization: Bearer <token>
Content-Type: application/json

{
  "items": [
    {
      "productId": 1,
      "quantity": 2,
      "price": 99.99
    }
  ],
  "shippingAddress": {
    "street": "123 Main St",
    "city": "Accra",
    "country": "Ghana"
  },
  "paymentMethod": "card"
}
```

#### Get User Orders (Protected)
```http
GET /api/orders
Authorization: Bearer <token>
```

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

1. Build the frontend:
```bash
cd Kanta
npm run build
```

2. Deploy `dist` folder to Vercel or Netlify

3. Set environment variables in hosting platform

### Backend Deployment (Railway/Render/Heroku)

1. Push code to GitHub

2. Connect repository to hosting platform

3. Set environment variables

4. Deploy

### Database Deployment

Use managed PostgreSQL services:
- **Railway** - Easy PostgreSQL setup
- **Supabase** - PostgreSQL with additional features
- **AWS RDS** - Production-grade database
- **Heroku Postgres** - Simple setup

## 📝 Available Scripts

### Frontend (`/Kanta`)
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend (`/backend_kanta`)
```bash
npm start        # Start production server
npm run dev      # Start development server with nodemon
npm run seed     # Seed database with sample data
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Michael Odartei-Lamptey**

## 🙏 Acknowledgments

- React and Vite teams for amazing tools
- Tailwind CSS for the utility-first CSS framework
- AdminJS for the beautiful admin panel
- All open-source contributors

## 📞 Support

For support, email support@kanta.com or open an issue in the repository.

---

Made with ❤️ in Ghana
