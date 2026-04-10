// PRODUCT DETAIL PAGE FUNCTION
function getProductDetailPage(productId) {
  const products = {
    'radiance-face-serum': {
      name: 'Radiance Face Serum',
      category: 'Face Care',
      price: 48.00,
      description: 'Rosehip & Vitamin C brightening serum for luminous, even-toned skin.',
      benefits: ['Brightens and evens skin tone', 'Reduces appearance of fine lines', 'Boosts natural radiance', 'Lightweight and fast-absorbing'],
      usage: 'Apply 2-3 drops to clean skin morning and evening.',
      ingredients: 'Organic Rosehip Seed Oil, Vitamin C, Hyaluronic Acid, Jojoba Oil'
    },
    'botanical-cleansing-oil': {
      name: 'Botanical Cleansing Oil',
      category: 'Face Care',
      price: 36.00,
      description: 'Gentle jojoba & chamomile oil cleanser.',
      benefits: ['Effectively removes makeup', 'Gentle on sensitive skin', 'Leaves skin soft', 'Balances natural oil'],
      usage: 'Massage into dry skin for 1-2 minutes.',
      ingredients: 'Organic Jojoba Oil, Chamomile Extract, Vitamin E'
    },
    'hydra-bloom-moisturizer': {
      name: 'Hydra-Bloom Moisturizer',
      category: 'Face Care',
      price: 42.00,
      description: 'Deep hydration with hyaluronic acid and shea butter.',
      benefits: ['Deep hydration 24 hours', 'Plumps fine lines', 'Reduces redness', 'Perfect for all skin'],
      usage: 'Apply to clean, damp skin morning and evening.',
      ingredients: 'Organic Hyaluronic Acid, Aloe Vera, Shea Butter, Jojoba Oil'
    },
    'nourishing-body-butter': {
      name: 'Nourishing Body Butter',
      category: 'Body Care',
      price: 32.00,
      description: 'Rich cocoa butter & lavender body cream.',
      benefits: ['Deeply moisturizes', 'Lavender fragrance', 'Non-greasy', 'Long-lasting hydration'],
      usage: 'Apply to damp skin after showering.',
      ingredients: 'Organic Cocoa Butter, Lavender Oil, Shea Butter'
    },
    'calming-body-oil': {
      name: 'Calming Body Oil',
      category: 'Body Care',
      price: 38.00,
      description: 'Chamomile & lavender body oil for relaxation.',
      benefits: ['Calms the skin', 'Aromatherapy experience', 'Lightweight', 'Perfect for massage'],
      usage: 'Apply to damp skin and massage in.',
      ingredients: 'Organic Chamomile Extract, Lavender Oil, Sweet Almond Oil'
    }
  };

  const product = products[productId];
  if (!product) {
    return '<div class="container"><h2>Product Not Found</h2><p><a href="#/shop">Back to Shop</a></p></div>';
  }

  let html = '<div class="product-detail-page"><div class="container"><a href="#/shop" class="back-link">← Back to Shop</a><div class="product-detail-container"><div class="product-detail-image"><div class="product-image-large"><div class="product-image-placeholder-large"><svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M7 21v-1a5 5 0 0110 0v1"/></svg></div></div></div><div class="product-detail-info"><div class="product-detail-header"><h1 class="product-detail-title">' + product.name + '</h1><button class="wishlist-btn" data-product-id="' + productId + '" aria-label="Add to wishlist"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button></div><p class="product-detail-category">' + product.category + '</p><p class="product-detail-price">$' + product.price.toFixed(2) + '</p><div class="product-detail-description"><h3>Description</h3><p>' + product.description + '</p></div><div class="product-detail-benefits"><h3>Key Benefits</h3><ul>';

  product.benefits.forEach(b => {
    html += '<li>' + b + '</li>';
  });

  html += '</ul></div><div class="product-detail-usage"><h3>How to Use</h3><p>' + product.usage + '</p></div><div class="product-detail-ingredients"><h3>Ingredients</h3><p>' + product.ingredients + '</p></div><div class="product-detail-actions"><button class="btn btn-primary add-to-cart-detail" data-product-id="' + productId + '" data-name="' + product.name + '" data-price="' + product.price + '">Add to Cart</button></div></div></div></div></div>';

  return html;
}
