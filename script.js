/* ============================================
   BO Organics — JavaScript
   ============================================ */

// ---- Scroll Reveal Animation ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -60px 0px'
});

// Apply reveal classes to page sections
document.addEventListener('DOMContentLoaded', () => {
  // Features banner items
  document.querySelectorAll('.feature').forEach((el, i) => {
    el.classList.add('reveal');
    el.classList.add('stagger-' + (i + 1));
    revealObserver.observe(el);
  });

  // Section labels, titles, descriptions
  document.querySelectorAll('.section-label, .section-title, .section-description').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  // Product cards - staggered
  document.querySelectorAll('.product-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i * 0.1) + 's';
    revealObserver.observe(el);
  });

  // Experience cards
  document.querySelectorAll('.experience-card').forEach((el, i) => {
    el.classList.add('reveal-scale');
    el.classList.add('stagger-' + (i + 1));
    revealObserver.observe(el);
  });

  // Ingredient cards
  document.querySelectorAll('.ingredient-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.classList.add('stagger-' + (i + 1));
    revealObserver.observe(el);
  });

  // Testimonial cards
  document.querySelectorAll('.testimonial-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.classList.add('stagger-' + (i + 1));
    revealObserver.observe(el);
  });

  // Filter bar
  document.querySelectorAll('.filter-bar').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  // Newsletter section
  document.querySelectorAll('.newsletter-content').forEach(el => {
    el.classList.add('reveal-scale');
    revealObserver.observe(el);
  });

  // Footer columns
  document.querySelectorAll('.footer-brand, .footer-links').forEach((el, i) => {
    el.classList.add('reveal');
    el.classList.add('stagger-' + (i + 1));
    revealObserver.observe(el);
  });
});

// ---- Navbar Scroll Effect + Hero Parallax ----
const navbar = document.getElementById('navbar');
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Parallax: hero content moves up and fades as you scroll
  if (heroContent && scrollY < window.innerHeight) {
    const progress = scrollY / window.innerHeight;
    heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
    heroContent.style.opacity = 1 - progress * 1.2;
  }
});

// ---- Mobile Nav Toggle ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ---- Product Filter ----
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    productCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = '';
        card.style.animation = 'fadeUp 0.5s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ---- Shopping Cart ----
let cart = [];

const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const cartFooter = document.getElementById('cartFooter');

// Open/close cart
cartBtn.addEventListener('click', () => {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('open');
});

function closeCart() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('open');
}

cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// Add to cart
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.dataset.name;
    const price = parseFloat(btn.dataset.price);

    const existing = cart.find(item => item.name === name);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ name, price, qty: 1 });
    }

    updateCart();

    // Button feedback
    const originalText = btn.textContent;
    btn.textContent = 'Added!';
    btn.style.background = '#2d6a2e';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
    }, 1000);
  });
});

function updateCart() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  cartCount.textContent = totalItems;
  // Trigger bounce animation on cart count update
  cartCount.classList.remove('updated');
  void cartCount.offsetWidth; // Force reflow to restart animation
  cartCount.classList.add('updated');

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    cartFooter.style.display = 'none';
  } else {
    cartFooter.style.display = 'block';
    cartTotal.textContent = '$' + totalPrice.toFixed(2);

    cartItems.innerHTML = cart.map((item, index) => `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.qty}</div>
        </div>
        <button class="cart-item-remove" data-index="${index}">&times;</button>
      </div>
    `).join('');

    // Remove item handlers
    cartItems.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.dataset.index);
        cart.splice(index, 1);
        updateCart();
      });
    });
  }
}

// ---- Newsletter Form ----
const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = newsletterForm.querySelector('input');
  const btn = newsletterForm.querySelector('button');
  const originalText = btn.textContent;

  btn.textContent = 'Subscribed!';
  btn.style.background = '#2d6a2e';
  input.value = '';

  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
  }, 2000);
});

// ---- Scroll Reveal Animations ----
function revealOnScroll() {
  const reveals = document.querySelectorAll('.feature, .product-card, .testimonial-card, .about-content, .about-image, .ingredients-content, .ingredients-visual, .newsletter-content');

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 80) {
      el.classList.add('reveal', 'visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ---- Smooth scroll for anchor links ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ---- Checkout Page (now separate page) ----
// Checkout functionality moved to checkout.html

// Find the checkout button in cart footer
const cartCheckoutBtn = document.querySelector('.cart-footer .btn-primary');

// Redirect to checkout page
cartCheckoutBtn.addEventListener('click', () => {
  // Save cart to session storage for checkout page
  sessionStorage.setItem('cart', JSON.stringify(cart));

  // Close cart sidebar
  closeCart();

  // Redirect to checkout page
  window.location.href = 'checkout.html';
});


// ============================================
// ABOUT MODAL
// ============================================

const aboutOverlay = document.getElementById('aboutOverlay');
const aboutModal = document.getElementById('aboutModal');
const aboutClose = document.getElementById('aboutClose');
const aboutButtons = document.querySelectorAll('a[href="#about"]');

// Open About Modal
function openAbout() {
  aboutOverlay.classList.add('open');
  aboutModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// Close About Modal
function closeAbout() {
  aboutOverlay.classList.remove('open');
  aboutModal.classList.remove('open');
  document.body.style.overflow = '';
}

// Add event listeners to all "About" links
aboutButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    openAbout();
  });
});

// Close modal on X button click
aboutClose.addEventListener('click', closeAbout);

// Close modal on overlay click
aboutOverlay.addEventListener('click', closeAbout);

// ============================================
// BO EXPERIENCE MODAL & ENROLLMENT TRACKING
// ============================================

// Enrollment tracking functions
function loadEnrollments() {
  const saved = localStorage.getItem('boEnrollments');
  return saved ? JSON.parse(saved) : { subscription: false, membership: false, referral: false };
}

function saveEnrollment(type) {
  const enrollments = loadEnrollments();
  enrollments[type] = true;
  localStorage.setItem('boEnrollments', JSON.stringify(enrollments));
}

function isUserEnrolled() {
  const enrollments = loadEnrollments();
  return Object.values(enrollments).some(enrolled => enrolled === true);
}


// Get old elements for backwards compatibility (in case they're still referenced)
const loginLink = document.getElementById('loginLink');

// Login link handler (placeholder for now)
loginLink.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Login functionality coming soon!');
});



