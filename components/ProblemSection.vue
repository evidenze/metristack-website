<template>
  <section class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-20">
        <h2 class="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
          Building Retail Integrations 
          <span class="text-primary-500">Is Killing Your Timeline</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Every B2B company building for retail faces the same nightmare: months of integration work, 
          inconsistent APIs, and delayed product launches. Your competitors are already shipping.
        </p>
      </div>
      
      <!-- Problem cards - Stripe card style -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div class="bg-white rounded-xl border border-gray-200 p-8 shadow-stripe hover:shadow-stripe-md transition-all duration-300 hover-lift stagger-item">
          <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 hover:bg-red-200 hover:scale-110">
            <svg class="w-6 h-6 text-red-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4 transition-colors duration-300 hover:text-red-600">Complex Authentication</h3>
          <p class="text-gray-600 leading-relaxed transition-colors duration-300">
            Each retail platform has different OAuth flows, API keys, and authentication methods. 
            Your team wastes weeks figuring out each integration.
          </p>
        </div>
        
        <div class="bg-white rounded-xl border border-gray-200 p-8 shadow-stripe hover:shadow-stripe-md transition-all duration-300 hover-lift stagger-item">
          <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 hover:bg-orange-200 hover:scale-110">
            <svg class="w-6 h-6 text-orange-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4 transition-colors duration-300 hover:text-orange-600">Rate Limit Management</h3>
          <p class="text-gray-600 leading-relaxed transition-colors duration-300">
            Shopify has different rate limits than Square, Clover has different patterns than BigCommerce. 
            Your engineers spend months handling edge cases instead of building features.
          </p>
        </div>
        
        <div class="bg-white rounded-xl border border-gray-200 p-8 shadow-stripe hover:shadow-stripe-md transition-all duration-300 hover-lift stagger-item">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 hover:bg-purple-200 hover:scale-110">
            <svg class="w-6 h-6 text-purple-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4 transition-colors duration-300 hover:text-purple-600">Data Inconsistencies</h3>
          <p class="text-gray-600 leading-relaxed transition-colors duration-300">
            Products, orders, and customer data have different field names, formats, and structures 
            across platforms. Normalizing data becomes a full-time job.
          </p>
        </div>
      </div>
      
      <!-- Cost illustration - Stripe style -->
      <div class="bg-white rounded-2xl border border-gray-200 shadow-stripe-lg p-8 lg:p-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">
              The real cost of building integrations
            </h3>
            <div class="space-y-6">
              <div class="flex items-center justify-between py-4 border-b border-gray-100">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <span class="text-gray-700">Senior developer time</span>
                </div>
                <span class="text-xl font-semibold text-gray-900">$50,000+</span>
              </div>
              <div class="flex items-center justify-between py-4 border-b border-gray-100">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <span class="text-gray-700">Delayed time to market</span>
                </div>
                <span class="text-xl font-semibold text-gray-900">6+ months</span>
              </div>
              <div class="flex items-center justify-between py-4">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <span class="text-gray-700">Ongoing maintenance</span>
                </div>
                <span class="text-xl font-semibold text-gray-900">$20,000/year</span>
              </div>
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 text-center">
            <div class="text-4xl font-bold text-primary-600 mb-2">$200,000+</div>
            <div class="text-lg text-primary-800 mb-4">Total cost per integration</div>
            <div class="text-sm text-primary-700">
              And that's just for one platform. Most companies need 5-10 integrations.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Stripe-inspired problem section
</script>