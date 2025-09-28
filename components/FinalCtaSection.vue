<template>
  <section class="py-24 bg-flutterwave-navy">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Main CTA -->
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
          Ready to
          <span class="text-primary-500">Build Faster?</span>
        </h2>
        
        <p class="text-xl text-text-muted mb-12 leading-relaxed max-w-3xl mx-auto">
          Join companies building the next generation of retail technology. 
          Start with our unified API in minutes, not months.
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button class="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow hover:shadow-lg">
            Start Free Trial
          </button>
          <button class="bg-white hover:bg-background-secondary text-text-primary px-8 py-4 rounded-lg font-semibold text-lg border border-primary-300 transition-all duration-200 shadow hover:shadow-lg">
            Schedule Demo
          </button>
        </div>
        
        <!-- Trust Indicators -->
        <div class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-text-muted mb-16">
          <div class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>30-day free trial</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>No credit card required</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>5-minute setup</span>
          </div>
        </div>
        
        <!-- Developer Code Example -->
        <div class="bg-primary-700 rounded-xl p-8 max-w-3xl mx-auto mb-16 shadow-lg">
          <div class="text-left">
            <h3 class="text-xl font-semibold text-text-muted mb-6 text-center">One API call to connect everything</h3>
            <div class="bg-primary-900 rounded-lg p-6 text-sm overflow-x-auto border border-primary-600">
              <pre class="text-primary-500 font-mono leading-relaxed"><code>curl -X GET "https://api.metristack.com/stores" \
  -H "Authorization: Bearer YOUR_API_KEY"

{
  "stores": [
    {
      "id": "store_123",
      "platform": "shopify", 
      "name": "Demo Store",
      "status": "connected"
    }
  ]
}</code></pre>
            </div>
          </div>
        </div>
        
        <!-- Key Benefits Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="bg-primary-700 rounded-xl p-8 shadow hover:shadow-lg transition-all duration-300">
            <div class="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-sm">
              <span class="text-white font-bold text-2xl">10x</span>
            </div>
            <h4 class="text-white font-semibold text-lg mb-2">Faster Development</h4>
            <p class="text-text-muted leading-relaxed">Reduce integration time from months to minutes with our unified API</p>
          </div>
          <div class="bg-primary-700 rounded-xl p-8 shadow hover:shadow-lg transition-all duration-300">
            <div class="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-sm">
              <span class="text-white font-bold text-2xl">20+</span>
            </div>
            <h4 class="text-white font-semibold text-lg mb-2">Platforms Supported</h4>
            <p class="text-text-muted leading-relaxed">Connect to all major retail platforms through one consistent interface</p>
          </div>
          <div class="bg-primary-700 rounded-xl p-8 shadow hover:shadow-lg transition-all duration-300">
            <div class="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-sm">
              <span class="text-white font-bold text-2xl">24/7</span>
            </div>
            <h4 class="text-white font-semibold text-lg mb-2">Developer Support</h4>
            <p class="text-text-muted leading-relaxed">Get help when you need it with dedicated support and documentation</p>
          </div>
        </div>
        
        <!-- Footer Links -->
        <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-text-muted">
          <a href="#" class="hover:text-primary-500 transition-colors duration-200 font-medium">API Documentation</a>
          <a href="#" class="hover:text-primary-500 transition-colors duration-200 font-medium">Developer Community</a>
          <a href="#" class="hover:text-primary-500 transition-colors duration-200 font-medium">Integration Examples</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Premium final CTA section
</script>