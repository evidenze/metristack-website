<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-20">
        <h2 class="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
          The infrastructure layer. <span class="text-primary-500">For all African retail data.</span>
        </h2>
                <p class="text-lg text-plaid-text-muted leading-relaxed max-w-3xl mx-auto mb-8">
          Metristack is the unified API that connects you to African retail platforms. Our data layer provides standardized access to transaction data 
          from e-commerce sites, POS systems, and merchant platforms across Africa. 
          One integration unlocks the entire ecosystem.
        </p>
      </div>
      
      <!-- Before vs After - Stripe card style -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        <!-- Before: Data Inaccessible -->
        <div class="bg-white rounded-xl border border-gray-200 p-8 shadow-stripe">
          <div class="flex items-center mb-6">
            <div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
              <svg class="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900">Without Metristack</h3>
          </div>
          <div class="space-y-4">
            <div class="flex items-center">
              <div class="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3">
                <svg class="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <span class="text-gray-700">Data locked in closed systems</span>
            </div>
            <div class="flex items-center">
              <div class="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3">
                <svg class="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <span class="text-gray-700">No way to access valuable insights</span>
            </div>
            <div class="flex items-center">
              <div class="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3">
                <svg class="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <span class="text-gray-700">Rich data sitting unused</span>
            </div>
            <div class="flex items-center">
              <div class="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3">
                <svg class="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <span class="text-gray-700">Massive untapped opportunity</span>
            </div>
          </div>
        </div>
        
        <!-- After: Data Accessible -->
        <div class="bg-white rounded-xl border-2 border-primary-200 p-8 shadow-stripe-md">
          <div class="flex items-center mb-6">
            <div class="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
              <svg class="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900">With Metristack</h3>
          </div>
          <div class="space-y-4">
            <div class="flex items-center">
              <div class="w-5 h-5 rounded-full bg-success-100 flex items-center justify-center mr-3">
                <svg class="w-3 h-3 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <span class="text-gray-700">Instant access to all platform data</span>
            </div>
            <div class="flex items-center">
              <div class="w-5 h-5 rounded-full bg-success-100 flex items-center justify-center mr-3">
                <svg class="w-3 h-3 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <span class="text-gray-700">Unified API connects everything</span>
            </div>
            <div class="flex items-center">
              <div class="w-5 h-5 rounded-full bg-success-100 flex items-center justify-center mr-3">
                <svg class="w-3 h-3 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <span class="text-gray-700">Rich insights now accessible</span>
            </div>
            <div class="flex items-center">
              <div class="w-5 h-5 rounded-full bg-success-100 flex items-center justify-center mr-3">
                <svg class="w-3 h-3 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <span class="text-gray-700">5-minute integration</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Supported Platforms - Stripe style -->
      <div class="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-20">
                <div class="text-center mb-4">
          <p class="text-plaid-text-muted font-medium">The unified API that connects everything</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div class="bg-white rounded-lg p-4 shadow-stripe-sm text-center hover:shadow-stripe transition-shadow duration-200">
            <div class="font-semibold text-gray-900 text-sm mb-1">Shopify</div>
            <div class="text-xs text-gray-500">E-commerce</div>
          </div>
          <div class="bg-white rounded-lg p-4 shadow-stripe-sm text-center hover:shadow-stripe transition-shadow duration-200">
            <div class="font-semibold text-gray-900 text-sm mb-1">Square</div>
            <div class="text-xs text-gray-500">POS</div>
          </div>
          <div class="bg-white rounded-lg p-4 shadow-stripe-sm text-center hover:shadow-stripe transition-shadow duration-200">
            <div class="font-semibold text-gray-900 text-sm mb-1">Clover</div>
            <div class="text-xs text-gray-500">POS</div>
          </div>
          <div class="bg-white rounded-lg p-4 shadow-stripe-sm text-center hover:shadow-stripe transition-shadow duration-200">
            <div class="font-semibold text-gray-900 text-sm mb-1">WooCommerce</div>
            <div class="text-xs text-gray-500">E-commerce</div>
          </div>
          <div class="bg-white rounded-lg p-4 shadow-stripe-sm text-center hover:shadow-stripe transition-shadow duration-200">
            <div class="font-semibold text-gray-900 text-sm mb-1">Lightspeed</div>
            <div class="text-xs text-gray-500">POS</div>
          </div>
          <div class="bg-white rounded-lg p-4 shadow-stripe-sm text-center hover:shadow-stripe transition-shadow duration-200">
            <div class="font-semibold text-gray-900 text-sm mb-1">Amazon</div>
            <div class="text-xs text-gray-500">Marketplace</div>
          </div>
        </div>
        <div class="text-center mt-8">
          <span class="text-primary-600 font-semibold">+ 14 more platforms</span>
          <span class="text-gray-500 ml-2">with new ones added monthly</span>
        </div>
      </div>
      
      <!-- Key Solution Features - Stripe style -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6">
            <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Real-time sync</h3>
          <p class="text-gray-600 leading-relaxed">
            Get live updates from all connected stores. No more batch ETL or stale data.
          </p>
        </div>
        
        <div class="text-center">
          <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6">
            <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Enterprise security</h3>
          <p class="text-gray-600 leading-relaxed">
            OAuth 2.0, encrypted data, SOC 2 compliance. Your merchants' data stays protected.
          </p>
        </div>
        
        <div class="text-center">
          <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6">
            <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Smart normalization</h3>
          <p class="text-gray-600 leading-relaxed">
            AI-powered data mapping ensures consistent field names and formats across platforms.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Stripe-inspired solution section
</script>