<template>
  <section id="how-it-works" class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">
          How Metristack Works
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Connect to any retail platform in just three simple steps. Our unified API handles all the complexity of data normalization and integration.
        </p>
      </div>
      
      <!-- 3-Step Process -->
      <div class="mb-16">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Step 1 -->
          <div class="bg-white rounded-xl p-8 shadow-stripe hover:shadow-stripe-md transition-all duration-300">
            <div class="text-center">
              <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-stripe-sm">
                <span class="text-2xl font-bold text-white">1</span>
              </div>
              <h3 class="text-2xl font-semibold text-gray-900 mb-4">Merchant Connects</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Your merchant clicks "Connect Store" in your app. They authorize access through our 
                secure OAuth flow in seconds.
              </p>
            </div>
          </div>
          
          <!-- Step 2 -->
          <div class="bg-white rounded-xl p-8 shadow-stripe hover:shadow-stripe-md transition-all duration-300">
            <div class="text-center">
              <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-stripe-sm">
                <span class="text-2xl font-bold text-white">2</span>
              </div>
              <h3 class="text-2xl font-semibold text-gray-900 mb-4">We Normalize</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Our platform automatically syncs and transforms their data into a unified format. 
                All platforms, one consistent API.
              </p>
            </div>
          </div>
          
          <!-- Step 3 -->
          <div class="bg-white rounded-xl p-8 shadow-stripe hover:shadow-stripe-md transition-all duration-300">
            <div class="text-center">
              <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-stripe-sm">
                <span class="text-2xl font-bold text-white">3</span>
              </div>
              <h3 class="text-2xl font-semibold text-gray-900 mb-4">You Access Everything</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Make a single API call to get sales, customers, products, and more. Same format for every merchant, regardless of their platform.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Implementation Details -->
      <div class="bg-white rounded-xl p-8 lg:p-12 shadow-stripe">
        <h3 class="text-3xl font-semibold text-gray-900 text-center mb-12">
          Built for Developers
        </h3>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Left: Code Example -->
          <div>
            <h4 class="text-xl font-semibold text-gray-900 mb-6">Simple Integration</h4>
            <div class="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <pre class="text-green-400 text-sm font-mono overflow-x-auto"><code>// Initialize Metristack
const metristack = new Metristack({
  apiKey: process.env.METRISTACK_API_KEY
});

// Get merchant's sales data
const sales = await metristack.stores.getSales({
  storeId: merchantStore.id,
  startDate: '2024-01-01',
  endDate: '2024-01-31'
});

// Access normalized fields
sales.transactions.forEach(transaction => {
  console.log({
    id: transaction.id,
    amount: transaction.total_amount,
    date: transaction.created_at,
    customer: transaction.customer.email
  });
});</code></pre>
            </div>
          </div>
          
          <!-- Right: Features -->
          <div>
            <h4 class="text-xl font-semibold text-gray-900 mb-8">Developer Experience</h4>
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center mr-4 mt-1 border border-green-100">
                  <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <div class="font-semibold text-gray-900 mb-1">RESTful APIs</div>
                  <div class="text-sm text-gray-600 leading-relaxed">Intuitive endpoints that follow REST conventions</div>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center mr-4 mt-1 border border-green-100">
                  <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <div class="font-semibold text-gray-900 mb-1">Real-time Webhooks</div>
                  <div class="text-sm text-gray-600 leading-relaxed">Get notified instantly when data changes</div>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center mr-4 mt-1 border border-green-100">
                  <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <div class="font-semibold text-gray-900 mb-1">SDKs & Libraries</div>
                  <div class="text-sm text-gray-600 leading-relaxed">Node.js, Python, PHP, and more coming</div>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center mr-4 mt-1 border border-green-100">
                  <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <div class="font-semibold text-gray-900 mb-1">Comprehensive Docs</div>
                  <div class="text-sm text-gray-600 leading-relaxed">Interactive API explorer and code samples</div>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center mr-4 mt-1 border border-green-100">
                  <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <div class="font-semibold text-gray-900 mb-1">Sandbox Environment</div>
                  <div class="text-sm text-gray-600 leading-relaxed">Test with realistic data before going live</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// How It Works section showing the 3-step integration process
</script>