# 🛍️ Kanta E-Commerce Platform

> A modern e-commerce frontend for Fashion & Electronics built with React and Vite.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Contributing](#contributing)

## 🌟 Overview

Kanta is a modern e-commerce frontend specializing in fashion and electronics. Built with React and cutting-edge technologies, it offers a seamless shopping experience with features like advanced filtering, smooth animations, and real-time cart management.

## ✨ Features

### 🛒 Shopping Experience
- **Product Catalog** - Browse fashion and electronics with beautiful product cards
- **Advanced Filtering** - Filter by category, brand, price range with sorting options
- **Smart Search** - Real-time product search across all items
- **Shopping Cart** - Real-time cart updates with quantity management
- **Multi-step Checkout** - Guided 4-step checkout with progress tracking
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Framer Motion powered transitions

### 🎨 User Interface
- **Modern Design** - Clean, responsive UI with Tailwind CSS
- **Animated Brand Showcase** - Auto-scrolling brand carousel
- **Mobile Responsive** - Optimized for all screen sizes
- **Toast Notifications** - User feedback for actions

## 🚀 Tech Stack

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

## 📁 Project Structure

```
Kanta/
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/              # Page components
│   ├── redux/              # Redux slices and store
│   ├── router/             # Route configuration
│   ├── types/              # TypeScript type definitions
│   ├── config/             # App configuration
│   ├── data/               # Static data
│   └── assets/             # Images and static files
├── public/                 # Public assets
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🏁 Getting Started

### Prerequisites

- **Node.js** 18+ and npm
- **Git**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/OdarteiL/Kanta.git
cd Kanta
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment**

Create `.env` file:
```env
VITE_API_URL=http://localhost:5000/api
```

4. **Start development server**

```bash
npm run dev
```

The app will run on `http://localhost:5173`

## ⚙️ Configuration

### Environment Variables

Create `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:5000/api
```

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🚀 Deployment

### Vercel Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy `dist` folder to Vercel

3. Set environment variables in Vercel dashboard

### Netlify Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy `dist` folder to Netlify

3. Set environment variables in Netlify dashboard

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
