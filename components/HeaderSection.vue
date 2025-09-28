<template>
  <header class="bg-white sticky top-0 z-50 border-b border-primary-100 transition-all duration-300 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-3 hover-lift">
            <div class="w-32 h-12 flex items-center justify-center">
              <img 
                src="~/assets/images/logo.png" 
                alt="Metristack Logo" 
                class="w-full h-full object-contain"
              />
            </div>
          </NuxtLink>
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8">
          <a href="#how-it-works" class="text-text-muted hover:text-accent-blue font-medium transition-all duration-300 hover:scale-105 relative group">
            How it works
            <span class="absolute inset-x-0 bottom-0 h-0.5 bg-accent-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a href="#pricing" class="text-text-muted hover:text-accent-orange font-medium transition-all duration-300 hover:scale-105 relative group">
            Pricing
            <span class="absolute inset-x-0 bottom-0 h-0.5 bg-accent-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <NuxtLink to="/about" class="text-text-muted hover:text-accent-green font-medium transition-all duration-300 hover:scale-105 relative group">
            About
            <span class="absolute inset-x-0 bottom-0 h-0.5 bg-accent-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </NuxtLink>
          <a href="#" class="text-text-muted hover:text-accent-purple font-medium transition-all duration-300 hover:scale-105 relative group">
            Documentation
            <span class="absolute inset-x-0 bottom-0 h-0.5 bg-accent-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a href="#" class="text-text-muted hover:text-accent-pink font-medium transition-all duration-300 hover:scale-105 relative group">
            Support
            <span class="absolute inset-x-0 bottom-0 h-0.5 bg-accent-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <NuxtLink to="/contact" class="text-text-muted hover:text-primary-500 font-medium transition-all duration-300 hover:scale-105 relative group">
            Contact
            <span class="absolute inset-x-0 bottom-0 h-0.5 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </NuxtLink>
          
          <!-- Divider -->
          <div class="w-px h-6 bg-primary-300 transition-all duration-300"></div>

          <!-- Auth Links -->
          <a href="#" class="text-text-muted hover:text-primary-500 font-medium transition-all duration-300 hover:scale-105">
            Sign in
          </a>
          <button class="bg-flutterwave-teal hover:bg-primary-800 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-sm hover:shadow btn-hover hover:scale-105 transform active:scale-95">
            Start free trial
          </button>
        </nav>
        
        <!-- Mobile Menu Button -->
        <div class="lg:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-text-muted hover:text-primary-500 p-2 transition-all duration-300 hover:scale-110 hover:bg-background-secondary rounded-lg">
            <svg class="w-6 h-6 transition-transform duration-300" :class="{ 'rotate-90': mobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      <Transition name="mobile-menu">
        <div v-show="mobileMenuOpen" class="lg:hidden border-t border-primary-200 py-4">
          <div class="space-y-4">
            <a href="#how-it-works" class="block text-text-muted hover:text-primary-500 font-medium py-2 transition-all duration-300 hover:pl-2 stagger-item">
              How it works
            </a>
            <a href="#pricing" class="block text-text-muted hover:text-primary-500 font-medium py-2 transition-all duration-300 hover:pl-2 stagger-item">
              Pricing
            </a>
            <NuxtLink to="/about" class="block text-text-muted hover:text-primary-500 font-medium py-2 transition-all duration-300 hover:pl-2 stagger-item">
              About
            </NuxtLink>
            <a href="#" class="block text-text-muted hover:text-primary-500 font-medium py-2 transition-all duration-300 hover:pl-2 stagger-item">
              Documentation
            </a>
            <a href="#" class="block text-text-muted hover:text-primary-500 font-medium py-2 transition-all duration-300 hover:pl-2 stagger-item">
              Support
            </a>
            <NuxtLink to="/contact" class="block text-text-muted hover:text-primary-500 font-medium py-2 transition-all duration-300 hover:pl-2 stagger-item">
              Contact
            </NuxtLink>

          <!-- Mobile Auth -->
          <div class="pt-4 border-t border-primary-200 space-y-3">
            <a href="#" class="block text-text-muted hover:text-primary-500 font-medium py-2 transition-all duration-300 hover:pl-2 stagger-item">
              Sign in
            </a>
            <button class="w-full bg-primary-500 hover:bg-primary-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-sm hover:shadow btn-hover transform hover:scale-105 active:scale-95 stagger-item">
              Start free trial
            </button>
          </div>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

// Close mobile menu when clicking outside or on links
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>