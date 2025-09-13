<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
          Supported Platforms
        </h2>
        <p class="text-lg text-plaid-text-muted leading-relaxed max-w-3xl mx-auto mb-8">
          Connect to 20+ African retail platforms through one unified API. 
          From e-commerce stores to POS systems, marketplaces to payment processors - 
          access all your retail data in standardized format.
        </p>
      </div>
      
      <!-- Platform Categories -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <!-- E-commerce Platforms -->
        <div class="text-center">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">E-commerce Stores</h3>
          <p class="text-gray-600 mb-4">Online retail platforms and marketplaces</p>
          <div class="space-y-2 text-sm">
            <div class="bg-gray-50 rounded-lg px-4 py-2 font-medium text-gray-800">Shopify</div>
            <div class="bg-gray-50 rounded-lg px-4 py-2 font-medium text-gray-800">WooCommerce</div>
            <div class="bg-gray-50 rounded-lg px-4 py-2 font-medium text-gray-800">Magento</div>
            <div class="bg-gray-50 rounded-lg px-4 py-2 font-medium text-gray-800">BigCommerce</div>
          </div>
        </div>
        
        <!-- POS Systems -->
        <div class="text-center">
          <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">POS Systems</h3>
          <p class="text-gray-600 mb-4">Point of sale and retail management</p>
          <div class="space-y-2 text-sm">
            <div class="bg-gray-50 rounded-lg px-4 py-2 font-medium text-gray-800">Square</div>
            <div class="bg-gray-50 rounded-lg px-4 py-2 font-medium text-gray-800">Clover</div>
            <div class="bg-gray-50 rounded-lg px-4 py-2 font-medium text-gray-800">Lightspeed</div>
            <div class="bg-gray-50 rounded-lg px-4 py-2 font-medium text-gray-800">Toast POS</div>
          </div>
        </div>
        
        <!-- Marketplaces & Payment -->
        <div class="text-center">
          <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Marketplaces & Payments</h3>
          <p class="text-gray-600 mb-4">Online marketplaces and payment processors</p>
          <div class="space-y-2 text-sm">
            <div class="bg-gray-50 rounded-lg px-4 py-2 font-medium text-gray-800">Amazon</div>
            <div class="bg-gray-50 rounded-lg px-4 py-2 font-medium text-gray-800">Stripe</div>
            <div class="bg-gray-50 rounded-lg px-4 py-2 font-medium text-gray-800">PayPal</div>
            <div class="bg-gray-50 rounded-lg px-4 py-2 font-medium text-gray-800">Jumia</div>
          </div>
        </div>
      </div>
      
      <!-- All Platforms Grid -->
      <div class="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-12">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-semibold text-gray-900 mb-3">All Supported Platforms</h3>
          <p class="text-plaid-text-muted">One API integration connects you to all these platforms and more</p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          <!-- E-commerce -->
          <div class="bg-white rounded-lg p-4 shadow-stripe-sm text-center hover:shadow-stripe transition-all duration-200 hover:scale-105">
            <div class="font-semibold text-gray-900 text-sm mb-1">Shopify</div>
            <div class="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">E-commerce</div>
          </div>
          <div class="bg-white rounded-lg p-4 shadow-stripe-sm text-center hover:shadow-stripe transition-all duration-200 hover:scale-105">
            <div class="font-semibold text-gray-900 text-sm mb-1">WooCommerce</div>
            <div class="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">E-commerce</div>
          </div>
          <div class="bg-white rounded-lg p-4 shadow-stripe-sm text-center hover:shadow-stripe transition-all duration-200 hover:scale-105">
            <div class="font-semibold text-gray-900 text-sm mb-1">Magento</div>
            <div class="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">E-commerce</div>
          </div>
          <div class="bg-white rounded-lg p-4 shadow-stripe-sm text-center hover:shadow-stripe transition-all duration-200 hover:scale-105">
            <div class="font-semibold text-gray-900 text-sm mb-1">BigCommerce</div>
            <div class="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">E-commerce</div>
          </div>
          
          <!-- POS -->
          <div class="bg-white rounded-lg p-4 shadow-stripe-sm text-center hover:shadow-stripe transition-all duration-200 hover:scale-105">
            <div class="font-semibold text-gray-900 text-sm mb-1">Square</div>
            <div class="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">POS</div>
          </div>
          <div class="bg-white rounded-lg p-4 shadow-stripe-sm text-center hover:shadow-stripe transition-all duration-200 hover:scale-105">
            <div class="font-semibold text-gray-900 text-sm mb-1">Clover</div>
            <div class="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">POS</div>
          </div>
          <div class="bg-white rounded-lg p-4 shadow-stripe-sm text-center hover:shadow-stripe transition-all duration-200 hover:scale-105">
            <div class="font-semibold text-gray-900 text-sm mb-1">Lightspeed</div>
            <div class="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">POS</div>
          </div>
          <div class="bg-white rounded-lg p-4 shadow-stripe-sm text-center hover:shadow-stripe transition-all duration-200 hover:scale-105">
            <div class="font-semibold text-gray-900 text-sm mb-1">Toast POS</div>
            <div class="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">POS</div>
          </div>
          
          <!-- Marketplaces -->
          <div class="bg-white rounded-lg p-4 shadow-stripe-sm text-center hover:shadow-stripe transition-all duration-200 hover:scale-105">
            <div class="font-semibold text-gray-900 text-sm mb-1">Amazon</div>
            <div class="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded">Marketplace</div>
          </div>
          <div class="bg-white rounded-lg p-4 shadow-stripe-sm text-center hover:shadow-stripe transition-all duration-200 hover:scale-105">
            <div class="font-semibold text-gray-900 text-sm mb-1">Jumia</div>
            <div class="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded">Marketplace</div>
          </div>
          
          <!-- Payment -->
          <div class="bg-white rounded-lg p-4 shadow-stripe-sm text-center hover:shadow-stripe transition-all duration-200 hover:scale-105">
            <div class="font-semibold text-gray-900 text-sm mb-1">Stripe</div>
            <div class="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded">Payment</div>
          </div>
          <div class="bg-white rounded-lg p-4 shadow-stripe-sm text-center hover:shadow-stripe transition-all duration-200 hover:scale-105">
            <div class="font-semibold text-gray-900 text-sm mb-1">PayPal</div>
            <div class="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded">Payment</div>
          </div>
        </div>
        
        <div class="text-center">
          <div class="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-stripe-sm">
            <span class="text-primary-600 font-semibold mr-2">+ 8 more platforms</span>
            <span class="text-gray-500">with new integrations added monthly</span>
          </div>
        </div>
      </div>
      
      <!-- Integration Benefits -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-2">One Integration</h4>
          <p class="text-gray-600">Connect once to access all platforms. No need for multiple API integrations.</p>
        </div>
        
        <div class="text-center">
          <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-2">Standardized Data</h4>
          <p class="text-gray-600">All platform data normalized to consistent formats for easy processing.</p>
        </div>
        
        <div class="text-center">
          <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-2">Real-time Updates</h4>
          <p class="text-gray-600">Get live data updates across all platforms through webhooks and polling.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Supported platforms section showcasing all connected retail platforms
</script>