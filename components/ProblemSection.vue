<template>
  <section class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-20">
        <h2 class="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
          Valuable retail data is 
          <span class="text-primary-500">locked in closed systems</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          While your competitors build for US markets with open APIs, you're stuck trying to access 
          African platforms where rich transaction data sits locked away with no way to extract it.
        </p>
      </div>
      
      <!-- Problem cards - Stripe card style -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div class="bg-white rounded-xl border border-gray-200 p-8 shadow-stripe hover:shadow-stripe-md transition-all duration-300 hover-lift stagger-item">
          <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 hover:bg-red-200 hover:scale-110">
            <svg class="w-6 h-6 text-red-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4 transition-colors duration-300 hover:text-red-600">Data Stuck in Systems</h3>
          <p class="text-gray-600 leading-relaxed transition-colors duration-300">
            African POS systems, e-commerce platforms, and payment providers store valuable data 
            but provide no way to access it programmatically.
          </p>
        </div>
        
        <div class="bg-white rounded-xl border border-gray-200 p-8 shadow-stripe hover:shadow-stripe-md transition-all duration-300 hover-lift stagger-item">
          <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 hover:bg-orange-200 hover:scale-110">
            <svg class="w-6 h-6 text-orange-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4 transition-colors duration-300 hover:text-orange-600">Closed Systems</h3>
          <p class="text-gray-600 leading-relaxed transition-colors duration-300">
            African retail systems were built for local use, not data sharing. 
            Rich transaction histories remain locked away with no extraction methods.
          </p>
        </div>
        
        <div class="bg-white rounded-xl border border-gray-200 p-8 shadow-stripe hover:shadow-stripe-md transition-all duration-300 hover-lift stagger-item">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 hover:bg-purple-200 hover:scale-110">
            <svg class="w-6 h-6 text-purple-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4 transition-colors duration-300 hover:text-purple-600">Inaccessible Data</h3>
          <p class="text-gray-600 leading-relaxed transition-colors duration-300">
            Millions of African merchants generate rich transaction data that could power 
            lending, analytics, and business tools—but it's completely inaccessible.
          </p>
        </div>
      </div>
      
      <!-- Cost illustration - Stripe style -->
      <div class="bg-white rounded-2xl border border-gray-200 shadow-stripe-lg p-8 lg:p-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">
              The opportunity cost of inaccessible data
            </h3>
            <div class="space-y-6">
              <div class="flex items-center justify-between py-4 border-b border-gray-100">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                    </svg>
                  </div>
                  <span class="text-gray-700">Lost lending opportunities</span>
                </div>
                <span class="text-xl font-semibold text-gray-900">Unlimited</span>
              </div>
              <div class="flex items-center justify-between py-4 border-b border-gray-100">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  </div>
                  <span class="text-gray-700">Unbuilt analytics products</span>
                </div>
                <span class="text-xl font-semibold text-gray-900">Countless</span>
              </div>
              <div class="flex items-center justify-between py-4">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <span class="text-gray-700">Underserved African merchants</span>
                </div>
                <span class="text-xl font-semibold text-gray-900">Millions</span>
              </div>
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 text-center">
            <div class="text-4xl font-bold text-primary-600 mb-2">Locked Away</div>
            <div class="text-lg text-primary-800 mb-4">Valuable African retail data</div>
            <div class="text-sm text-primary-700">
              Rich transaction data sits in systems across Africa 
              with no way to access it.
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