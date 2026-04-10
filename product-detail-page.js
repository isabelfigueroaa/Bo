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
      ingredients: 'Organic Rosehip Seed Oil, Vitamin C, Hyaluronic Acid, Jojoba Oil',
      images: ['Images/radiance-face-serum-1.jpg', 'Images/radiance-face-serum-2.jpg', 'Images/radiance-face-serum-3.jpg']
    },
    'botanical-cleansing-oil': {
      name: 'Botanical Cleansing Oil',
      category: 'Face Care',
      price: 36.00,
      description: 'Gentle jojoba & chamomile oil cleanser.',
      benefits: ['Effectively removes makeup', 'Gentle on sensitive skin', 'Leaves skin soft', 'Balances natural oil'],
      usage: 'Massage into dry skin for 1-2 minutes.',
      ingredients: 'Organic Jojoba Oil, Chamomile Extract, Vitamin E',
      images: ['Images/botanical-cleansing-oil-1.jpg', 'Images/botanical-cleansing-oil-2.jpg', 'Images/botanical-cleansing-oil-3.jpg']
    },
    'hydra-bloom-moisturizer': {
      name: 'Hydra-Bloom Moisturizer',
      category: 'Face Care',
      price: 42.00,
      description: 'Deep hydration with hyaluronic acid and shea butter.',
      benefits: ['Deep hydration 24 hours', 'Plumps fine lines', 'Reduces redness', 'Perfect for all skin'],
      usage: 'Apply to clean, damp skin morning and evening.',
      ingredients: 'Organic Hyaluronic Acid, Aloe Vera, Shea Butter, Jojoba Oil',
      images: ['Images/hydra-bloom-moisturizer-1.jpg', 'Images/hydra-bloom-moisturizer-2.jpg', 'Images/hydra-bloom-moisturizer-3.jpg']
    },
    'nourishing-body-butter': {
      name: 'Nourishing Body Butter',
      category: 'Body Care',
      price: 32.00,
      description: 'Rich cocoa butter & lavender body cream.',
      benefits: ['Deeply moisturizes', 'Lavender fragrance', 'Non-greasy', 'Long-lasting hydration'],
      usage: 'Apply to damp skin after showering.',
      ingredients: 'Organic Cocoa Butter, Lavender Oil, Shea Butter',
      images: ['Images/nourishing-body-butter-1.jpg', 'Images/nourishing-body-butter-2.jpg', 'Images/nourishing-body-butter-3.jpg']
    },
    'calming-body-oil': {
      name: 'Calming Body Oil',
      category: 'Body Care',
      price: 38.00,
      description: 'Chamomile & lavender body oil for relaxation.',
      benefits: ['Calms the skin', 'Aromatherapy experience', 'Lightweight', 'Perfect for massage'],
      usage: 'Apply to damp skin and massage in.',
      ingredients: 'Organic Chamomile Extract, Lavender Oil, Sweet Almond Oil',
      images: ['Images/calming-body-oil-1.jpg', 'Images/calming-body-oil-2.jpg', 'Images/calming-body-oil-3.jpg']
    },
    'delicate-eye-contour': {
      name: 'Delicate Eye Contour',
      category: 'Eye Care',
      price: 54.00,
      description: 'Caffeine & peptide-infused cream to reduce puffiness and fine lines.',
      benefits: ['Reduces puffiness and dark circles', 'Minimizes fine lines and wrinkles', 'Brightens the eye area', 'Gentle enough for daily use'],
      usage: 'Apply a small amount around the eye contour using your ring finger. Gently pat (do not rub) until absorbed.',
      ingredients: 'Caffeine Extract, Peptides, Hyaluronic Acid, Aloe Vera, Shea Butter',
      images: ['Images/delicate-eye-contour-1.jpg', 'Images/delicate-eye-contour-2.jpg', 'Images/delicate-eye-contour-3.jpg']
    },
    'nourishing-hair-elixir': {
      name: 'Nourishing Hair Elixir',
      category: 'Hair Care',
      price: 44.00,
      description: 'Argan oil & botanical extracts to restore shine and elasticity.',
      benefits: ['Restores natural shine', 'Repairs damaged hair', 'Adds elasticity and softness', 'Tames frizz'],
      usage: 'Apply a small amount to damp or dry hair, focusing on mid-lengths and ends. Style as usual.',
      ingredients: 'Organic Argan Oil, Lavender Oil, Rosemary Oil, Jojoba Oil, Vitamin E',
      images: ['Images/nourishing-hair-elixir-1.jpg', 'Images/nourishing-hair-elixir-2.jpg', 'Images/nourishing-hair-elixir-3.jpg']
    },
    'complete-glow-set': {
      name: 'Complete Glow Set',
      category: 'Sets & Bundles',
      price: 115.00,
      description: 'Face serum, cleansing oil & moisturizer – everything you need for a complete skincare routine.',
      benefits: ['Complete skincare routine in one set', 'Save 10% compared to individual purchases', 'Perfect for beginners', 'Travel-friendly sizes'],
      usage: 'Use as part of your daily skincare routine. Cleanse, apply serum, then moisturize.',
      ingredients: 'Multiple organic ingredients - see individual products',
      images: ['Images/complete-glow-set-1.jpg', 'Images/complete-glow-set-2.jpg', 'Images/complete-glow-set-3.jpg']
    },
    'body-care-collection': {
      name: 'Body Care Collection',
      category: 'Sets & Bundles',
      price: 98.00,
      description: 'Body butter, body oil & exfoliating scrub for total body care.',
      benefits: ['Complete body care system', 'Save on bundle pricing', 'Luxury spa experience at home', 'Perfect gift set'],
      usage: 'Use in sequence: exfoliate 2-3 times weekly, apply oil or butter daily.',
      ingredients: 'Multiple organic ingredients - see individual products',
      images: ['Images/body-care-collection-1.jpg', 'Images/body-care-collection-2.jpg', 'Images/body-care-collection-3.jpg']
    }
  };

  const product = products[productId];
  if (!product) {
    return '<div class="container"><h2>Product Not Found</h2><p><a href="#/shop">Back to Shop</a></p></div>';
  }

  // Generate gallery HTML
  const images = product.images || [];
  const defaultImage = images.length > 0 ? images[0] : '';

  let galleryThumbnails = '';
  images.forEach((img, index) => {
    galleryThumbnails += `
      <div class="gallery-thumbnail" data-index="${index}" style="cursor: pointer;">
        <img src="${img}" alt="Product view ${index + 1}" onerror="this.style.display='none'">
        <div class="product-image-placeholder-small" style="display: ${!img ? 'flex' : 'none'};">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M7 21v-1a5 5 0 0110 0v1"/></svg>
        </div>
      </div>
    `;
  });

  let html = '<div class="product-detail-page"><div class="container"><a href="#/shop" class="back-link">← Back to Shop</a><div class="product-detail-container"><div class="product-detail-image"><div class="product-gallery"><div class="gallery-main"><img src="' + defaultImage + '" alt="' + product.name + '" class="gallery-main-image" id="galleryMainImage" onerror="this.style.display=\'none\'"><div class="product-image-placeholder-large" id="galleryFallback" style="display: ' + (defaultImage ? 'none' : 'flex') + ';"><svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M7 21v-1a5 5 0 0110 0v1"/></svg></div></div><div class="gallery-controls"><button class="gallery-prev" id="galleryPrev" aria-label="Previous image">❮</button><button class="gallery-next" id="galleryNext" aria-label="Next image">❯</button></div><div class="gallery-thumbnails">' + galleryThumbnails + '</div></div><div class="product-detail-info"><div class="product-detail-header"><h1 class="product-detail-title">' + product.name + '</h1><button class="wishlist-btn" data-product-id="' + productId + '" aria-label="Add to wishlist"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button></div><p class="product-detail-category">' + product.category + '</p><p class="product-detail-price">$' + product.price.toFixed(2) + '</p><div class="product-detail-description"><h3>Description</h3><p>' + product.description + '</p></div><div class="product-detail-benefits"><h3>Key Benefits</h3><ul>';

  product.benefits.forEach(b => {
    html += '<li>' + b + '</li>';
  });

  html += '</ul></div><div class="product-detail-usage"><h3>How to Use</h3><p>' + product.usage + '</p></div><div class="product-detail-ingredients"><h3>Ingredients</h3><p>' + product.ingredients + '</p></div><div class="product-detail-actions"><button class="btn btn-primary add-to-cart-detail" data-product-id="' + productId + '" data-name="' + product.name + '" data-price="' + product.price + '">Add to Cart</button></div></div></div></div></div>';

  // Related Products Section
  html += '<section class="related-products-section"><div class="container"><p class="section-label">You Might Also Like</p><h2 class="section-title">Related Products</h2><div class="related-products-grid">';

  // Find related products by category
  const relatedProducts = Object.values(products)
    .filter(p => p.category === product.category && p.name !== product.name)
    .slice(0, 4);

  if (relatedProducts.length > 0) {
    relatedProducts.forEach(relatedProduct => {
      const relatedId = Object.keys(products).find(key => products[key].name === relatedProduct.name);
      const relatedImage = relatedProduct.images && relatedProduct.images.length > 0 ? relatedProduct.images[0] : '';

      html += '<div class="related-product-card" data-product-id="' + relatedId + '" style="cursor: pointer;"><button class="wishlist-btn" data-product-id="' + relatedId + '" aria-label="Add to wishlist"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button><div class="related-product-image"><img src="' + relatedImage + '" alt="' + relatedProduct.name + '" style="display: ' + (relatedImage ? 'block' : 'none') + '"><div class="product-image-placeholder" style="display: ' + (relatedImage ? 'none' : 'flex') + '"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M7 21v-1a5 5 0 0110 0v1"/></svg></div></div><div class="related-product-info"><h3 class="related-product-name">' + relatedProduct.name + '</h3><p class="related-product-category">' + relatedProduct.category + '</p><p class="related-product-price">$' + relatedProduct.price.toFixed(2) + '</p><button class="btn btn-primary btn-sm view-details-btn" data-product-id="' + relatedId + '">View Details</button></div></div>';
    });
  } else {
    html += '<p class="no-related">No related products found in this category</p>';
  }

  html += '</div></section>';

  html += '<footer class="footer"><div class="container"><div class="footer-grid"><div class="footer-brand"><h3 class="logo">BO Organics</h3><p>Pure, Intentional Beauty. Handcrafted organic skincare made with love and the finest botanicals.</p></div><div class="footer-links"><h4>Quick Links</h4><ul><li><a href="#/shop">Shop All</a></li><li><a href="#/about">Our Story</a></li><li><a href="#/ingredients">Ingredients</a></li></ul></div></div></div></footer>';

  return html;
}
