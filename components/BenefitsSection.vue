<template>
  <section class="py-24 bg-plaid-background">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-20">
        <h2 class="text-3xl sm:text-4xl font-semibold text-plaid-text-primary mb-6">
          Access African Retail Data <span class="text-plaid-accent">10x Faster</span>
        </h2>
        <p class="max-w-3xl mx-auto text-xl text-plaid-text-secondary">
          Transform inaccessible African retail data into valuable business insights. What was previously locked away 
          becomes accessible through our unified API, accelerating innovation across the retail ecosystem.
        </p>
      </div>
      
      <!-- Benefits Grid - Plaid-style cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        <div class="bg-white rounded-xl border border-plaid-border p-6 shadow-plaid hover:shadow-plaid-lg transition-all duration-300 hover-lift stagger-item">
          <div class="w-12 h-12 bg-plaid-accent/10 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 hover:bg-plaid-accent/20 hover:scale-110">
            <svg class="w-6 h-6 text-plaid-accent transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-plaid-text-primary mb-3 transition-colors duration-300 hover:text-plaid-accent">Access data instantly</h3>
          <p class="text-plaid-text-secondary text-sm leading-relaxed mb-4 transition-colors duration-300">
            5-minute access to data vs months of custom integrations. Get insights while competitors struggle with closed systems.
          </p>
          <div class="text-2xl font-bold text-plaid-accent">10x</div>
          <div class="text-xs text-plaid-text-muted">Faster data access</div>
        </div>
        
        <div class="bg-white rounded-xl border border-plaid-border p-6 shadow-plaid hover:shadow-plaid-lg transition-shadow duration-200">
          <div class="w-12 h-12 bg-plaid-success/10 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-plaid-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-plaid-text-primary mb-3">Reduce costs</h3>
          <p class="text-plaid-text-secondary text-sm leading-relaxed mb-4">
            Skip hiring data extraction specialists. One API connects to all retail platforms with no custom work.
          </p>
          <div class="text-2xl font-bold text-plaid-success">$250K+</div>
          <div class="text-xs text-plaid-text-muted">Engineering savings/year</div>
        </div>
        
        <div class="bg-white rounded-xl border border-gray-200 p-6 shadow-stripe hover:shadow-stripe-md transition-shadow duration-200">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-3">Connect new opportunities</h3>
          <p class="text-gray-600 text-sm leading-relaxed mb-4">
            Access previously inaccessible data from 20+ platforms. Scale insights from 1 to 1000+ merchants seamlessly.
          </p>
          <div class="text-2xl font-bold text-purple-600">20+</div>
          <div class="text-xs text-gray-500">Data sources connected</div>
        </div>
        
        <div class="bg-white rounded-xl border border-gray-200 p-6 shadow-stripe hover:shadow-stripe-md transition-shadow duration-200">
          <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-3">Rich, clean data</h3>
          <p class="text-gray-600 text-sm leading-relaxed mb-4">
            Consistent, normalized data from closed systems. No more struggling with inaccessible or incomplete information.
          </p>
          <div class="text-2xl font-bold text-orange-600">99.9%</div>
          <div class="text-xs text-gray-500">Data accuracy</div>
        </div>
      </div>
      
      <!-- Detailed Features - Stripe style -->
      <div class="bg-white rounded-2xl border border-gray-200 shadow-stripe-lg p-8 lg:p-12">
        <h3 class="text-2xl font-semibold text-gray-900 text-center mb-12">
          Everything you need to access retail data
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="ml-4">
                <h4 class="font-semibold text-gray-900 mb-1">Unified sales data</h4>
                <p class="text-gray-600 text-sm">Transactions, orders, refunds, and payments from all platforms in one format.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="ml-4">
                <h4 class="font-semibold text-gray-900 mb-1">Real-time inventory</h4>
                <p class="text-gray-600 text-sm">Stock levels, product catalogs, and inventory movements as they happen.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="ml-4">
                <h4 class="font-semibold text-gray-900 mb-1">Customer profiles</h4>
                <p class="text-gray-600 text-sm">Purchase history, preferences, and contact info across all touchpoints.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="ml-4">
                <h4 class="font-semibold text-gray-900 mb-1">Order management</h4>
                <p class="text-gray-600 text-sm">Fulfillment status, shipping details, and order lifecycle tracking.</p>
              </div>
            </div>
          </div>
          
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="ml-4">
                <h4 class="font-semibold text-gray-900 mb-1">Developer experience</h4>
                <p class="text-gray-600 text-sm">RESTful APIs, webhooks, SDKs, and comprehensive documentation.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="ml-4">
                <h4 class="font-semibold text-gray-900 mb-1">Enterprise security</h4>
                <p class="text-gray-600 text-sm">SOC 2, encryption at rest and in transit, OAuth 2.0 compliance.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="ml-4">
                <h4 class="font-semibold text-gray-900 mb-1">99.9% uptime</h4>
                <p class="text-gray-600 text-sm">Production-ready infrastructure with automatic failover and monitoring.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="ml-4">
                <h4 class="font-semibold text-gray-900 mb-1">24/7 support</h4>
                <p class="text-gray-600 text-sm">Developer support via Slack, email, and video calls when you need it.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Stripe-inspired benefits section
</script>