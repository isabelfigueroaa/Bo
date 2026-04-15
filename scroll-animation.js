/* ============================================
   BO Organics — Container Scroll Animation
   ============================================ */

class ContainerScrollAnimation {
  constructor(options = {}) {
    this.container = options.container || null;
    this.isMobile = window.innerWidth <= 768;
    this.scrollProgress = 0;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.handleScroll();
  }

  setupEventListeners() {
    window.addEventListener('scroll', () => this.handleScroll());
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 768;
    });
  }

  handleScroll() {
    if (!this.container) return;

    const rect = this.container.getBoundingClientRect();
    const containerTop = rect.top;
    const containerHeight = rect.height;
    const viewportHeight = window.innerHeight;

    // Calculate scroll progress (0 to 1)
    // Animation starts when container enters viewport, ends when it leaves
    let progress = 1 - (containerTop / (viewportHeight + containerHeight));
    progress = Math.max(0, Math.min(1, progress));

    this.scrollProgress = progress;
    this.updateAnimation(progress);
  }

  updateAnimation(progress) {
    const card = this.container.querySelector('[data-scroll-card]');
    if (!card) return;

    // Calculate transform values based on scroll progress
    const scale = this.isMobile
      ? 0.7 + (0.2 * progress)  // Mobile: 0.7 to 0.9
      : 1.05 - (0.05 * progress); // Desktop: 1.05 to 1.0

    const rotateX = 20 - (20 * progress); // 20deg to 0deg
    const translateY = -100 * progress; // 0 to -100px

    // Apply 3D perspective transform
    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      scale(${scale})
      translateY(${translateY}px)
    `;

    // Update opacity for smooth entrance
    card.style.opacity = Math.min(1, 0.7 + (0.3 * progress));
  }

  createContainerHTML(title, imageSrc, imageAlt = 'Product showcase') {
    const wrapper = document.createElement('div');
    wrapper.className = 'scroll-animation-wrapper';
    wrapper.innerHTML = `
      <div class="scroll-animation-container">
        <div class="scroll-animation-header">
          <h2>${title}</h2>
        </div>
        <div class="scroll-animation-card" data-scroll-card>
          <img src="${imageSrc}" alt="${imageAlt}" class="scroll-animation-image">
        </div>
      </div>
    `;
    return wrapper;
  }
}

// Auto-initialize all scroll animations on page load
document.addEventListener('DOMContentLoaded', () => {
  const animationContainers = document.querySelectorAll('[data-scroll-animation]');
  animationContainers.forEach(container => {
    new ContainerScrollAnimation({ container });
  });
});

// Export for manual initialization
window.ContainerScrollAnimation = ContainerScrollAnimation;
