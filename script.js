/* ============================================
   BO Organics — SPA Routing & Shopping Cart
   ============================================ */

// ---- Shopping Cart (Persistent State) ----
let cart = [];

// Cart DOM elements
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const cartFooter = document.getElementById('cartFooter');
const appContainer = document.getElementById('app');

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

// Update cart display
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

// Checkout button (only if it exists)
const checkoutBtnContainer = document.querySelector('.cart-footer .btn-primary');
if (checkoutBtnContainer) {
  checkoutBtnContainer.addEventListener('click', () => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
    closeCart();
    window.location.href = 'checkout.html';
  });
}

// ---- SPA Routing System ----
function getCurrentRoute() {
  const hash = window.location.hash.slice(1) || '/';
  return hash;
}

function renderPage(route) {
  // Parse route (e.g., "/product/radiance-face-serum" or "/shop")
  const parts = route.split('/').filter(Boolean);
  const page = parts[0] || '';
  const param = parts[1];

  let html = '';

  switch (page) {
    case '':
    case 'home':
      html = getHomePage();
      break;
    case 'shop':
      html = getShopPage();
      break;
    case 'about':
      html = getAboutPage();
      break;
    case 'ingredients':
      html = getIngredientsPage();
      break;
    case 'ingredient':
      html = getIngredientDetailPage(param);
      break;
    case 'joinbo':
      html = getJoinBoPage();
      break;
    case 'login':
      html = getLoginPage();
      break;
    default:
      html = getHomePage();
  }

  // Inject HTML into app container
  appContainer.innerHTML = html;

  // Scroll to top
  window.scrollTo(0, 0);

  // Re-attach event listeners for new content
  attachEventListeners();
}

function attachEventListeners() {
  // ---- Navbar Scroll Effect + Hero Parallax ----
  const navbar = document.getElementById('navbar');
  const heroContent = document.querySelector('.hero-content');

  if (navbar) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      if (scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Parallax: hero content moves up and fades as you scroll
      // Disabled: removed parallax movement
      if (heroContent && scrollY < window.innerHeight) {
        const progress = scrollY / window.innerHeight;
        // heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
        heroContent.style.opacity = 1 - progress * 1.2;
      }
    });
  }

  // ---- Mobile Nav Toggle ----
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // Close mobile nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // ---- Product Filter ----
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      productCards.forEach(card => {
        if (filter === 'all' || card.dataset.category.includes(filter)) {
          card.style.display = '';
          card.style.animation = 'fadeUp 0.5s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ---- Product Search ----
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');

  if (searchInput && searchBtn) {
    function performSearch() {
      const searchTerm = searchInput.value.toLowerCase().trim();

      if (searchTerm === '') {
        productCards.forEach(card => {
          card.style.display = '';
        });
        return;
      }

      productCards.forEach(card => {
        const productName = card.querySelector('.product-name').textContent.toLowerCase();
        const productDesc = card.querySelector('.product-desc').textContent.toLowerCase();

        if (productName.includes(searchTerm) || productDesc.includes(searchTerm)) {
          card.style.display = '';
          card.style.animation = 'fadeUp 0.5s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });

      // Navigate to shop
      if (window.location.hash !== '#/shop') {
        window.location.hash = '#/shop';
      }
    }

    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performSearch();
      }
    });

    searchInput.addEventListener('input', performSearch);
    searchBtn.addEventListener('click', performSearch);
  }

  // ---- Add to Cart ----
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
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

  // ---- Product Card Click (navigate to detail page) ----
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.add-to-cart')) {
        return; // Don't navigate if clicking add-to-cart button
      }
      const productId = card.querySelector('.add-to-cart')?.dataset.productId;
      if (productId) {
        window.location.hash = `#/product/${productId}`;
      }
    });
  });

  // ---- Newsletter Form ----
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
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
  }

  // ---- Enrollment Buttons (Join BO Page) ----
  document.querySelectorAll('.experience-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const enrollmentType = btn.dataset.enrollment;
      if (enrollmentType) {
        function saveEnrollment(type) {
          const enrollments = localStorage.getItem('boEnrollments') ? JSON.parse(localStorage.getItem('boEnrollments')) : { subscription: false, membership: false, referral: false };
          enrollments[type] = true;
          localStorage.setItem('boEnrollments', JSON.stringify(enrollments));
        }

        saveEnrollment(enrollmentType);
        btn.textContent = 'Enrolled!';
        btn.style.background = '#2d6a2e';
        btn.style.borderColor = '#2d6a2e';
        btn.style.color = '#fff';
        setTimeout(() => {
          btn.textContent = btn.dataset.enrollment === 'subscription' ? 'SUBSCRIBE →' :
                            btn.dataset.enrollment === 'membership' ? 'JOIN BO →' : 'GET YOUR CODE →';
          btn.style.background = '';
          btn.style.borderColor = '';
          btn.style.color = '';
        }, 1500);
      }
    });
  });

  // ---- Login Form ----
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = document.querySelector('.login-btn');
      const originalText = btn.textContent;

      btn.textContent = 'Signing in...';
      btn.style.background = '#2d6a2e';

      setTimeout(() => {
        btn.textContent = 'Signed in!';
        setTimeout(() => {
          window.location.hash = '#/';
        }, 800);
      }, 1000);
    });
  }

  // ---- Scroll Reveal Animations ----
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

  document.querySelectorAll('.feature, .product-card, .testimonial-card, .about-content, .about-image, .ingredients-content, .ingredients-visual, .newsletter-content, .section-label, .section-title, .section-description').forEach((el, i) => {
    el.classList.add('reveal');
    if (i % 3 === 0) el.classList.add('stagger-1');
    else if (i % 3 === 1) el.classList.add('stagger-2');
    else el.classList.add('stagger-3');
    revealObserver.observe(el);
  });
}

// ---- Hash Route Change Listener ----
window.addEventListener('hashchange', () => {
  const route = getCurrentRoute();
  renderPage(route);
});

// ---- Initial Page Load ----
document.addEventListener('DOMContentLoaded', () => {
  const route = getCurrentRoute();
  renderPage(route);
});
