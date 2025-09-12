// Transition utility functions and presets
export const transitionPresets = {
  // Fade transitions
  fadeIn: 'transition-opacity duration-300 ease-in-out',
  fadeInSlow: 'transition-opacity duration-500 ease-in-out',
  fadeInFast: 'transition-opacity duration-150 ease-in-out',
  
  // Scale transitions
  scaleOnHover: 'transition-transform duration-300 ease-out hover:scale-105',
  scaleButton: 'transition-all duration-300 transform hover:scale-105 active:scale-95',
  
  // Color transitions
  colorHover: 'transition-colors duration-300 ease-in-out',
  colorFast: 'transition-colors duration-200 ease-in-out',
  
  // Comprehensive transitions
  allSmooth: 'transition-all duration-300 ease-in-out',
  allFast: 'transition-all duration-200 ease-in-out',
  allSlow: 'transition-all duration-500 ease-in-out',
  
  // Shadow transitions
  shadowLift: 'transition-shadow duration-300 ease-out hover:shadow-lg',
  shadowStripe: 'transition-shadow duration-300 ease-out hover:shadow-stripe',
  
  // Movement transitions
  slideUp: 'transform transition-transform duration-500 ease-out translate-y-4 opacity-0',
  slideDown: 'transform transition-transform duration-500 ease-out -translate-y-4 opacity-0',
  slideLeft: 'transform transition-transform duration-500 ease-out translate-x-4 opacity-0',
  slideRight: 'transform transition-transform duration-500 ease-out -translate-x-4 opacity-0',
}

// Animation utility functions
export const animationUtils = {
  // Stagger animation delays
  getStaggerDelay: (index) => `${index * 100}ms`,
  
  // Intersection Observer for scroll animations
  createScrollObserver: (callback, options = {}) => {
    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    }
    
    return new IntersectionObserver(callback, defaultOptions)
  },
  
  // Animate elements on scroll
  animateOnScroll: (selector, animationClass = 'animate-in') => {
    if (process.client) {
      const elements = document.querySelectorAll(selector)
      
      const observer = animationUtils.createScrollObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass)
          }
        })
      })
      
      elements.forEach((el) => observer.observe(el))
      
      return observer
    }
  },
  
  // Stagger animation for child elements
  staggerChildren: (parent, delay = 100) => {
    if (process.client) {
      const children = parent.querySelectorAll('.stagger-item')
      children.forEach((child, index) => {
        setTimeout(() => {
          child.style.opacity = '1'
          child.style.transform = 'translateY(0)'
        }, index * delay)
      })
    }
  }
}

// CSS class helpers for common animations
export const animationClasses = {
  // Entry animations
  fadeInUp: 'animate-fade-in-up',
  fadeInDown: 'animate-fade-in-down',
  fadeInLeft: 'animate-fade-in-left',
  fadeInRight: 'animate-fade-in-right',
  
  // Hover effects
  lift: 'hover-lift',
  bounce: 'hover:animate-bounce',
  pulse: 'hover:animate-pulse',
  
  // Loading states
  shimmer: 'animate-shimmer',
  spin: 'animate-spin',
  ping: 'animate-ping',
  
  // Custom effects
  buttonShine: 'btn-hover',
  cardFloat: 'hover-lift transition-all duration-300',
  navUnderline: 'relative group transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full'
}

export default {
  transitionPresets,
  animationUtils,
  animationClasses
}