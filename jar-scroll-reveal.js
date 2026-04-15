/* ============================================
   BO Organics — Jar Opening Scroll Animation
   ============================================ */

class JarScrollReveal {
  constructor(options = {}) {
    this.container = options.container || null;
    this.closedImage = null;
    this.openImage = null;
    this.lidElement = null;
    this.scrollProgress = 0;

    // Animation tuning parameters (easily adjustable)
    this.maxLidRotation = options.maxLidRotation || 180; // degrees (rotates upward)
    this.maxLidTranslateY = options.maxLidTranslateY || -80; // pixels (moves up)
    this.glowIntensity = options.glowIntensity || 0.8; // 0-1

    // Scroll sensitivity
    this.startTrigger = options.startTrigger || 0.2; // when to start animation (0-1 viewport)
    this.endTrigger = options.endTrigger || 0.8; // when to end animation (0-1 viewport)

    this.init();
  }

  init() {
    if (!this.container) return;

    this.closedImage = this.container.querySelector('[data-jar-closed]');
    this.openImage = this.container.querySelector('[data-jar-open]');
    this.lidElement = this.container.querySelector('[data-jar-lid]');

    if (!this.closedImage || !this.openImage) {
      console.warn('JarScrollReveal: [data-jar-closed] or [data-jar-open] element not found');
      return;
    }

    this.setupIntersectionObserver();
    this.setupScrollListener();

    // Handle reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.disableAnimation();
    }
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.containerInView = true;
          } else {
            this.containerInView = false;
          }
        });
      },
      { threshold: [0.2, 0.5, 0.8] }
    );

    observer.observe(this.container);
  }

  setupScrollListener() {
    window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
    window.addEventListener('resize', () => this.handleResize(), { passive: true });
  }

  handleScroll() {
    if (!this.containerInView) return;

    const rect = this.container.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const containerTop = rect.top;

    // Calculate scroll progress within the visible region
    let progress = 1 - (containerTop / viewportHeight);
    progress = Math.max(0, Math.min(1, progress));

    this.scrollProgress = progress;
    this.updateJarAnimation(progress);
  }

  handleResize() {
    // Trigger recalculation on resize
    this.handleScroll();
  }

  updateJarAnimation(progress) {
    // Clamp progress to animation window
    const animationProgress = Math.max(0, Math.min(1,
      (progress - this.startTrigger) / (this.endTrigger - this.startTrigger)
    ));

    // Crossfade from closed to open image
    this.closedImage.style.opacity = 1 - animationProgress;
    this.openImage.style.opacity = animationProgress;

    // Lid rotation upward (around Z-axis): 0° to maxLidRotation°
    const lidRotation = this.maxLidRotation * animationProgress;

    // Lid vertical movement: moves up as it rotates
    const lidTranslateY = this.maxLidTranslateY * animationProgress;

    // Inner glow opacity (fade in as jar opens)
    const glowOpacity = Math.pow(animationProgress, 0.5) * this.glowIntensity;

    // Apply transforms to lid
    if (this.lidElement) {
      this.lidElement.style.transform = `
        perspective(1200px)
        rotateZ(${lidRotation}deg)
        translateY(${lidTranslateY}px)
      `;
      this.lidElement.style.opacity = animationProgress;
    }

    // Update inner glow
    const innerGlow = this.container.querySelector('[data-jar-glow]');
    if (innerGlow) {
      innerGlow.style.opacity = glowOpacity;
    }
  }

  disableAnimation() {
    this.closedImage.style.opacity = 0;
    this.openImage.style.opacity = 1;
    if (this.lidElement) {
      this.lidElement.style.transform = `perspective(1200px) rotateZ(${this.maxLidRotation}deg) translateY(${this.maxLidTranslateY}px)`;
      this.lidElement.style.opacity = 1;
    }
    console.log('JarScrollReveal: Animation disabled due to prefers-reduced-motion');
  }

  // Public methods for external control
  setMaxLidRotation(degrees) {
    this.maxLidRotation = degrees;
    this.handleScroll();
  }

  setMaxLidTranslateY(pixels) {
    this.maxLidTranslateY = pixels;
    this.handleScroll();
  }

  setScrollSensitivity(start, end) {
    this.startTrigger = start;
    this.endTrigger = end;
    this.handleScroll();
  }
}

// Auto-initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  const jarContainers = document.querySelectorAll('[data-jar-scroll]');
  jarContainers.forEach((container) => {
    new JarScrollReveal({ container });
  });
});

// Export for manual initialization
window.JarScrollReveal = JarScrollReveal;
