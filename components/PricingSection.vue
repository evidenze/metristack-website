<template>
  <section id="pricing" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-20">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">
          Simple, Transparent Pricing
        </h2>
        <p class="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
          Start free, scale as you grow. No hidden fees, no surprise charges. 
          Pay per connected store, not per API call.
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        <!-- Free Tier -->
        <div class="bg-white rounded-xl p-8 shadow-stripe hover:shadow-stripe-md transition-all duration-300 border border-gray-200">
          <div class="text-center">
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Sandbox</h3>
            <div class="text-5xl font-bold text-gray-900 mb-2">$0</div>
            <div class="text-gray-600 mb-8 font-medium">Forever free development environment</div>
            
            <button class="w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 mb-8 shadow-stripe-sm">
              Start Building Free
            </button>
            
            <div class="text-left space-y-4">
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700 leading-relaxed">Sandbox environment with sample data</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700 leading-relaxed">Full API access for testing</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700 leading-relaxed">Complete documentation</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700 leading-relaxed">Community support</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700 leading-relaxed">No credit card required</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Startup Tier -->
        <div class="bg-white rounded-xl p-8 shadow-stripe-lg border-2 border-primary-200 relative transform scale-105">
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span class="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-stripe-sm">Most Popular</span>
          </div>
          
          <div class="text-center">
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Startup</h3>
            <div class="text-5xl font-bold text-gray-900 mb-2">$49</div>
            <div class="text-gray-600 mb-8 font-medium">per connected store/month</div>
            
            <button class="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 mb-8 shadow-stripe-sm">
              Start Free Trial
            </button>
            
            <div class="text-left space-y-4">
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700 leading-relaxed">Up to 50 connected stores</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700 leading-relaxed">Real-time data sync</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700 leading-relaxed">All 20+ platform integrations</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700 leading-relaxed">Webhooks & real-time events</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700 leading-relaxed">Email support</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700 leading-relaxed">99.9% uptime SLA</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Enterprise Tier -->
        <div class="bg-white rounded-xl p-8 shadow-stripe hover:shadow-stripe-md transition-all duration-300 border border-gray-200">
          <div class="text-center">
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Enterprise</h3>
            <div class="text-5xl font-bold text-gray-900 mb-2">Custom</div>
            <div class="text-gray-600 mb-8 font-medium">Volume discounts available</div>
            
            <button class="w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 mb-8 shadow-stripe-sm">
              Contact Sales
            </button>
            
            <div class="text-left space-y-4">
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700 leading-relaxed">Unlimited connected stores</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700 leading-relaxed">Custom integrations</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700 leading-relaxed">Dedicated support team</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700 leading-relaxed">White-label options</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700 leading-relaxed">SOC 2 & compliance</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700 leading-relaxed">99.99% uptime SLA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- FAQ Section -->
      <div class="bg-gray-50 rounded-xl p-12 shadow-stripe-sm">
        <div class="max-w-4xl mx-auto">
          <h3 class="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h3>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="space-y-8">
              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-3 leading-tight">Do you charge per API call?</h4>
                <p class="text-gray-600 leading-relaxed">
                  No! We charge per connected store, not per API call. Make as many requests as you need 
                  without worrying about usage limits or surprise bills.
                </p>
              </div>
              
              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-3 leading-tight">What counts as a "connected store"?</h4>
                <p class="text-gray-600 leading-relaxed">
                  One merchant's store on one platform. If a merchant has Shopify + Square, 
                  that's 2 connected stores. Most merchants have 1-3 platforms.
                </p>
              </div>
              
              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-3 leading-tight">Is there a setup fee?</h4>
                <p class="text-gray-600 leading-relaxed">
                  No setup fees, no onboarding charges. Start with our free sandbox and only pay 
                  when you connect real merchant stores.
                </p>
              </div>
            </div>
            
            <div class="space-y-8">
              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-3 leading-tight">Can I get volume discounts?</h4>
                <p class="text-gray-600 leading-relaxed">
                  Yes! Contact our sales team for custom pricing if you expect to connect 100+ stores 
                  or need enterprise features. We offer significant volume discounts.
                </p>
              </div>
              
              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-3 leading-tight">How quickly can I get started?</h4>
                <p class="text-gray-600 leading-relaxed">
                  Most developers are up and running within 15 minutes using our sandbox environment. 
                  Production integrations typically take 1-3 business days depending on the platforms.
                </p>
              </div>
              
              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-3 leading-tight">What support do you provide?</h4>
                <p class="text-gray-600 leading-relaxed">
                  All plans include documentation and community support. Paid plans get email support, 
                  and Enterprise customers receive dedicated support with phone and video calls.
                </p>
              </div>
            </div>
          </div>
          
          <div class="text-center mt-16 pt-8 border-t border-gray-200">
            <p class="text-gray-600 mb-6 text-lg">Have more questions about pricing? We're here to help.</p>
            <button class="inline-flex items-center bg-white hover:bg-gray-50 text-primary-600 hover:text-primary-700 px-6 py-3 rounded-lg font-semibold border border-gray-200 shadow-stripe-sm hover:shadow-stripe transition-all duration-200">
              Schedule a call with our team
              <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Pricing section with clear, transparent pricing tiers
</script>