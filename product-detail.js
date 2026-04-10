/* ============================================
   BO Organics — Product Detail Page
   ============================================ */

// Product Database
const products = {
  'radiance-face-serum': {
    name: 'Radiance Face Serum',
    category: 'Face Care',
    price: 48.00,
    description: 'Rosehip & Vitamin C brightening serum for luminous, even-toned skin. This lightweight serum harnesses the power of nature\'s most potent antioxidants to restore radiance and reduce the appearance of blemishes.',
    benefits: ['Brightens and evens skin tone', 'Reduces appearance of fine lines', 'Boosts natural radiance', 'Lightweight and fast-absorbing'],
    usage: 'Apply 2-3 drops to clean skin in the morning and evening. Follow with your favorite moisturizer. For best results, use daily.',
    ingredients: 'Organic Rosehip Seed Oil, Vitamin C (L-Ascorbic Acid), Hyaluronic Acid, Jojoba Oil, Chamomile Extract',
    images: ['Images/radiance-face-serum-1.jpg', 'Images/radiance-face-serum-2.jpg', 'Images/radiance-face-serum-3.jpg'],
    related: ['botanical-cleansing-oil', 'hydra-bloom-moisturizer']
  },
  'botanical-cleansing-oil': {
    name: 'Botanical Cleansing Oil',
    category: 'Face Care',
    price: 36.00,
    description: 'Gentle jojoba & chamomile oil cleanser that melts away impurities. This luxurious cleansing oil removes makeup, dirt, and excess oil without stripping the skin\'s natural moisture barrier.',
    benefits: ['Effectively removes makeup & impurities', 'Gentle on sensitive skin', 'Leaves skin soft and glowing', 'Balances natural oil production'],
    usage: 'Massage a small amount into dry skin for 1-2 minutes. Add a splash of water to emulsify. Rinse thoroughly with warm water.',
    ingredients: 'Organic Jojoba Oil, Chamomile Extract, Vitamin E, Sweet Almond Oil',
    images: ['Images/botanical-cleansing-oil-1.jpg', 'Images/botanical-cleansing-oil-2.jpg', 'Images/botanical-cleansing-oil-3.jpg'],
    related: ['radiance-face-serum', 'hydra-bloom-moisturizer']
  },
  'hydra-bloom-moisturizer': {
    name: 'Hydra-Bloom Moisturizer',
    category: 'Face Care',
    price: 42.00,
    description: 'Deep hydration with hyaluronic acid, aloe vera & shea butter. This rich yet non-greasy moisturizer provides intense hydration while keeping the skin\'s natural pH balanced.',
    benefits: ['Deep hydration that lasts 24 hours', 'Plumps and smooths fine lines', 'Reduces redness and inflammation', 'Perfect for all skin types'],
    usage: 'Apply to clean, damp skin in the morning and evening. Use a small amount and gently massage into face and neck.',
    ingredients: 'Organic Hyaluronic Acid, Aloe Vera Extract, Shea Butter, Jojoba Oil, Chamomile',
    images: ['Images/hydra-bloom-moisturizer-1.jpg', 'Images/hydra-bloom-moisturizer-2.jpg', 'Images/hydra-bloom-moisturizer-3.jpg'],
    related: ['radiance-face-serum', 'botanical-cleansing-oil']
  },
  'nourishing-body-butter': {
    name: 'Nourishing Body Butter',
    category: 'Body Care',
    price: 32.00,
    description: 'Rich cocoa butter & lavender body cream for silky smooth skin. This decadent body butter is perfect for daily moisturization and leaves your skin feeling luxuriously soft.',
    benefits: ['Deeply moisturizes dry skin', 'Delightful lavender fragrance', 'Non-greasy formula', 'Long-lasting hydration'],
    usage: 'Apply to damp skin immediately after showering. Focus on elbows, knees, and other dry areas.',
    ingredients: 'Organic Cocoa Butter, Lavender Oil, Shea Butter, Sweet Almond Oil, Vitamin E',
    images: ['Images/nourishing-body-butter-1.jpg', 'Images/nourishing-body-butter-2.jpg', 'Images/nourishing-body-butter-3.jpg'],
    related: ['calming-body-oil', 'complete-glow-set']
  },
  'calming-body-oil': {
    name: 'Calming Body Oil',
    category: 'Body Care',
    price: 38.00,
    description: 'Argan & sweet almond oil infused with calming essential oils. This luxurious body oil soothes tired muscles and hydrates skin with a heavenly aroma.',
    benefits: ['Deeply nourishing and hydrating', 'Calming essential oil blend', 'Promotes relaxation', 'Absorbs quickly without leaving residue'],
    usage: 'Apply to clean, damp skin and massage gently. Can be used on face, body, and hair.',
    ingredients: 'Organic Argan Oil, Sweet Almond Oil, Lavender Oil, Chamomile Oil',
    images: ['Images/calming-body-oil-1.jpg', 'Images/calming-body-oil-2.jpg', 'Images/calming-body-oil-3.jpg'],
    related: ['nourishing-body-butter', 'body-care-collection']
  },
  'delicate-eye-contour': {
    name: 'Delicate Eye Contour',
    category: 'Eye Care',
    price: 54.00,
    description: 'Caffeine & peptide-infused cream to reduce puffiness and fine lines. This specialized eye cream targets the delicate under-eye area with powerful yet gentle ingredients.',
    benefits: ['Reduces puffiness and dark circles', 'Minimizes fine lines and wrinkles', 'Brightens the eye area', 'Gentle enough for daily use'],
    usage: 'Apply a small amount around the eye contour using your ring finger. Gently pat (do not rub) until absorbed.',
    ingredients: 'Caffeine Extract, Peptides, Hyaluronic Acid, Aloe Vera, Shea Butter',
    images: ['Images/delicate-eye-contour-1.jpg', 'Images/delicate-eye-contour-2.jpg', 'Images/delicate-eye-contour-3.jpg'],
    related: ['radiance-face-serum', 'hydra-bloom-moisturizer']
  },
  'nourishing-hair-elixir': {
    name: 'Nourishing Hair Elixir',
    category: 'Hair Care',
    price: 44.00,
    description: 'Argan oil & botanical extracts to restore shine and elasticity. This lightweight elixir revitalizes dull, damaged hair without weighing it down.',
    benefits: ['Restores natural shine', 'Repairs damaged hair', 'Adds elasticity and softness', 'Tames frizz'],
    usage: 'Apply a small amount to damp or dry hair, focusing on mid-lengths and ends. Style as usual.',
    ingredients: 'Organic Argan Oil, Lavender Oil, Rosemary Oil, Jojoba Oil, Vitamin E',
    images: ['Images/nourishing-hair-elixir-1.jpg', 'Images/nourishing-hair-elixir-2.jpg', 'Images/nourishing-hair-elixir-3.jpg'],
    related: ['nourishing-body-butter', 'calming-body-oil']
  },
  'complete-glow-set': {
    name: 'Complete Glow Set',
    category: 'Sets & Bundles',
    price: 115.00,
    description: 'Face serum, cleansing oil & moisturizer – everything you need for a complete skincare routine. This complete set includes our bestselling face care products at a special bundled price.',
    benefits: ['Complete skincare routine in one set', 'Save 10% compared to individual purchases', 'Perfect for beginners', 'Travel-friendly sizes'],
    usage: 'Use as part of your daily skincare routine. Cleanse, apply serum, then moisturize.',
    ingredients: 'Multiple organic ingredients - see individual products',
    images: ['Images/complete-glow-set-1.jpg', 'Images/complete-glow-set-2.jpg', 'Images/complete-glow-set-3.jpg'],
    related: ['radiance-face-serum', 'botanical-cleansing-oil', 'hydra-bloom-moisturizer']
  },
  'body-care-collection': {
    name: 'Body Care Collection',
    category: 'Sets & Bundles',
    price: 98.00,
    description: 'Body butter, body oil & exfoliating scrub for total body care. Everything you need to pamper yourself with luxurious body care products.',
    benefits: ['Complete body care system', 'Save on bundle pricing', 'Luxury spa experience at home', 'Perfect gift set'],
    usage: 'Use in sequence: exfoliate 2-3 times weekly, apply oil or butter daily.',
    ingredients: 'Multiple organic ingredients - see individual products',
    images: ['Images/body-care-collection-1.jpg', 'Images/body-care-collection-2.jpg', 'Images/body-care-collection-3.jpg'],
    related: ['nourishing-body-butter', 'calming-body-oil']
  }
};

// Get product ID from URL
function getProductIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('product');
}

// Load product details
function loadProductDetails() {
  const productId = getProductIdFromURL();
  const product = products[productId];

  if (!product) {
    document.querySelector('.product-detail-page').innerHTML = '<p>Product not found</p>';
    return;
  }

  // Update page title
  document.title = `${product.name} — BO Organics`;

  // Update product information
  document.getElementById('productLabel').textContent = product.category;
  document.getElementById('productTitle').textContent = product.name;
  document.getElementById('productPrice').textContent = '$' + product.price.toFixed(2);
  document.getElementById('productDescription').textContent = product.description;

  // Update benefits
  const benefitsList = document.getElementById('productBenefits');
  benefitsList.innerHTML = product.benefits.map(benefit => `<li>${benefit}</li>`).join('');

  // Update usage
  document.getElementById('productUsage').textContent = product.usage;

  // Update ingredients
  document.getElementById('productIngredients').textContent = product.ingredients;

  // Add to cart functionality
  const addToCartBtn = document.getElementById('addToCartBtn');
  addToCartBtn.addEventListener('click', () => {
    const quantity = parseInt(document.getElementById('quantity').value);
    addProductToCart(product.name, product.price, quantity);
  });

  // Quantity controls
  document.getElementById('increaseQty').addEventListener('click', () => {
    const qtyInput = document.getElementById('quantity');
    qtyInput.value = parseInt(qtyInput.value) + 1;
  });

  document.getElementById('decreaseQty').addEventListener('click', () => {
    const qtyInput = document.getElementById('quantity');
    if (parseInt(qtyInput.value) > 1) {
      qtyInput.value = parseInt(qtyInput.value) - 1;
    }
  });

  // Load related products
  loadRelatedProducts(product.related, productId);
}

// Add product to cart
function addProductToCart(name, price, quantity) {
  // Get cart from session storage or initialize
  let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

  // Add to cart
  for (let i = 0; i < quantity; i++) {
    const existing = cart.find(item => item.name === name);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ name, price, qty: 1 });
    }
  }

  sessionStorage.setItem('cart', JSON.stringify(cart));

  // Update cart display
  updateCartDisplay();

  // Show success feedback
  const btn = document.getElementById('addToCartBtn');
  const originalText = btn.textContent;
  btn.textContent = 'Added to Cart! ✓';
  btn.style.background = '#2d6a2e';
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
  }, 2000);
}

// Load related products
function loadRelatedProducts(relatedIds, currentProductId) {
  const relatedContainer = document.getElementById('relatedProducts');

  const relatedProducts = relatedIds
    .filter(id => id !== currentProductId)
    .slice(0, 3)
    .map(id => {
      const product = products[id];
      return `
        <div class="product-card" onclick="window.location.href='product-detail.html?product=${id}'">
          <div class="product-image">
            <div class="product-image-placeholder">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M7 21v-1a5 5 0 0110 0v1"/></svg>
            </div>
          </div>
          <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-desc">${product.description.substring(0, 50)}...</p>
            <div class="product-footer">
              <span class="product-price">$${product.price.toFixed(2)}</span>
              <button class="add-to-cart" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
            </div>
          </div>
        </div>
      `;
    });

  relatedContainer.innerHTML = relatedProducts.join('');

  // Add event listeners to related product cards
  document.querySelectorAll('#relatedProducts .add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const name = btn.dataset.name;
      const price = parseFloat(btn.dataset.price);
      addProductToCart(name, price, 1);
    });
  });
}

// Update cart display (sync with main cart)
function updateCartDisplay() {
  const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  const cartCount = document.getElementById('cartCount');
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = totalItems;
}

// Initialize on page load (only if on product detail page)
document.addEventListener('DOMContentLoaded', () => {
  // Only load product details if the product-detail-page element exists
  if (document.querySelector('.product-detail-page')) {
    loadProductDetails();
  }
  // Only update cart display if cartCount exists
  if (document.getElementById('cartCount')) {
    updateCartDisplay();
  }
});
