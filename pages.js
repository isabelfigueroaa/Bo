/* ============================================
   BO Organics — SPA Page Templates
   ============================================ */

// Ingredient Database
const ingredientsDatabase = {
  'rosehip': {
    name: 'Rosehip Seed Oil',
    description: 'Rich in vitamins A & C for cell regeneration and brightening',
    fullDescription: 'Rosehip seed oil is extracted from the seeds of the rosehip plant and is renowned for its exceptional skin-loving properties. Rich in vitamins A, C, and E, as well as essential fatty acids, this oil works to boost collagen production, reduce the appearance of scars, age spots, and fine lines. It promotes skin renewal and gives a radiant, youthful glow. The natural retinol content makes it perfect for anti-aging treatments while remaining gentle enough for sensitive skin.',
    benefits: ['Cell regeneration', 'Brightening and even tone', 'Reduces scars & age spots', 'Boosts collagen', 'Gentle on sensitive skin'],
    usedIn: ['Radiance Face Serum', 'Complete Glow Set']
  },
  'shea': {
    name: 'Shea Butter',
    description: 'Deep moisture and skin barrier protection',
    fullDescription: 'Shea butter is a natural fat extracted from the kernels of shea tree nuts, native to West Africa. It\'s loaded with vitamins A, E, and F, as well as fatty acids that deeply nourish and protect the skin. Shea butter creates a protective barrier against environmental damage while providing intense hydration. It\'s rich enough for dry skin yet non-comedogenic, making it suitable for all skin types. The natural compounds in shea butter promote healing and reduce inflammation.',
    benefits: ['Deep hydration', 'Barrier protection', 'Anti-inflammatory', 'Rich in vitamins', 'Non-comedogenic'],
    usedIn: ['Hydra-Bloom Moisturizer', 'Nourishing Body Butter']
  },
  'jojoba': {
    name: 'Jojoba Oil',
    description: 'Balances oil production, lightweight hydration',
    fullDescription: 'Jojoba oil is derived from the seeds of the jojoba plant and is remarkably similar in composition to the skin\'s natural sebum. This makes it the perfect oil for all skin types—it deeply moisturizes without leaving a greasy residue. Jojoba oil regulates sebum production, making it ideal for both oily and dry skin. It\'s rich in iodine, which provides antibacterial and antifungal properties. The oil also contains vitamin E and B-complex vitamins for skin protection and rejuvenation.',
    benefits: ['Balances oil production', 'Lightweight', 'Absorbs quickly', 'Antibacterial', 'Suitable for all skin types'],
    usedIn: ['Botanical Cleansing Oil', 'Radiance Face Serum']
  },
  'chamomile': {
    name: 'Chamomile Extract',
    description: 'Calming anti-inflammatory for sensitive skin',
    fullDescription: 'Chamomile has been used in skincare for centuries due to its powerful anti-inflammatory and soothing properties. The extract is packed with antioxidants and flavonoids that calm irritation, reduce redness, and promote healing. Chamomile is gentle enough for the most sensitive skin types and works beautifully to soothe reactive or compromised skin. It also has mild antiseptic properties and helps the skin maintain its natural pH balance. Perfect for anyone dealing with inflammation, acne, or sensitivity.',
    benefits: ['Calming & soothing', 'Anti-inflammatory', 'Reduces redness', 'Gentle on sensitive skin', 'Promotes healing'],
    usedIn: ['Botanical Cleansing Oil', 'Hydra-Bloom Moisturizer']
  },
  'hyaluronic': {
    name: 'Hyaluronic Acid',
    description: 'Plant-derived, holds 1000x its weight in water',
    fullDescription: 'Hyaluronic acid is a naturally occurring substance found in the body, and we use a plant-derived form in our skincare. This humectant has an extraordinary ability to hold up to 1000 times its weight in water, making it the ultimate hydrator. It plumps the skin from within, reducing the appearance of fine lines and wrinkles while maintaining skin elasticity. Hyaluronic acid works best in layered skincare—applying it to damp skin helps it absorb maximum moisture. The result is visibly plumper, smoother, more youthful-looking skin.',
    benefits: ['Intense hydration', 'Plumps fine lines', 'Boosts elasticity', 'Lightweight formula', 'Improves skin texture'],
    usedIn: ['Hydra-Bloom Moisturizer', 'Delicate Eye Contour']
  },
  'argan': {
    name: 'Argan Oil',
    description: 'Rich in antioxidants and essential fatty acids',
    fullDescription: 'Argan oil, often called "liquid gold," is cold-pressed from the kernels of argan tree nuts found in Morocco. It\'s incredibly rich in antioxidants, vitamin E, and essential fatty acids that nourish, protect, and repair the skin. Argan oil is easily absorbed and doesn\'t leave a greasy finish, making it perfect for all skin types. It strengthens skin barrier function, reduces inflammation, and promotes a healthy glow. The oil also works beautifully on hair and nails, making it a true multi-purpose beauty ingredient.',
    benefits: ['Rich antioxidants', 'Vitamin E protection', 'Nourishes deeply', 'Non-greasy', 'Anti-aging properties'],
    usedIn: ['Calming Body Oil', 'Nourishing Hair Elixir']
  },
  'vitamin-e': {
    name: 'Vitamin E',
    description: 'Powerful antioxidant protection against environmental damage',
    fullDescription: 'Vitamin E is one of the most powerful antioxidants in skincare, protecting your skin from free radical damage and environmental stressors like pollution and UV rays. It\'s a fat-soluble vitamin that penetrates deeply into the skin to provide long-lasting protection. Vitamin E supports skin repair, maintains skin elasticity, and helps prevent premature aging. When combined with other antioxidants like vitamin C, it becomes even more effective. It\'s also known for its soothing properties, making it ideal for sensitive or irritated skin.',
    benefits: ['Antioxidant protection', 'Prevents premature aging', 'Supports skin repair', 'Anti-inflammatory', 'Enhances other actives'],
    usedIn: ['Botanical Cleansing Oil', 'Nourishing Body Butter']
  },
  'aloe': {
    name: 'Aloe Vera',
    description: 'Soothing and hydrating for sensitive skin',
    fullDescription: 'Aloe vera has been used in skincare for thousands of years and for good reason. The gel from aloe vera leaves contains vitamins, minerals, amino acids, and antioxidants that soothe, hydrate, and heal the skin. It\'s particularly effective for sensitive, irritated, or inflamed skin, helping to reduce redness and promote faster healing. Aloe vera is incredibly hydrating yet lightweight, making it perfect for all skin types. It also has mild antiseptic properties and helps maintain the skin\'s natural moisture balance without clogging pores.',
    benefits: ['Soothing & calming', 'Intense hydration', 'Promotes healing', 'Reduces inflammation', 'Lightweight feel'],
    usedIn: ['Hydra-Bloom Moisturizer', 'Delicate Eye Contour']
  }
};

// All page templates returned as HTML strings
// Routes: #/, #/about, #/shop, #/ingredients, #/joinbo, #/login, #/ingredient/:id, #/product/:id

// HOME PAGE
function getHomePage() {
  return `
    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="hero-subtitle">Pure, Intentional Beauty</p>
        <h1 class="hero-title">Nourish Your Skin<br>With Nature's Finest</h1>
        <p class="hero-description">Handcrafted organic skincare made with ethically sourced botanicals. No synthetics. No compromises. Just pure, radiant beauty.</p>
        <div class="hero-buttons">
          <a href="#/shop" class="btn btn-primary">Shop Now</a>
        </div>
      </div>
    </section>

    <!-- Features Banner -->
    <section class="features">
      <div class="container">
        <div class="features-grid">
          <div class="feature">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3>100% Organic</h3>
            <p>Certified organic ingredients from trusted farms</p>
          </div>
          <div class="feature">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
              </svg>
            </div>
            <h3>Cruelty Free</h3>
            <p>Never tested on animals, always kind</p>
          </div>
          <div class="feature">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3>Sustainable</h3>
            <p>Eco-friendly packaging and zero waste</p>
          </div>
          <div class="feature">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
              </svg>
            </div>
            <h3>Handcrafted</h3>
            <p>Small-batch production with care</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Shop Section -->
    <section class="shop" id="shop">
      <div class="container">
        <p class="section-label center">Our Collection</p>
        <h2 class="section-title center">Shop Our Bestsellers</h2>
        <p class="section-description center">Thoughtfully crafted essentials for your daily ritual</p>

        <!-- Category Filter -->
        <div class="filter-bar">
          <button class="filter-btn active" data-filter="all">All</button>
          <button class="filter-btn" data-filter="face">Face</button>
          <button class="filter-btn" data-filter="body">Body</button>
          <button class="filter-btn" data-filter="hair">Hair</button>
          <button class="filter-btn" data-filter="sets">Sets</button>
        </div>

        <!-- Products Grid -->
        <div class="products-grid" id="productsGrid">
          <div class="product-card" data-category="face" style="cursor: pointer;">
            <div class="product-badge">Bestseller</div>
            <div class="product-image">
              <div class="product-image-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M7 21v-1a5 5 0 0110 0v1"/></svg>
              </div>
            </div>
            <div class="product-info">
              <h3 class="product-name">Radiance Face Serum</h3>
              <p class="product-desc">Rosehip & Vitamin C brightening serum for luminous, even-toned skin</p>
              <div class="product-footer">
                <span class="product-price">$48.00</span>
                <button class="add-to-cart" data-product-id="radiance-face-serum" data-name="Radiance Face Serum" data-price="48.00" onclick="event.stopPropagation();">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="product-card" data-category="face" style="cursor: pointer;">
            <div class="product-image">
              <div class="product-image-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="12" cy="12" r="9"/><path d="M12 3v18"/><path d="M3 12h18"/></svg>
              </div>
            </div>
            <div class="product-info">
              <h3 class="product-name">Botanical Cleansing Oil</h3>
              <p class="product-desc">Gentle jojoba & chamomile oil cleanser that melts away impurities</p>
              <div class="product-footer">
                <span class="product-price">$36.00</span>
                <button class="add-to-cart" data-product-id="botanical-cleansing-oil" data-name="Botanical Cleansing Oil" data-price="36.00" onclick="event.stopPropagation();">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="product-card" data-category="face" style="cursor: pointer;">
            <div class="product-badge new">New</div>
            <div class="product-image">
              <div class="product-image-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
            </div>
            <div class="product-info">
              <h3 class="product-name">Hydra-Bloom Moisturizer</h3>
              <p class="product-desc">Deep hydration with hyaluronic acid, aloe vera & shea butter</p>
              <div class="product-footer">
                <span class="product-price">$42.00</span>
                <button class="add-to-cart" data-product-id="hydra-bloom-moisturizer" data-name="Hydra-Bloom Moisturizer" data-price="42.00" onclick="event.stopPropagation();">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="product-card" data-category="body" style="cursor: pointer;">
            <div class="product-image">
              <div class="product-image-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
              </div>
            </div>
            <div class="product-info">
              <h3 class="product-name">Nourishing Body Butter</h3>
              <p class="product-desc">Rich cocoa butter & lavender body cream for silky smooth skin</p>
              <div class="product-footer">
                <span class="product-price">$32.00</span>
                <button class="add-to-cart" data-product-id="nourishing-body-butter" data-name="Nourishing Body Butter" data-price="32.00" onclick="event.stopPropagation();">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="product-card" data-category="body" style="cursor: pointer;">
            <div class="product-badge">Popular</div>
            <div class="product-image">
              <div class="product-image-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
            </div>
            <div class="product-info">
              <h3 class="product-name">Calming Body Oil</h3>
              <p class="product-desc">Argan & sweet almond oil infused with calming essential oils</p>
              <div class="product-footer">
                <span class="product-price">$38.00</span>
                <button class="add-to-cart" data-product-id="calming-body-oil" data-name="Calming Body Oil" data-price="38.00" onclick="event.stopPropagation();">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="product-card" data-category="hair" style="cursor: pointer;">
            <div class="product-badge new">New</div>
            <div class="product-image">
              <div class="product-image-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
            </div>
            <div class="product-info">
              <h3 class="product-name">Delicate Eye Contour</h3>
              <p class="product-desc">Caffeine & peptide-infused cream to reduce puffiness and fine lines</p>
              <div class="product-footer">
                <span class="product-price">$54.00</span>
                <button class="add-to-cart" data-product-id="delicate-eye-contour" data-name="Delicate Eye Contour" data-price="54.00" onclick="event.stopPropagation();">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="product-card" data-category="hair" style="cursor: pointer;">
            <div class="product-badge new">New</div>
            <div class="product-image">
              <div class="product-image-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M6 9c0-3 2-5 6-5s6 2 6 5v3c0 2-1 4-3 4H9c-2 0-3-2-3-4V9z"/><path d="M9 16h6M8 20h8"/></svg>
              </div>
            </div>
            <div class="product-info">
              <h3 class="product-name">Nourishing Hair Elixir</h3>
              <p class="product-desc">Argan oil & botanical extracts to restore shine and elasticity</p>
              <div class="product-footer">
                <span class="product-price">$44.00</span>
                <button class="add-to-cart" data-product-id="nourishing-hair-elixir" data-name="Nourishing Hair Elixir" data-price="44.00" onclick="event.stopPropagation();">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="product-card" data-category="sets" style="cursor: pointer;">
            <div class="product-badge">Bundle Deal</div>
            <div class="product-image">
              <div class="product-image-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M6 9l6-6 6 6"/><rect x="3" y="9" width="18" height="12" rx="2"/></svg>
              </div>
            </div>
            <div class="product-info">
              <h3 class="product-name">Complete Glow Set</h3>
              <p class="product-desc">Face serum, cleansing oil & moisturizer – everything you need</p>
              <div class="product-footer">
                <span class="product-price">$115.00</span>
                <button class="add-to-cart" data-product-id="complete-glow-set" data-name="Complete Glow Set" data-price="115.00" onclick="event.stopPropagation();">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="product-card" data-category="sets" style="cursor: pointer;">
            <div class="product-image">
              <div class="product-image-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M6 9l6-6 6 6"/><rect x="3" y="9" width="18" height="12" rx="2"/></svg>
              </div>
            </div>
            <div class="product-info">
              <h3 class="product-name">Body Care Collection</h3>
              <p class="product-desc">Body butter, body oil & exfoliating scrub for total body care</p>
              <div class="product-footer">
                <span class="product-price">$98.00</span>
                <button class="add-to-cart" data-product-id="body-care-collection" data-name="Body Care Collection" data-price="98.00" onclick="event.stopPropagation();">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ingredients CTA -->
    <section class="ingredients-cta">
      <div class="container">
        <div class="ingredients-cta-grid">
          <div class="ingredients-cta-content">
            <h2>Clean Ingredients, Real Results</h2>
            <p>Every product starts with nature's most potent botanicals. We never use parabens, sulfates, synthetic fragrances, or artificial colors. Our commitment to purity means every ingredient is carefully selected for its effectiveness and safety.</p>
            <a href="#/ingredients" class="btn btn-primary">Explore Our Ingredients</a>
          </div>
          <div class="ingredients-cta-image">
            <img src="fruit-and-cream.jpg" alt="Fresh fruits and cream ingredients" style="width: 100%; height: 100%; object-fit: cover; border-radius: 4px;">
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials" id="testimonials">
      <div class="container">
        <p class="section-label center">What People Say</p>
        <h2 class="section-title center">Loved by Thousands</h2>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="stars">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            <p class="testimonial-text">"The Radiance Face Serum completely transformed my skin. I've never felt so confident going without makeup. Truly a game changer."</p>
            <div class="testimonial-author">
              <div class="author-avatar">S</div>
              <div>
                <strong>Sofia M.</strong>
                <span>Verified Buyer</span>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="stars">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            <p class="testimonial-text">"I'm obsessed with the Nourishing Body Butter. The lavender scent is heavenly and my skin stays moisturized all day. Will never switch brands."</p>
            <div class="testimonial-author">
              <div class="author-avatar">A</div>
              <div>
                <strong>Amara K.</strong>
                <span>Verified Buyer</span>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="stars">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            <p class="testimonial-text">"Finally, a brand that delivers on its promises. The Complete Glow Set is worth every penny. My sensitive skin has never been happier."</p>
            <div class="testimonial-author">
              <div class="author-avatar">L</div>
              <div>
                <strong>Leah T.</strong>
                <span>Verified Buyer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="newsletter">
      <div class="container">
        <div class="newsletter-content">
          <h2>Join the BO Organics Family</h2>
          <p>Subscribe for exclusive offers, skincare tips, and early access to new products.</p>
          <form class="newsletter-form" id="newsletterForm">
            <input type="email" placeholder="Enter your email" required>
            <button type="submit" class="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer" id="contact">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <h3 class="logo">BO Organics</h3>
            <p>Pure, Intentional Beauty. Handcrafted organic skincare made with love and the finest botanicals.</p>
            <div class="social-links">
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
              </a>
            </div>
          </div>
          <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#/shop">Shop All</a></li>
              <li><a href="#/about">Our Story</a></li>
              <li><a href="#/ingredients">Ingredients</a></li>
              <li><a href="#testimonials">Reviews</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Contact</h4>
            <ul>
              <li>hello@boorganics.com</li>
              <li>(555) 123-4567</li>
              <li>Mon - Fri, 9am - 5pm</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 BO Organics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}

// SHOP PAGE (Full page with all products and filters)
function getShopPage() {
  return `
    <section class="shop-page" id="shop">
      <div class="container">
        <div class="shop-header">
          <p class="section-label">Our Collection</p>
          <h1 class="section-title">Shop All Products</h1>
          <p class="section-description">Thoughtfully crafted essentials for your daily ritual</p>
        </div>

        <!-- Filters -->
        <div class="shop-filters">
          <div class="filter-section">
            <h3 class="filter-title">Filter by Type</h3>
            <div class="filter-buttons">
              <button class="filter-btn active" data-filter="all">All</button>
              <button class="filter-btn" data-filter="new">New Arrivals</button>
              <button class="filter-btn" data-filter="face">Face Care</button>
              <button class="filter-btn" data-filter="body">Body Care</button>
              <button class="filter-btn" data-filter="eyes">Eye Care</button>
              <button class="filter-btn" data-filter="hair">Hair Care</button>
              <button class="filter-btn" data-filter="sets">Sets & Bundles</button>
            </div>
          </div>
        </div>

        <!-- Products Grid -->
        <div class="products-grid" id="productsGrid">
          <div class="product-card" data-category="face" style="cursor: pointer;">
            <div class="product-badge">Bestseller</div>
            <div class="product-image">
              <div class="product-image-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M7 21v-1a5 5 0 0110 0v1"/></svg>
              </div>
            </div>
            <div class="product-info">
              <h3 class="product-name">Radiance Face Serum</h3>
              <p class="product-desc">Rosehip & Vitamin C brightening serum for luminous, even-toned skin</p>
              <div class="product-footer">
                <span class="product-price">$48.00</span>
                <button class="add-to-cart" data-product-id="radiance-face-serum" data-name="Radiance Face Serum" data-price="48.00" onclick="event.stopPropagation();">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="product-card" data-category="face" style="cursor: pointer;">
            <div class="product-image">
              <div class="product-image-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="12" cy="12" r="9"/><path d="M12 3v18"/><path d="M3 12h18"/></svg>
              </div>
            </div>
            <div class="product-info">
              <h3 class="product-name">Botanical Cleansing Oil</h3>
              <p class="product-desc">Gentle jojoba & chamomile oil cleanser that melts away impurities</p>
              <div class="product-footer">
                <span class="product-price">$36.00</span>
                <button class="add-to-cart" data-product-id="botanical-cleansing-oil" data-name="Botanical Cleansing Oil" data-price="36.00" onclick="event.stopPropagation();">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="product-card" data-category="face new" style="cursor: pointer;">
            <div class="product-badge new">New</div>
            <div class="product-image">
              <div class="product-image-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
            </div>
            <div class="product-info">
              <h3 class="product-name">Hydra-Bloom Moisturizer</h3>
              <p class="product-desc">Deep hydration with hyaluronic acid, aloe vera & shea butter</p>
              <div class="product-footer">
                <span class="product-price">$42.00</span>
                <button class="add-to-cart" data-product-id="hydra-bloom-moisturizer" data-name="Hydra-Bloom Moisturizer" data-price="42.00" onclick="event.stopPropagation();">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="product-card" data-category="body" style="cursor: pointer;">
            <div class="product-image">
              <div class="product-image-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
              </div>
            </div>
            <div class="product-info">
              <h3 class="product-name">Nourishing Body Butter</h3>
              <p class="product-desc">Rich cocoa butter & lavender body cream for silky smooth skin</p>
              <div class="product-footer">
                <span class="product-price">$32.00</span>
                <button class="add-to-cart" data-product-id="nourishing-body-butter" data-name="Nourishing Body Butter" data-price="32.00" onclick="event.stopPropagation();">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="product-card" data-category="body" style="cursor: pointer;">
            <div class="product-badge">Popular</div>
            <div class="product-image">
              <div class="product-image-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
            </div>
            <div class="product-info">
              <h3 class="product-name">Calming Body Oil</h3>
              <p class="product-desc">Argan & sweet almond oil infused with calming essential oils</p>
              <div class="product-footer">
                <span class="product-price">$38.00</span>
                <button class="add-to-cart" data-product-id="calming-body-oil" data-name="Calming Body Oil" data-price="38.00" onclick="event.stopPropagation();">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="product-card" data-category="eyes new" style="cursor: pointer;">
            <div class="product-badge new">New</div>
            <div class="product-image">
              <div class="product-image-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
            </div>
            <div class="product-info">
              <h3 class="product-name">Delicate Eye Contour</h3>
              <p class="product-desc">Caffeine & peptide-infused cream to reduce puffiness and fine lines</p>
              <div class="product-footer">
                <span class="product-price">$54.00</span>
                <button class="add-to-cart" data-product-id="delicate-eye-contour" data-name="Delicate Eye Contour" data-price="54.00" onclick="event.stopPropagation();">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="product-card" data-category="hair new" style="cursor: pointer;">
            <div class="product-badge new">New</div>
            <div class="product-image">
              <div class="product-image-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M6 9c0-3 2-5 6-5s6 2 6 5v3c0 2-1 4-3 4H9c-2 0-3-2-3-4V9z"/><path d="M9 16h6M8 20h8"/></svg>
              </div>
            </div>
            <div class="product-info">
              <h3 class="product-name">Nourishing Hair Elixir</h3>
              <p class="product-desc">Argan oil & botanical extracts to restore shine and elasticity</p>
              <div class="product-footer">
                <span class="product-price">$44.00</span>
                <button class="add-to-cart" data-product-id="nourishing-hair-elixir" data-name="Nourishing Hair Elixir" data-price="44.00" onclick="event.stopPropagation();">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="product-card" data-category="sets" style="cursor: pointer;">
            <div class="product-badge">Bundle Deal</div>
            <div class="product-image">
              <div class="product-image-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M6 9l6-6 6 6"/><rect x="3" y="9" width="18" height="12" rx="2"/></svg>
              </div>
            </div>
            <div class="product-info">
              <h3 class="product-name">Complete Glow Set</h3>
              <p class="product-desc">Face serum, cleansing oil & moisturizer – everything you need</p>
              <div class="product-footer">
                <span class="product-price">$115.00</span>
                <button class="add-to-cart" data-product-id="complete-glow-set" data-name="Complete Glow Set" data-price="115.00" onclick="event.stopPropagation();">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="product-card" data-category="sets" style="cursor: pointer;">
            <div class="product-image">
              <div class="product-image-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M6 9l6-6 6 6"/><rect x="3" y="9" width="18" height="12" rx="2"/></svg>
              </div>
            </div>
            <div class="product-info">
              <h3 class="product-name">Body Care Collection</h3>
              <p class="product-desc">Body butter, body oil & exfoliating scrub for total body care</p>
              <div class="product-footer">
                <span class="product-price">$98.00</span>
                <button class="add-to-cart" data-product-id="body-care-collection" data-name="Body Care Collection" data-price="98.00" onclick="event.stopPropagation();">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <h3 class="logo">BO Organics</h3>
            <p>Pure, Intentional Beauty. Handcrafted organic skincare made with love and the finest botanicals.</p>
            <div class="social-links">
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
              </a>
            </div>
          </div>
          <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#/shop">Shop All</a></li>
              <li><a href="#/about">Our Story</a></li>
              <li><a href="#/ingredients">Ingredients</a></li>
              <li><a href="#testimonials">Reviews</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Contact</h4>
            <ul>
              <li>hello@boorganics.com</li>
              <li>(555) 123-4567</li>
              <li>Mon - Fri, 9am - 5pm</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 BO Organics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}

// ABOUT PAGE
function getAboutPage() {
  return `
    <section class="about-page" id="about">
      <div class="container">
        <div class="about-grid">
          <div class="about-image">
            <div class="about-image-placeholder">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                <path d="M12 22c4-4 8-7.5 8-12a8 8 0 10-16 0c0 4.5 4 8 8 12z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>BO Organics</span>
            </div>
          </div>
          <div class="about-text-content">
            <p class="section-label">Our Story</p>
            <h1 class="section-title">Beauty Born From Intention</h1>
            <p class="about-text">BO Organics was founded with a simple belief: your skin deserves the same purity as the food you eat. We source the finest organic botanicals from sustainable farms around the world, crafting each product by hand in small batches.</p>
            <p class="about-text">Every ingredient is chosen with intention. Every formula is designed to work in harmony with your skin's natural balance. No fillers. No toxins. Just the transformative power of nature.</p>

            <div class="about-stats">
              <div class="stat">
                <span class="stat-number">50+</span>
                <span class="stat-label">Organic Ingredients</span>
              </div>
              <div class="stat">
                <span class="stat-number">10K+</span>
                <span class="stat-label">Happy Customers</span>
              </div>
              <div class="stat">
                <span class="stat-number">100%</span>
                <span class="stat-label">Natural Formulas</span>
              </div>
            </div>

            <div class="about-values">
              <h3>Our Values</h3>
              <ul>
                <li><strong>Purity:</strong> Every ingredient is certified organic and sustainably sourced</li>
                <li><strong>Transparency:</strong> We believe in full ingredient disclosure</li>
                <li><strong>Craftsmanship:</strong> Small-batch production ensures quality and care</li>
                <li><strong>Sustainability:</strong> Eco-friendly packaging and zero-waste practices</li>
                <li><strong>Ethics:</strong> Cruelty-free and fair-trade practices throughout</li>
              </ul>
            </div>

            <a href="#/shop" class="btn btn-primary">Shop Our Collection</a>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <h3 class="logo">BO Organics</h3>
            <p>Pure, Intentional Beauty. Handcrafted organic skincare made with love and the finest botanicals.</p>
          </div>
          <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#/shop">Shop All</a></li>
              <li><a href="#/about">Our Story</a></li>
              <li><a href="#/ingredients">Ingredients</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Contact</h4>
            <ul>
              <li>hello@boorganics.com</li>
              <li>(555) 123-4567</li>
              <li>Mon - Fri, 9am - 5pm</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 BO Organics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}

// INGREDIENTS PAGE
function getIngredientsPage() {
  return `
    <section class="ingredients-page" id="ingredients">
      <div class="container">
        <div class="ingredients-grid">
          <div class="ingredients-content">
            <p class="section-label">What We Use</p>
            <h1 class="section-title">Clean Ingredients,<br>Real Results</h1>
            <p class="ingredients-text">Every product starts with nature's most potent botanicals. We never use parabens, sulfates, synthetic fragrances, or artificial colors. Our commitment to purity means every ingredient is carefully selected for its effectiveness and safety.</p>
            <div class="ingredients-list">
              <div class="ingredient-item" onclick="window.location.hash='#/ingredient/rosehip'" style="cursor: pointer;">
                <span class="ingredient-dot"></span>
                <div>
                  <strong>Rosehip Seed Oil</strong>
                  <p>Rich in vitamins A & C for cell regeneration and brightening. Boosts collagen production and reduces the appearance of scars and age spots.</p>
                </div>
              </div>
              <div class="ingredient-item" onclick="window.location.hash='#/ingredient/shea'" style="cursor: pointer;">
                <span class="ingredient-dot"></span>
                <div>
                  <strong>Shea Butter</strong>
                  <p>Deep moisture and skin barrier protection. Contains fatty acids and vitamins that nourish and protect the skin from environmental damage.</p>
                </div>
              </div>
              <div class="ingredient-item" onclick="window.location.hash='#/ingredient/jojoba'" style="cursor: pointer;">
                <span class="ingredient-dot"></span>
                <div>
                  <strong>Jojoba Oil</strong>
                  <p>Balances oil production, lightweight hydration. Closely mimics skin's natural sebum, making it suitable for all skin types.</p>
                </div>
              </div>
              <div class="ingredient-item" onclick="window.location.hash='#/ingredient/chamomile'" style="cursor: pointer;">
                <span class="ingredient-dot"></span>
                <div>
                  <strong>Chamomile Extract</strong>
                  <p>Calming anti-inflammatory for sensitive skin. Soothes irritation and promotes healing for compromised or reactive skin.</p>
                </div>
              </div>
              <div class="ingredient-item" onclick="window.location.hash='#/ingredient/hyaluronic'" style="cursor: pointer;">
                <span class="ingredient-dot"></span>
                <div>
                  <strong>Hyaluronic Acid</strong>
                  <p>Plant-derived, holds 1000x its weight in water. Provides intense hydration and plumps the skin for a youthful appearance.</p>
                </div>
              </div>
              <div class="ingredient-item" onclick="window.location.hash='#/ingredient/argan'" style="cursor: pointer;">
                <span class="ingredient-dot"></span>
                <div>
                  <strong>Argan Oil</strong>
                  <p>Rich in antioxidants and essential fatty acids. Nourishes and protects skin while maintaining its natural balance.</p>
                </div>
              </div>
              <div class="ingredient-item" onclick="window.location.hash='#/ingredient/vitamin-e'" style="cursor: pointer;">
                <span class="ingredient-dot"></span>
                <div>
                  <strong>Vitamin E</strong>
                  <p>Powerful antioxidant protection against environmental damage. Prevents premature aging and supports skin repair.</p>
                </div>
              </div>
              <div class="ingredient-item" onclick="window.location.hash='#/ingredient/aloe'" style="cursor: pointer;">
                <span class="ingredient-dot"></span>
                <div>
                  <strong>Aloe Vera</strong>
                  <p>Soothing and hydrating. Reduces inflammation and promotes healing for sensitive or irritated skin.</p>
                </div>
              </div>
            </div>

            <div class="ingredient-commitment">
              <h3>Our Commitment</h3>
              <p>We believe in transparency. Every ingredient in our products serves a purpose, and we never include fillers or unnecessary additives. All our botanical ingredients are organic, sustainably sourced, and ethically harvested from trusted suppliers around the world.</p>
            </div>
          </div>
          <div class="ingredients-visual">
            <div class="ingredients-image-placeholder" style="padding: 0; overflow: hidden;">
              <img src="fruit-and-cream.jpg" alt="Fresh fruits and cream ingredients" style="width: 100%; height: 100%; object-fit: cover; border-radius: inherit;">
              <span>Ethically Sourced</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <h3 class="logo">BO Organics</h3>
            <p>Pure, Intentional Beauty. Handcrafted organic skincare made with love and the finest botanicals.</p>
          </div>
          <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#/shop">Shop All</a></li>
              <li><a href="#/about">Our Story</a></li>
              <li><a href="#/ingredients">Ingredients</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Contact</h4>
            <ul>
              <li>hello@boorganics.com</li>
              <li>(555) 123-4567</li>
              <li>Mon - Fri, 9am - 5pm</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 BO Organics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}

// JOIN BO PAGE
function getJoinBoPage() {
  return `
    <section class="joinbo-page">
      <div class="container">
        <div class="joinbo-header">
          <p class="section-label center">Join The Movement</p>
          <h1 class="section-title center">The BO Experience</h1>
          <p class="section-description center">A clean beauty brand powered by community. Discover better products, connect through shared values, and grow something you believe in.</p>
        </div>

        <div class="experience-grid">
          <div class="experience-card">
            <div class="experience-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="8" width="18" height="13" rx="2"/>
                <path d="M12 8V3"/><path d="M8 3h8"/><path d="M8 3l4 5 4-5"/>
              </svg>
            </div>
            <h3 class="experience-card-title">Subscription</h3>
            <p class="experience-card-pricing">FROM €25/MONTH</p>
            <p class="experience-card-desc">Receive curated organic makeup essentials delivered to your door every month. Exclusive drops, early access, and limited editions.</p>
            <ul class="experience-card-list">
              <li>Curated monthly box</li>
              <li>Exclusive products</li>
              <li>Early access to drops</li>
              <li>Limited editions</li>
            </ul>
            <a href="#" class="experience-btn" data-enrollment="subscription">SUBSCRIBE →</a>
          </div>

          <div class="experience-card popular">
            <div class="experience-popular-badge">POPULAR</div>
            <div class="experience-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
              </svg>
            </div>
            <h3 class="experience-card-title">Membership</h3>
            <p class="experience-card-pricing">€50/YEAR</p>
            <p class="experience-card-desc">Become part of the BO community. Unlock exclusive perks, rewards, and early access to everything we create.</p>
            <ul class="experience-card-list">
              <li>10–15% member discounts</li>
              <li>Early access to all products</li>
              <li>Community events & content</li>
              <li>Referral rewards</li>
            </ul>
            <a href="#" class="experience-btn filled" data-enrollment="membership">JOIN BO →</a>
          </div>

          <div class="experience-card">
            <div class="experience-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
              </svg>
            </div>
            <h3 class="experience-card-title">Share & Earn</h3>
            <p class="experience-card-pricing">GIVE €5, GET €5</p>
            <p class="experience-card-desc">Share your personal code with friends. They get €5 off their first order, you earn €5 in store credit. Grow the community together.</p>
            <ul class="experience-card-list">
              <li>Personal referral code</li>
              <li>€5 credit per referral</li>
              <li>No limits on earnings</li>
              <li>Track your impact</li>
            </ul>
            <a href="#" class="experience-btn outline" data-enrollment="referral">GET YOUR CODE →</a>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="footer-brand">
          <h3 class="logo">BO Organics</h3>
          <p>Pure, Intentional Beauty. Handcrafted organic skincare made with love and the finest botanicals.</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 BO Organics. All rights reserved.</p>
      </div>
    </footer>
  `;
}

// LOGIN PAGE
function getLoginPage() {
  return `
    <div class="login-container">
      <div class="login-box">
        <div class="login-header">
          <h1>Welcome Back</h1>
          <p>Sign in to your BO Organics account</p>
        </div>

        <form id="loginForm">
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" required placeholder="you@example.com">
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required placeholder="••••••••">
          </div>

          <div class="remember-forgot">
            <label>
              <input type="checkbox" name="remember"> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" class="login-btn">SIGN IN</button>
        </form>

        <div class="signup-link">
          Don't have an account? <a href="#">Create one</a>
        </div>
      </div>
    </div>
  `;
}

// INGREDIENT DETAIL PAGE
function getIngredientDetailPage(ingredientId) {
  const ingredient = ingredientsDatabase[ingredientId];

  if (!ingredient) {
    return `
      <section class="ingredient-detail-page">
        <div class="container">
          <p>Ingredient not found</p>
          <a href="#/ingredients" class="btn btn-primary">Back to Ingredients</a>
        </div>
      </section>
    `;
  }

  return `
    <section class="ingredient-detail-page">
      <div class="container">
        <a href="#/ingredients" class="back-link">← Back to Ingredients</a>

        <div class="ingredient-detail-grid">
          <div class="ingredient-detail-image">
            <div class="ingredient-image-placeholder">
              <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #d4a574 0%, #8b6f47 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.2rem; text-align: center; padding: 20px;">
                ${ingredient.name}
              </div>
            </div>
          </div>

          <div class="ingredient-detail-content">
            <h1>${ingredient.name}</h1>
            <p class="ingredient-short-desc">${ingredient.description}</p>

            <div class="ingredient-detail-text">
              <p>${ingredient.fullDescription}</p>
            </div>

            <div class="ingredient-benefits">
              <h3>Key Benefits</h3>
              <ul>
                ${ingredient.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
              </ul>
            </div>

            <div class="ingredient-products">
              <h3>Found In</h3>
              <p>${ingredient.usedIn.join(', ')}</p>
            </div>

            <div class="ingredient-detail-cta">
              <a href="#/shop" class="btn btn-primary">Shop Products with ${ingredient.name}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <h3 class="logo">BO Organics</h3>
            <p>Pure, Intentional Beauty. Handcrafted organic skincare made with love and the finest botanicals.</p>
          </div>
          <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#/shop">Shop All</a></li>
              <li><a href="#/about">Our Story</a></li>
              <li><a href="#/ingredients">Ingredients</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Contact</h4>
            <ul>
              <li>hello@boorganics.com</li>
              <li>(555) 123-4567</li>
              <li>Mon - Fri, 9am - 5pm</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 BO Organics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}

// PRODUCT DETAIL PAGE
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

  let html = '<div class="product-detail-page"><div class="container"><a href="#/shop" class="back-link">← Back to Shop</a><div class="product-detail-container"><div class="product-detail-image"><div class="product-image-large"><div class="product-image-placeholder-large"><svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M7 21v-1a5 5 0 0110 0v1"/></svg></div></div></div><div class="product-detail-info"><h1 class="product-detail-title">' + product.name + '</h1><p class="product-detail-category">' + product.category + '</p><p class="product-detail-price">$' + product.price.toFixed(2) + '</p><div class="product-detail-description"><h3>Description</h3><p>' + product.description + '</p></div><div class="product-detail-benefits"><h3>Key Benefits</h3><ul>';
  
  product.benefits.forEach(b => {
    html += '<li>' + b + '</li>';
  });
  
  html += '</ul></div><div class="product-detail-usage"><h3>How to Use</h3><p>' + product.usage + '</p></div><div class="product-detail-ingredients"><h3>Ingredients</h3><p>' + product.ingredients + '</p></div><div class="product-detail-actions"><button class="btn btn-primary add-to-cart-detail" data-product-id="' + productId + '" data-name="' + product.name + '" data-price="' + product.price + '">Add to Cart</button></div></div></div></div></div>';
  
  return html;
}
