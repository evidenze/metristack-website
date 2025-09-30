<template>
  <div>
    <HeaderSection />
    
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-purple-50 via-white to-purple-100 py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="inline-flex items-center bg-purple-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Customer Experience & Personalization
          </div>
          <h1 class="text-4xl md:text-5xl font-bold font-mono text-gray-900 mb-6">
            Deliver exceptional customer experiences at scale
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Build intelligent customer experience platforms using Metristack's unified data. 
            Create personalized interactions, optimize support, and increase customer satisfaction.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Key Benefits -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="text-center">
            <div class="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Unified Customer View</h3>
            <p class="text-gray-600">Create complete customer profiles with data from all touchpoints and interactions.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Intelligent Personalization</h3>
            <p class="text-gray-600">Deliver personalized experiences using AI-powered recommendations and predictions.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM12 18a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V18.75A.75.75 0 0112 18zM2.25 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM18 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18.75A.75.75 0 0118 12z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Omnichannel Support</h3>
            <p class="text-gray-600">Provide seamless support across all channels with consistent customer context.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Customer Experience Solutions Grid -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold font-mono text-gray-900 mb-4">Customer Experience Solutions</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            From CRM integration to personalization engines, build solutions that enhance every customer interaction.
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          <!-- CRM Integration -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900">CRM Integration</h3>
                <p class="text-purple-600 text-sm font-medium">360-degree customer view</p>
              </div>
            </div>
            
            <p class="text-gray-600 mb-6">
              Build comprehensive CRM systems that unify customer data from all touchpoints. 
              Create complete customer profiles with purchase history, preferences, and interactions.
            </p>
            
            <div class="space-y-4 mb-6">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Unified customer profiles
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Cross-platform data synchronization
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Interaction timeline tracking
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Automated data enrichment
              </div>
            </div>
            
            <div class="bg-purple-50 rounded-lg p-4">
              <p class="text-sm text-purple-800">
                <strong>Example:</strong> A fashion retailer improved customer service efficiency by 40% 
                with unified profiles showing purchase history, preferences, and support interactions.
              </p>
            </div>
          </div>
          
          <!-- Personalization Engine -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900">Personalization Engine</h3>
                <p class="text-pink-600 text-sm font-medium">AI-powered recommendations</p>
              </div>
            </div>
            
            <p class="text-gray-600 mb-6">
              Create intelligent personalization systems that adapt to customer behavior and preferences. 
              Deliver unique experiences that increase engagement and conversion rates.
            </p>
            
            <div class="space-y-4 mb-6">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Product recommendation algorithms
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Dynamic content customization
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Behavioral targeting
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                A/B testing and optimization
              </div>
            </div>
            
            <div class="bg-pink-50 rounded-lg p-4">
              <p class="text-sm text-pink-800">
                <strong>Example:</strong> An online marketplace increased conversion rates by 65% 
                using personalized product recommendations based on browsing and purchase history.
              </p>
            </div>
          </div>
          
          <!-- Loyalty Program Management -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900">Loyalty Programs</h3>
                <p class="text-indigo-600 text-sm font-medium">Customer retention optimization</p>
              </div>
            </div>
            
            <p class="text-gray-600 mb-6">
              Build sophisticated loyalty programs that reward customers across all channels. 
              Create tiered rewards, personalized offers, and gamification elements.
            </p>
            
            <div class="space-y-4 mb-6">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Points and rewards management
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Tiered membership levels
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Omnichannel point accumulation
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Personalized reward offers
              </div>
            </div>
            
            <div class="bg-indigo-50 rounded-lg p-4">
              <p class="text-sm text-indigo-800">
                <strong>Example:</strong> A coffee chain increased customer lifetime value by 45% 
                with a loyalty program that offers personalized rewards based on purchase patterns.
              </p>
            </div>
          </div>
          
          <!-- Customer Support Optimization -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM12 18a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V18.75A.75.75 0 0112 18zM2.25 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM18 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18.75A.75.75 0 0118 12z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900">Support Optimization</h3>
                <p class="text-green-600 text-sm font-medium">Intelligent customer service</p>
              </div>
            </div>
            
            <p class="text-gray-600 mb-6">
              Create intelligent customer support systems with full context of customer history. 
              Optimize response times, predict support needs, and improve satisfaction scores.
            </p>
            
            <div class="space-y-4 mb-6">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Context-aware support tickets
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Proactive issue identification
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Automated routing and prioritization
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Multi-channel support tracking
              </div>
            </div>
            
            <div class="bg-green-50 rounded-lg p-4">
              <p class="text-sm text-green-800">
                <strong>Example:</strong> A tech retailer reduced support resolution time by 60% 
                using intelligent routing based on customer context and agent expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Technical Implementation -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold font-mono text-gray-900 mb-6">
              Build with unified customer data
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              Access comprehensive customer data from all touchpoints to create personalized experiences. 
              Build CRM systems, personalization engines, and support tools that truly understand your customers.
            </p>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg class="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">Real-time Personalization</h3>
                  <p class="text-gray-600">Deliver personalized experiences based on current behavior and historical data.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-8 h-8 bg-pink-50 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg class="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">Customer Journey Tracking</h3>
                  <p class="text-gray-600">Map complete customer journeys across all touchpoints and channels.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg class="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">Predictive Insights</h3>
                  <p class="text-gray-600">Anticipate customer needs and behaviors with AI-powered predictions.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-900 rounded-2xl p-6">
            <div class="flex items-center justify-between mb-4">
              <span class="text-gray-400 text-sm font-medium">Customer Experience API</span>
              <div class="flex space-x-2">
                <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div class="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
            
            <pre class="text-sm text-green-400 font-mono overflow-x-auto"><code>// Get comprehensive customer profile
const customer = await metristack.customers.getProfile({
  customerId: 'customer_123',
  include: ['transactions', 'interactions', 'preferences', 'segments']
});

// Generate personalized recommendations
const recommendations = await ai.getRecommendations({
  customerId: customer.id,
  context: 'product_page',
  strategy: 'collaborative_filtering',
  filters: {
    category: customer.preferences.categories,
    priceRange: customer.profile.priceRange
  }
});

// Create personalized experience
const experience = {
  hero: {
    message: `Welcome back, ${customer.firstName}!`,
    cta: recommendations.primaryAction
  },
  products: recommendations.items.slice(0, 8),
  offers: customer.eligibleOffers.filter(offer => 
    offer.category.includes(customer.preferences.topCategory)
  ),
  loyalty: {
    points: customer.loyalty.currentPoints,
    nextReward: customer.loyalty.nextReward,
    tier: customer.loyalty.tier
  }
};

// Track interaction for future personalization
await metristack.interactions.track({
  customerId: customer.id,
  event: 'page_view',
  context: experience,
  recommendations: recommendations.items.map(item => item.id)
});</code></pre>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Success Stories -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold font-mono text-gray-900 mb-4">Success Stories</h2>
          <p class="text-xl text-gray-600">See how companies transform customer experiences with Metristack</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
                L
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">LoyaltyPlus</h3>
                <p class="text-gray-600 text-sm">Customer Experience Platform</p>
              </div>
            </div>
            
            <blockquote class="text-gray-600 italic mb-6">
              "With Metristack's unified customer data, we built a personalization engine that increased 
              customer engagement by 120% and reduced churn by 35% across our client base."
            </blockquote>
            
            <div class="grid grid-cols-3 gap-4 text-center">
              <div>
                <div class="text-2xl font-bold text-purple-600">120%</div>
                <div class="text-sm text-gray-600">Engagement Increase</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-green-600">35%</div>
                <div class="text-sm text-gray-600">Churn Reduction</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-blue-600">500+</div>
                <div class="text-sm text-gray-600">Clients Served</div>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
                C
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">CustomerFirst CRM</h3>
                <p class="text-gray-600 text-sm">CRM and Support Platform</p>
              </div>
            </div>
            
            <blockquote class="text-gray-600 italic mb-6">
              "Metristack's data integration allowed us to build a CRM that provides complete customer context. 
              Our clients report 50% faster issue resolution and 25% higher customer satisfaction."
            </blockquote>
            
            <div class="grid grid-cols-3 gap-4 text-center">
              <div>
                <div class="text-2xl font-bold text-pink-600">50%</div>
                <div class="text-sm text-gray-600">Faster Resolution</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-green-600">25%</div>
                <div class="text-sm text-gray-600">Higher Satisfaction</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-blue-600">10K+</div>
                <div class="text-sm text-gray-600">Support Agents</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-purple-600 to-purple-800">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold font-mono text-white mb-6">
          Ready to transform your customer experience?
        </h2>
        <p class="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Start building personalized customer experiences with Metristack's unified data. 
          Create CRM systems, loyalty programs, and support tools that delight customers.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg">
            Start Free Trial
          </button>
          <NuxtLink to="/contact" class="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors border border-purple-500">
            Talk to Sales
          </NuxtLink>
        </div>
        
        <p class="text-purple-200 text-sm mt-6">
          No setup fees • Real-time personalization • Comprehensive customer APIs
        </p>
      </div>
    </section>
    
    <FooterSection />
  </div>
</template>

<script setup>
// SEO for Customer Experience use case page
useHead({
  title: 'Customer Experience & Personalization | Metristack',
  meta: [
    { name: 'description', content: 'Build intelligent customer experience platforms with Metristack. Create personalized interactions, CRM systems, loyalty programs, and support tools using unified data.' },
    { name: 'robots', content: 'index, follow' }
  ]
})
</script>

<style scoped>
/* Customer experience page specific styles */
</style>