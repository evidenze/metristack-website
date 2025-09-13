<template>
  <section class="relative bg-white overflow-hidden">
    <!-- Plaid-style gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 transition-all duration-1000"></div>
    <div class="absolute inset-0 bg-plaid-glow opacity-30"></div>
    
    <!-- Main content -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-32 lg:pt-32 lg:pb-40">
      <div class="text-center">
        
        <!-- Trust badge - Plaid style -->
        <div class="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-8 transition-all duration-500 hover:bg-primary-200 hover:scale-105 stagger-item">
          <svg class="w-4 h-4 mr-2 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          Trusted by 500+ fintech & B2B companies
        </div>
        
        <!-- Main headline - Solution focused -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight mb-6 stagger-item">
          Build breakthrough products.
          <span class="text-primary-500 transition-colors duration-500 hover:text-primary-600">Powered by African retail data.</span>
        </h1>
        
        <!-- Subheadline - Solution outcomes -->
        <p class="text-lg text-plaid-text-muted leading-relaxed max-w-2xl mx-auto mb-8">
          Metristack connects you to sales, inventory, and customer data 
          from 20+ African retail platforms. One integration unlocks unlimited possibilities.
        </p>
        
        <!-- CTA buttons - Plaid focused -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 stagger-item">
          <button class="group relative w-full sm:w-auto bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-plaid hover:shadow-plaid-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 btn-hover transform hover:scale-105 active:scale-95">
            Get API Keys Free
            <svg class="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
          <button class="group relative w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-gray-200 shadow-plaid-sm hover:shadow-plaid focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 hover-lift">
            View Documentation
          </button>
        </div>
        
        <!-- Trust indicators - B2B focused -->
        <div class="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-500 mb-16 stagger-item">
          <div class="flex items-center transition-all duration-300 hover:text-success-600">
            <svg class="w-4 h-4 mr-2 text-success-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Free to get started</span>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 mr-2 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <span>Connect previously disconnected platforms</span>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 mr-2 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Access new data sources</span>
          </div>
        </div>
      </div>
      
            <!-- Code example - Plaid style with elegant card -->
      <div class="max-w-4xl mx-auto stagger-item">
        <div class="bg-white rounded-2xl border border-gray-200 shadow-plaid-lg overflow-hidden hover-lift transition-all duration-500">
          <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div class="flex items-center space-x-2">
              <div class="w-3 h-3 bg-red-400 rounded-full transition-all duration-300 hover:scale-125"></div>
              <div class="w-3 h-3 bg-yellow-400 rounded-full transition-all duration-300 hover:scale-125"></div>
              <div class="w-3 h-3 bg-green-400 rounded-full transition-all duration-300 hover:scale-125"></div>
              <div class="ml-4 text-sm text-gray-600 font-medium">Terminal</div>
            </div>
          </div>
          <div class="p-6 bg-gray-900 transition-all duration-300 hover:bg-gray-800">
            <pre class="text-sm text-gray-300 overflow-x-auto"><code><span class="text-green-400">$</span> curl -X GET "https://api.metristack.com/stores" \
  -H "Authorization: Bearer sk_live_..."

<span class="text-blue-300">{</span>
  <span class="text-yellow-300">"stores"</span>: [
    <span class="text-blue-300">{</span>
      <span class="text-yellow-300">"id"</span>: <span class="text-green-300">"store_123"</span>,
      <span class="text-yellow-300">"platform"</span>: <span class="text-green-300">"shopify"</span>,
      <span class="text-yellow-300">"name"</span>: <span class="text-green-300">"Demo Store"</span>,
      <span class="text-yellow-300">"status"</span>: <span class="text-green-300">"connected"</span>
    <span class="text-blue-300">}</span>
  ]
<span class="text-blue-300">}</span></code></pre>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup>
// Plaid-inspired hero section with conversion focus
</script>