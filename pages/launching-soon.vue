<template>
  <div class="min-h-screen bg-black text-white relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0">
      <!-- Subtle geometric patterns -->
      <div class="absolute top-20 left-20 w-72 h-72 bg-white/5 rounded-full filter blur-3xl animate-pulse"></div>
      <div class="absolute top-60 right-20 w-96 h-96 bg-white/3 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      <div class="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-white/5 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      
      <!-- Grid Pattern -->
      <div class="absolute inset-0 bg-grid-white/5 bg-grid-16"></div>
    </div>
    
    <!-- Main Content -->
    <div class="relative z-10 flex items-center justify-center min-h-screen">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <!-- Logo -->
        <div class="flex items-center justify-center space-x-4 mb-8">
          <div class="w-32 h-32 flex items-center justify-center">
            <img 
              src="~/assets/images/logo.png" 
              alt="Metristack Logo" 
              class="w-full h-full object-contain"
            />
          </div>
        </div>
        
        <!-- Status Badge -->
        <div class="inline-flex items-center bg-white/10 border border-white/30 text-white text-sm font-medium px-6 py-3 rounded-full mb-8 backdrop-blur-sm">
          <svg class="w-4 h-4 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
          </svg>
          Launching Soon
        </div>
        
        <!-- Main Heading -->
        <h2 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span class="text-white">
            The infrastructure layer
          </span>
          <br>
          <span class="text-gray-300">
            for African retail data
          </span>
        </h2>
        
        <!-- Subtitle -->
        <p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
        Seamless access to Africa’s fragmented retail data through a single, unified API.
          <br class="hidden md:block">
        </p>
        
        <!-- Key Features -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <div class="w-12 h-12 bg-white border border-gray-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-white">5 Minutes Setup</h3>
            <p class="text-gray-400 text-sm">From signup to first API call in under 5 minutes</p>
          </div>
          
          <div class="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <div class="w-12 h-12 bg-white border border-gray-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-white">20+ Platforms</h3>
            <p class="text-gray-400 text-sm">Shopify, Square, WooCommerce, and every major platform</p>
          </div>
          
          <div class="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <div class="w-12 h-12 bg-white border border-gray-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-white">Real-Time Data</h3>
            <p class="text-gray-400 text-sm">Sales, inventory, customers - all synced instantly</p>
          </div>
        </div>
    
        
        <!-- Use Cases Preview -->
        <div class="mb-12">
          <h3 class="text-2xl font-semibold mb-8 text-white">Powering the Next Generation of Commerce</h3>
          <div class="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-2xl mx-auto">
            <div class="text-center">
              <div class="w-12 h-12 bg-white/10 border border-white/30 rounded-xl flex items-center justify-center mx-auto mb-2">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                </svg>
              </div>
              <p class="text-xs text-gray-400">Fintech</p>
            </div>
            
            <div class="text-center">
              <div class="w-12 h-12 bg-white/10 border border-white/30 rounded-xl flex items-center justify-center mx-auto mb-2">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <p class="text-xs text-gray-400">Marketing</p>
            </div>
            
            <div class="text-center">
              <div class="w-12 h-12 bg-white/10 border border-white/30 rounded-xl flex items-center justify-center mx-auto mb-2">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 21V9l-1-1v10l-1-1"/>
                </svg>
              </div>
              <p class="text-xs text-gray-400">Inventory</p>
            </div>
            
            <div class="text-center">
              <div class="w-12 h-12 bg-white/10 border border-white/30 rounded-xl flex items-center justify-center mx-auto mb-2">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <p class="text-xs text-gray-400">Analytics</p>
            </div>
            
            <div class="text-center">
              <div class="w-12 h-12 bg-white/10 border border-white/30 rounded-xl flex items-center justify-center mx-auto mb-2">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <p class="text-xs text-gray-400">CRM</p>
            </div>
          </div>
        </div>
        
        <!-- Social Links -->
        <div class="flex justify-center space-x-6">
          <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
            </svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
        
        <!-- Footer Note -->
        <div class="mt-16 pt-8 border-t border-gray-700">
          <p class="text-gray-500 text-sm">
            © 2025 Metristack. All rights reserved. | Transforming African Commerce
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO for launching soon page
useHead({
  title: 'Metristack - Launching Soon | The Future of Retail Data',
  meta: [
    { name: 'description', content: 'Metristack is launching soon! Join the waitlist for the unified API that connects to any commerce platform. Build powerful applications with real-time retail data.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Metristack - Launching Soon' },
    { property: 'og:description', content: 'Join the waitlist for the unified API that transforms retail data access across Africa.' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>

<style scoped>
/* Grid background pattern */
.bg-grid-white\/5 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
}

.bg-grid-16 {
  background-size: 16px 16px;
}

/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out;
}
</style>