<template>
  <header class="bg-white shadow-stripe sticky top-0 z-50 border-b border-gray-200 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex items-center">
          <a href="#" class="flex items-center space-x-3 hover-lift">
            <div class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center shadow-stripe-sm transition-all duration-300 hover:bg-primary-700 hover:scale-110">
              <span class="text-white font-bold text-lg">M</span>
            </div>
            <span class="text-2xl font-bold text-gray-900 transition-colors duration-300 hover:text-primary-600">Metristack</span>
          </a>
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8">
          <a href="#how-it-works" class="text-gray-600 hover:text-primary-600 font-medium transition-all duration-300 hover:scale-105 relative group">
            How it works
            <span class="absolute inset-x-0 bottom-0 h-0.5 bg-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a href="#pricing" class="text-gray-600 hover:text-primary-600 font-medium transition-all duration-300 hover:scale-105 relative group">
            Pricing
            <span class="absolute inset-x-0 bottom-0 h-0.5 bg-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a href="#" class="text-gray-600 hover:text-primary-600 font-medium transition-all duration-300 hover:scale-105 relative group">
            Documentation
            <span class="absolute inset-x-0 bottom-0 h-0.5 bg-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a href="#" class="text-gray-600 hover:text-primary-600 font-medium transition-all duration-300 hover:scale-105 relative group">
            Support
            <span class="absolute inset-x-0 bottom-0 h-0.5 bg-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          
          <!-- Divider -->
          <div class="w-px h-6 bg-gray-300 transition-all duration-300"></div>
          
          <!-- Auth Links -->
          <a href="#" class="text-gray-600 hover:text-primary-600 font-medium transition-all duration-300 hover:scale-105">
            Sign in
          </a>
          <button class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-stripe-sm hover:shadow-stripe btn-hover hover:scale-105 transform active:scale-95">
            Start free trial
          </button>
        </nav>
        
        <!-- Mobile Menu Button -->
        <div class="lg:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-600 hover:text-primary-600 p-2 transition-all duration-300 hover:scale-110 hover:bg-gray-50 rounded-lg">
            <svg class="w-6 h-6 transition-transform duration-300" :class="{ 'rotate-90': mobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      <Transition name="mobile-menu">
        <div v-show="mobileMenuOpen" class="lg:hidden border-t border-gray-200 py-4">
          <div class="space-y-4">
            <a href="#how-it-works" class="block text-gray-600 hover:text-primary-600 font-medium py-2 transition-all duration-300 hover:pl-2 stagger-item">
              How it works
            </a>
            <a href="#pricing" class="block text-gray-600 hover:text-primary-600 font-medium py-2 transition-all duration-300 hover:pl-2 stagger-item">
              Pricing
            </a>
            <a href="#" class="block text-gray-600 hover:text-primary-600 font-medium py-2 transition-all duration-300 hover:pl-2 stagger-item">
              Documentation
            </a>
            <a href="#" class="block text-gray-600 hover:text-primary-600 font-medium py-2 transition-all duration-300 hover:pl-2 stagger-item">
              Support
            </a>
          
          <!-- Mobile Auth -->
          <div class="pt-4 border-t border-gray-200 space-y-3">
            <a href="#" class="block text-gray-600 hover:text-primary-600 font-medium py-2 transition-all duration-300 hover:pl-2 stagger-item">
              Sign in
            </a>
            <button class="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-stripe-sm hover:shadow-stripe btn-hover transform hover:scale-105 active:scale-95 stagger-item">
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