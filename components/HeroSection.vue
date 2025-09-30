<template>
  <section class="relative bg-flutterwave-subtle overflow-hidden">
    <!-- Main content -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-32 lg:pt-32 lg:pb-40">
      <div class="text-center">
        
        <!-- Trust badge -->
        <div class="inline-flex items-center px-3 py-1 rounded-full bg-flutterwave-teal text-white text-sm font-medium mb-8 transition-all duration-500 hover:bg-accent-green hover:scale-105 stagger-item shadow-md">
          <svg class="w-4 h-4 mr-2 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          Trusted by 500+ fintech & B2B companies
        </div>
        
        <!-- Main headline -->
        <h1 class="font-mono text-4xl sm:text-5xl lg:text-6xl font-semibold text-text-primary tracking-tight mb-6 stagger-item">
          Build breakthrough products.
          <span class="text-accent-orange transition-colors duration-500 hover:text-accent-green">Powered by African retail data.</span>
        </h1>
        
        <!-- Subheadline -->
        <p class="text-lg text-text-muted leading-relaxed max-w-2xl mx-auto mb-8">
          Metristack connects you to sales, inventory, and customer data 
          from 20+ African retail platforms. One integration unlocks unlimited possibilities.
        </p>
        
        <!-- CTA buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 stagger-item">
          <button class="group relative w-full sm:w-auto bg-flutterwave-accent hover:bg-accent-green text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 btn-hover transform hover:scale-105 active:scale-95">
            Get API Keys Free
            <svg class="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
          <button class="group relative w-full sm:w-auto bg-white hover:bg-background-secondary text-text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-accent-blue shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 hover-lift">
            View Documentation
          </button>
        </div>
        
        <!-- Trust indicators -->
        <div class="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-text-muted mb-16 stagger-item">
          <div class="flex items-center transition-all duration-300 hover:text-accent-green">
            <svg class="w-4 h-4 mr-2 text-accent-green transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Free to get started</span>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 mr-2 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <span>Connect previously disconnected platforms</span>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 mr-2 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Access new data sources</span>
          </div>
        </div>
      </div>
      
            <!-- Code example - Flutterwave style with elegant card -->
      <div class="max-w-4xl mx-auto stagger-item">
        <div class="bg-white rounded-2xl border border-primary-200 shadow-lg overflow-hidden hover-lift transition-all duration-500">
          <div class="bg-background-secondary px-6 py-4 border-b border-primary-200">
            <div class="flex items-center space-x-2">
              <div class="w-3 h-3 bg-accent-red rounded-full transition-all duration-300 hover:scale-125"></div>
              <div class="w-3 h-3 bg-accent-orange rounded-full transition-all duration-300 hover:scale-125"></div>
              <div class="w-3 h-3 bg-accent-green rounded-full transition-all duration-300 hover:scale-125"></div>
              <div class="ml-4 text-sm text-text-muted font-medium">Terminal</div>
            </div>
          </div>
          <div class="p-6 bg-primary-800 transition-all duration-300 hover:bg-primary-900">
            <pre class="text-sm text-text-inverse overflow-x-auto"><code><span class="text-accent-green">$</span> curl -X GET "https://api.metristack.com/stores" \
  -H "Authorization: Bearer sk_live_..."

<span class="text-accent-blue">{</span>
  <span class="text-accent-orange">"stores"</span>: [
    <span class="text-accent-blue">{</span>
      <span class="text-accent-orange">"id"</span>: <span class="text-accent-green">"store_123"</span>,
      <span class="text-accent-orange">"platform"</span>: <span class="text-accent-green">"shopify"</span>,
      <span class="text-accent-orange">"name"</span>: <span class="text-accent-green">"Demo Store"</span>,
      <span class="text-accent-orange">"status"</span>: <span class="text-accent-green">"connected"</span>
    <span class="text-accent-blue">}</span>
  ]
<span class="text-accent-blue">}</span></code></pre>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup>
// Plaid-inspired hero section with conversion focus
</script>