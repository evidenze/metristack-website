<template>
  <div>
    <HeaderSection />
    
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="inline-flex items-center bg-orange-100 text-orange-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
            Retail Analytics & Business Intelligence
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-mono">
            Transform data into actionable business insights
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Build powerful analytics platforms using Metristack's unified retail API. 
            Create dashboards, reports, and intelligence tools that drive growth and competitive advantage.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Key Benefits -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="text-center">
            <div class="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Real-time Dashboards</h3>
            <p class="text-gray-600">Monitor business performance with live data from all sales channels and locations.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Predictive Analytics</h3>
            <p class="text-gray-600">Forecast trends, identify opportunities, and anticipate market changes with AI-powered insights.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Customer Intelligence</h3>
            <p class="text-gray-600">Deep dive into customer behavior, preferences, and lifetime value across all touchpoints.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Analytics Solutions Grid -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4 font-mono">Analytics Solutions</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            From executive dashboards to detailed operational reports, build analytics that power data-driven decisions.
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          <!-- Executive Dashboards -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900">Executive Dashboards</h3>
                <p class="text-orange-600 text-sm font-medium">High-level performance overview</p>
              </div>
            </div>
            
            <p class="text-gray-600 mb-6">
              Create comprehensive executive dashboards that provide real-time visibility into key business metrics. 
              Track revenue, growth, and performance across all channels and locations.
            </p>
            
            <div class="space-y-4 mb-6">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Real-time revenue tracking
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                KPI monitoring and alerts
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Multi-location performance comparison
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Interactive data visualization
              </div>
            </div>
            
            <div class="bg-orange-50 rounded-lg p-4">
              <p class="text-sm text-orange-800">
                <strong>Example:</strong> A retail chain CEO monitors 50+ stores in real-time, 
                identifying underperforming locations and growth opportunities instantly.
              </p>
            </div>
          </div>
          
          <!-- Sales Analytics -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900">Sales Analytics</h3>
                <p class="text-blue-600 text-sm font-medium">Performance optimization insights</p>
              </div>
            </div>
            
            <p class="text-gray-600 mb-6">
              Build detailed sales analytics that help identify trends, optimize pricing, and improve performance. 
              Analyze sales by product, category, time, and location.
            </p>
            
            <div class="space-y-4 mb-6">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Product performance analysis
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Seasonal trend identification
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Pricing optimization recommendations
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Channel performance comparison
              </div>
            </div>
            
            <div class="bg-blue-50 rounded-lg p-4">
              <p class="text-sm text-blue-800">
                <strong>Example:</strong> A fashion retailer increases margins by 15% using analytics 
                that identify optimal pricing strategies for different product categories.
              </p>
            </div>
          </div>
          
          <!-- Customer Analytics -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900">Customer Analytics</h3>
                <p class="text-green-600 text-sm font-medium">Behavioral insights and segmentation</p>
              </div>
            </div>
            
            <p class="text-gray-600 mb-6">
              Understand customer behavior, preferences, and lifetime value with comprehensive analytics. 
              Create detailed customer segments and personalization strategies.
            </p>
            
            <div class="space-y-4 mb-6">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Customer lifetime value calculation
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Purchase behavior analysis
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Churn prediction and prevention
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Cohort analysis and retention
              </div>
            </div>
            
            <div class="bg-green-50 rounded-lg p-4">
              <p class="text-sm text-green-800">
                <strong>Example:</strong> An electronics store increases customer retention by 35% 
                using analytics that identify at-risk customers and trigger retention campaigns.
              </p>
            </div>
          </div>
          
          <!-- Operational Intelligence -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900">Operational Intelligence</h3>
                <p class="text-purple-600 text-sm font-medium">Process optimization insights</p>
              </div>
            </div>
            
            <p class="text-gray-600 mb-6">
              Optimize operations with detailed analytics on inventory, staff performance, and business processes. 
              Identify bottlenecks and opportunities for efficiency improvements.
            </p>
            
            <div class="space-y-4 mb-6">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Inventory turnover optimization
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Staff productivity metrics
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Process efficiency analysis
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Cost center performance tracking
              </div>
            </div>
            
            <div class="bg-purple-50 rounded-lg p-4">
              <p class="text-sm text-purple-800">
                <strong>Example:</strong> A restaurant chain improves operational efficiency by 20% 
                using analytics that identify peak hour staffing needs and menu optimization opportunities.
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
            <h2 class="text-3xl font-bold text-gray-900 mb-6 font-mono">
              Build with comprehensive business data
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              Access unified retail data from all platforms to create powerful analytics and reporting tools. 
              Build dashboards that provide actionable insights for every level of your organization.
            </p>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg class="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">Multi-dimensional Analysis</h3>
                  <p class="text-gray-600">Analyze data across time, location, product, customer, and channel dimensions.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">Real-time Data Processing</h3>
                  <p class="text-gray-600">Process and visualize data as it happens with streaming analytics capabilities.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">Custom Reporting</h3>
                  <p class="text-gray-600">Create automated reports and alerts for key business metrics and events.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-900 rounded-2xl p-6">
            <div class="flex items-center justify-between mb-4">
              <span class="text-gray-400 text-sm font-medium">Analytics API Example</span>
              <div class="flex space-x-2">
                <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div class="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
            
            <pre class="text-sm text-green-400 font-mono overflow-x-auto"><code>// Get comprehensive business analytics
const analytics = await metristack.analytics.getData({
  metrics: ['revenue', 'units_sold', 'avg_order_value', 'customer_count'],
  dimensions: ['time', 'product_category', 'location', 'channel'],
  filters: {
    dateRange: { start: '2024-01-01', end: '2024-12-31' },
    locations: ['store_1', 'store_2', 'online']
  },
  granularity: 'daily'
});

// Build dashboard widgets
const dashboardData = {
  revenue: {
    current: analytics.revenue.total,
    growth: analytics.revenue.growthRate,
    trend: analytics.revenue.dailyTrend
  },
  topProducts: analytics.products
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 10),
  customerSegments: analytics.customers.segments,
  alerts: analytics.alerts.filter(alert => alert.priority === 'high')
};

// Generate automated insights
const insights = await ai.generateInsights({
  data: analytics,
  previousPeriod: previousAnalytics,
  focus: ['growth_opportunities', 'risk_factors', 'optimization']
});</code></pre>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Success Stories -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4 font-mono">Success Stories</h2>
          <p class="text-xl text-gray-600">See how businesses are leveraging Metristack for analytics</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
                D
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">DataDriven Retail</h3>
                <p class="text-gray-600 text-sm">Multi-chain Analytics Platform</p>
              </div>
            </div>
            
            <blockquote class="text-gray-600 italic mb-6">
              "Metristack enabled us to build a comprehensive analytics platform that serves 200+ retailers. 
              Our clients see an average 18% improvement in profitability using our insights."
            </blockquote>
            
            <div class="grid grid-cols-3 gap-4 text-center">
              <div>
                <div class="text-2xl font-bold text-orange-600">200+</div>
                <div class="text-sm text-gray-600">Retailers Served</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-green-600">18%</div>
                <div class="text-sm text-gray-600">Profit Improvement</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-blue-600">50TB</div>
                <div class="text-sm text-gray-600">Data Processed</div>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
                I
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">InsightfulBI</h3>
                <p class="text-gray-600 text-sm">Business Intelligence SaaS</p>
              </div>
            </div>
            
            <blockquote class="text-gray-600 italic mb-6">
              "Using Metristack's unified API, we reduced our data integration time by 80% and can now 
              onboard new retail clients in hours instead of weeks."
            </blockquote>
            
            <div class="grid grid-cols-3 gap-4 text-center">
              <div>
                <div class="text-2xl font-bold text-orange-600">80%</div>
                <div class="text-sm text-gray-600">Faster Integration</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-green-600">24hrs</div>
                <div class="text-sm text-gray-600">Client Onboarding</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-blue-600">95%</div>
                <div class="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-orange-600 to-orange-800">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-white mb-6 font-mono">
          Ready to build powerful analytics?
        </h2>
        <p class="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
          Start creating intelligent analytics platforms with Metristack's unified retail data. 
          Build dashboards and insights that drive business growth.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg">
            Start Free Trial
          </button>
          <NuxtLink to="/contact" class="bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-800 transition-colors border border-orange-500">
            Talk to Sales
          </NuxtLink>
        </div>
        
        <p class="text-orange-200 text-sm mt-6">
          No setup fees • Real-time data streaming • Comprehensive analytics APIs
        </p>
      </div>
    </section>
    
    <FooterSection />
  </div>
</template>

<script setup>
// SEO for Retail Analytics use case page
useHead({
  title: 'Retail Analytics & Business Intelligence | Metristack',
  meta: [
    { name: 'description', content: 'Build powerful analytics platforms with Metristack. Create real-time dashboards, sales reports, and business intelligence tools using unified retail data.' },
    { name: 'robots', content: 'index, follow' }
  ]
})
</script>

<style scoped>
/* Retail analytics page specific styles */
</style>