<template>
  <section id="use-cases" class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-plaid-text-primary mb-4">
          Breakthrough applications. Built on Metristack.
        </h2>
        <p class="text-lg text-plaid-text-muted leading-relaxed max-w-3xl mx-auto mb-12">
          From fintech to analytics, companies use Metristack's infrastructure to build  
          products that transform African commerce. See what's possible with unified data access.
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
        <!-- Use Case 1: Fintech -->
        <NuxtLink to="/use-cases/fintech-lending" class="group">
          <div class="bg-white rounded-xl p-8 shadow-stripe hover:shadow-stripe-md transition-all duration-300 border border-gray-100 h-full cursor-pointer group-hover:border-blue-200">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 shadow-stripe-sm group-hover:bg-blue-700 transition-colors">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Fintech & Lending</h3>
                <p class="text-blue-600 text-sm font-medium">Instant underwriting solutions</p>
              </div>
            </div>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Launch instant lending products using real-time sales data from Metristack. 
              Connect to merchant cash flows for accurate risk assessment and automated approvals.
            </p>
            <div class="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
              Learn more 
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </NuxtLink>
        
        <!-- Use Case 2: Marketing Automation -->
        <NuxtLink to="/use-cases/marketing-automation" class="group">
          <div class="bg-white rounded-xl p-8 shadow-stripe hover:shadow-stripe-md transition-all duration-300 border border-gray-100 h-full cursor-pointer group-hover:border-green-200">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4 shadow-stripe-sm group-hover:bg-green-700 transition-colors">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">Marketing Automation</h3>
                <p class="text-green-600 text-sm font-medium">Personalized campaigns at scale</p>
              </div>
            </div>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Build intelligent marketing automation using purchase behavior from Metristack. 
              Create personalized campaigns that drive engagement and increase customer lifetime value.
            </p>
            <div class="flex items-center text-green-600 text-sm font-medium group-hover:text-green-700">
              Learn more 
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </NuxtLink>
        
        <!-- Use Case 3: Inventory Management -->
        <NuxtLink to="/use-cases/inventory-management" class="group">
          <div class="bg-white rounded-xl p-8 shadow-stripe hover:shadow-stripe-md transition-all duration-300 border border-gray-100 h-full cursor-pointer group-hover:border-purple-200">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4 shadow-stripe-sm group-hover:bg-purple-700 transition-colors">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 21V9l-1-1v10l-1-1"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">Smart Inventory</h3>
                <p class="text-purple-600 text-sm font-medium">Optimized supply chain</p>
              </div>
            </div>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Build intelligent inventory solutions using real-time stock data from Metristack. 
              Create automated reordering systems that maximize profit margins while minimizing waste.
            </p>
            <div class="flex items-center text-purple-600 text-sm font-medium group-hover:text-purple-700">
              Learn more 
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </NuxtLink>
        
        <!-- Use Case 4: Business Analytics -->
        <NuxtLink to="/use-cases/retail-analytics" class="group">
          <div class="bg-white rounded-xl p-8 shadow-stripe hover:shadow-stripe-md transition-all duration-300 border border-gray-100 h-full cursor-pointer group-hover:border-orange-200">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4 shadow-stripe-sm group-hover:bg-orange-700 transition-colors">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">Retail Analytics</h3>
                <p class="text-orange-600 text-sm font-medium">Actionable business insights</p>
              </div>
            </div>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Launch powerful analytics platforms using Metristack's unified API. Transform raw data into  
              actionable insights that drive business growth and competitive advantage.
            </p>
            <div class="flex items-center text-orange-600 text-sm font-medium group-hover:text-orange-700">
              Learn more 
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </NuxtLink>
        
        <!-- Use Case 5: Customer Experience -->
        <NuxtLink to="/use-cases/customer-experience" class="group lg:col-span-2 xl:col-span-1">
          <div class="bg-white rounded-xl p-8 shadow-stripe hover:shadow-stripe-md transition-all duration-300 border border-gray-100 h-full cursor-pointer group-hover:border-pink-200">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mr-4 shadow-stripe-sm group-hover:bg-pink-700 transition-colors">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">Customer Experience</h3>
                <p class="text-pink-600 text-sm font-medium">Personalization & loyalty</p>
              </div>
            </div>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Build intelligent customer experience platforms using Metristack's unified data. 
              Create personalized interactions, CRM systems, and loyalty programs that delight customers.
            </p>
            <div class="flex items-center text-pink-600 text-sm font-medium group-hover:text-pink-700">
              Learn more 
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
// Use Cases section showcasing different applications of Metristack
</script>