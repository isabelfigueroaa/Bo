# BO Organics — Pure, Intentional Beauty

A premium, animated e-commerce website for handcrafted organic skincare products.

## 🌿 Overview

BO Organics is a modern, responsive website showcasing a curated collection of organic skincare products. The site features:

- **Premium animations** with smooth transitions and micro-interactions
- **Responsive design** optimized for mobile, tablet, and desktop
- **Shopping cart functionality** with session storage
- **Checkout system** with tax and shipping calculations
- **Authentication pages** (Login, Join BO membership)
- **Product filtering** and dynamic grid layout
- **Testimonial section** with social proof
- **Newsletter signup** integration

## 📁 Project Structure

```
BOSite/
├── index.html              # Main homepage
├── checkout.html           # Checkout page with order summary
├── login.html              # Account login page
├── joinbo.html             # Join BO membership options
├── styles.css              # Comprehensive styling with animations
├── script.js               # Core functionality and interactivity
├── Images/                 # Product and ingredient images
├── .gitignore             # Git ignore file
├── README.md              # This file
└── CLAUDE.md              # Claude Code guidance (optional)
```

## ✨ Features

### Animations & Interactions
- Hero section fade-in and float animations
- Product card hover effects with lift and zoom
- Button hover states with glow effects
- Cart badge bounce animation
- Checkout form entrance animations
- Testimonial card transforms
- Scroll-reveal animations

### E-Commerce
- **Product Grid** - Filterable by category (Face, Body, Hair, Sets)
- **Shopping Cart** - Add/remove items, real-time total calculation
- **Checkout** - Tax (10%) and shipping cost calculations
- **Order Summary** - Sticky sidebar with itemized breakdown

### User Accounts
- Login page with form validation
- Join BO membership program with three tiers
- Account linking via navigation

### Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly navigation
- Performance optimized

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required - pure HTML, CSS, and vanilla JavaScript

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/BO.git
cd BO
```

2. Open in your browser:
```bash
# Option 1: Direct file opening
open index.html

# Option 2: Use a local server (recommended)
python3 -m http.server 8000
# Then visit: http://localhost:8000
```

## 💻 Development

### Adding Products
Edit the products grid in `index.html` (lines 120-250) to add new products:

```html
<div class="product-card" data-category="face">
  <div class="product-image">
    <!-- Product image placeholder -->
  </div>
  <div class="product-info">
    <h3 class="product-name">Product Name</h3>
    <p class="product-desc">Product description</p>
    <button class="add-to-cart" data-name="Product Name" data-price="00.00">Add to Cart</button>
  </div>
</div>
```

### Customizing Styles
Edit `styles.css` to customize:
- Color variables (--burgundy, --cream, --text, etc.)
- Typography (Cormorant Garamond, Montserrat)
- Spacing and layout
- Animation timing and easing

### Cart & Checkout
The cart uses browser `sessionStorage` to persist items across pages:
- Products are stored when added via "Add to Cart"
- Cart persists during the session
- Clears after successful checkout

## 📱 Mobile Optimization

The site is fully responsive with breakpoints at:
- **1024px** - Tablet adjustments
- **768px** - Mobile menu and layout stacks
- **480px** - Small phone optimizations

## 🎨 Design System

### Color Palette
- **Burgundy** (#8B4C5C) - Primary accent
- **Cream** (#FAF7F2) - Light backgrounds
- **Blue-Gray** (#7A8A99) - Secondary text
- **Text** (#2B2B2B) - Primary text color

### Typography
- **Headers** - Cormorant Garamond (elegant serif)
- **Body** - Montserrat (clean sans-serif)
- **Weights** - 300, 400, 500, 600, 700

### Spacing Scale
- 8px, 16px, 24px, 40px, 60px, 80px

## 🔧 Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Grid, Flexbox, Animations, Transforms
- **JavaScript** - Vanilla JS (no frameworks)
- **Browser APIs** - Session Storage, Intersection Observer

## 📊 Cart & Checkout Logic

### Session Storage Keys
- `cart` - JSON array of cart items

### Checkout Calculation
```
Subtotal = sum of all product prices
Tax = Subtotal × 10%
Shipping = selected option (varies)
Total = Subtotal + Tax + Shipping
```

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 Git Workflow

```bash
# Create a feature branch
git checkout -b feat/feature-name

# Make changes and commit
git add .
git commit -m "feat: add new feature description"

# Push to remote
git push -u origin feat/feature-name

# Create pull request on GitHub
gh pr create
```

## 📄 License

© 2026 BO Organics. All rights reserved.

## 👥 Contact

- Email: hello@boorganics.com
- Phone: (555) 123-4567
- Hours: Mon - Fri, 9am - 5pm

---

Built with ❤️ for pure, intentional beauty.
