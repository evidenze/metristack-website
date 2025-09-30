<template>
  <div>
    <HeaderSection />
    
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-purple-50 via-white to-purple-100 py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="inline-flex items-center bg-purple-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
            Smart Inventory Management
          </div>
          <h1 class="text-4xl md:text-5xl font-bold font-mono text-gray-900 mb-6">
            Optimize inventory with intelligent automation
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Build advanced inventory management systems using real-time sales data from Metristack. 
            Reduce waste, prevent stockouts, and maximize profitability with data-driven insights.
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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Automated Reordering</h3>
            <p class="text-gray-600">Never run out of popular items with intelligent reorder points based on sales velocity.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Demand Forecasting</h3>
            <p class="text-gray-600">Predict future demand using historical sales patterns and seasonal trends.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Profit Optimization</h3>
            <p class="text-gray-600">Maximize margins by optimizing inventory mix based on profit potential and turnover rates.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Inventory Solutions Grid -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold font-mono text-gray-900 mb-4">Inventory Management Solutions</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            From automated reordering to demand forecasting, build inventory systems that adapt to your business needs.
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          <!-- Demand Forecasting -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900">Demand Forecasting</h3>
                <p class="text-purple-600 text-sm font-medium">AI-powered predictions</p>
              </div>
            </div>
            
            <p class="text-gray-600 mb-6">
              Predict future demand with machine learning models trained on historical sales data. 
              Account for seasonal trends, promotions, and market conditions for accurate forecasting.
            </p>
            
            <div class="space-y-4 mb-6">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Seasonal pattern analysis
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Promotion impact modeling
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Multi-location forecasting
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Confidence intervals and accuracy metrics
              </div>
            </div>
            
            <div class="bg-purple-50 rounded-lg p-4">
              <p class="text-sm text-purple-800">
                <strong>Example:</strong> A clothing retailer reduces overstock by 40% using AI forecasting 
                that predicts seasonal demand changes with 85% accuracy.
              </p>
            </div>
          </div>
          
          <!-- Automated Reordering -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900">Automated Reordering</h3>
                <p class="text-green-600 text-sm font-medium">Smart replenishment system</p>
              </div>
            </div>
            
            <p class="text-gray-600 mb-6">
              Automate purchase orders based on real-time inventory levels and sales velocity. 
              Set dynamic reorder points that adapt to changing demand patterns.
            </p>
            
            <div class="space-y-4 mb-6">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Dynamic reorder point calculation
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Supplier integration and automation
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Lead time optimization
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Safety stock management
              </div>
            </div>
            
            <div class="bg-green-50 rounded-lg p-4">
              <p class="text-sm text-green-800">
                <strong>Example:</strong> A grocery chain reduces stockouts by 70% and cuts inventory 
                costs by 25% with automated reordering systems.
              </p>
            </div>
          </div>
          
          <!-- Stock Level Optimization -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900">Stock Level Optimization</h3>
                <p class="text-blue-600 text-sm font-medium">Intelligent inventory balance</p>
              </div>
            </div>
            
            <p class="text-gray-600 mb-6">
              Optimize stock levels across all product categories and locations. 
              Balance carrying costs with service levels for maximum profitability.
            </p>
            
            <div class="space-y-4 mb-6">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                ABC analysis and categorization
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Economic order quantity optimization
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Multi-location inventory balancing
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Carrying cost minimization
              </div>
            </div>
            
            <div class="bg-blue-50 rounded-lg p-4">
              <p class="text-sm text-blue-800">
                <strong>Example:</strong> A pharmacy chain optimizes stock levels across 50 locations, 
                reducing carrying costs by 30% while maintaining 99% availability.
              </p>
            </div>
          </div>
          
          <!-- Waste Reduction -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900">Waste Reduction</h3>
                <p class="text-orange-600 text-sm font-medium">Expiry and obsolescence prevention</p>
              </div>
            </div>
            
            <p class="text-gray-600 mb-6">
              Minimize waste from expired, damaged, or obsolete inventory. 
              Use sales velocity data to identify slow-moving items and optimize markdown strategies.
            </p>
            
            <div class="space-y-4 mb-6">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Expiry date tracking and alerts
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Slow-moving item identification
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Automated markdown recommendations
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Cross-selling opportunity alerts
              </div>
            </div>
            
            <div class="bg-orange-50 rounded-lg p-4">
              <p class="text-sm text-orange-800">
                <strong>Example:</strong> A fresh food retailer reduces waste by 55% using predictive 
                alerts and dynamic pricing for near-expiry products.
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
              Build with comprehensive inventory data
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              Access real-time inventory levels, sales velocity, and product performance across all channels. 
              Create intelligent systems that adapt to changing business conditions automatically.
            </p>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg class="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">Real-time Inventory Tracking</h3>
                  <p class="text-gray-600">Monitor stock levels across all locations and sales channels in real-time.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">Sales Velocity Analysis</h3>
                  <p class="text-gray-600">Understand how fast products sell to optimize reorder timing and quantities.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
                  <p class="text-gray-600">Forecast demand patterns and optimize inventory decisions proactively.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-900 rounded-2xl p-6">
            <div class="flex items-center justify-between mb-4">
              <span class="text-gray-400 text-sm font-medium">Inventory Management API</span>
              <div class="flex space-x-2">
                <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div class="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
            
            <pre class="text-sm text-green-400 font-mono overflow-x-auto"><code>// Get inventory analytics
const inventory = await metristack.inventory.analyze({
  storeId: 'store_123',
  timeRange: '30days'
});

// Calculate optimal reorder points
const reorderPoints = await calculateReorderPoints({
  products: inventory.products,
  salesVelocity: inventory.salesVelocity,
  leadTimes: inventory.supplierLeadTimes,
  serviceLevel: 0.95
});

// Automate purchase orders
for (const product of inventory.lowStock) {
  if (product.currentStock <= reorderPoints[product.id]) {
    const orderQuantity = calculateOptimalOrderQuantity({
      demand: product.averageDemand,
      leadTime: product.leadTime,
      orderingCost: product.orderingCost,
      holdingCost: product.holdingCost
    });
    
    await createPurchaseOrder({
      productId: product.id,
      quantity: orderQuantity,
      supplierId: product.preferredSupplierId
    });
  }
}</code></pre>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Success Stories -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold font-mono text-gray-900 mb-4">Success Stories</h2>
          <p class="text-xl text-gray-600">See how retailers are optimizing inventory with Metristack</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
                S
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">SuperMart</h3>
                <p class="text-gray-600 text-sm">Regional Grocery Chain</p>
              </div>
            </div>
            
            <blockquote class="text-gray-600 italic mb-6">
              "Metristack's inventory optimization reduced our waste by 45% and improved product availability to 98%. 
              The automated reordering system saves our managers 20+ hours per week."
            </blockquote>
            
            <div class="grid grid-cols-3 gap-4 text-center">
              <div>
                <div class="text-2xl font-bold text-purple-600">45%</div>
                <div class="text-sm text-gray-600">Reduced Waste</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-green-600">98%</div>
                <div class="text-sm text-gray-600">Availability</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-blue-600">20hrs</div>
                <div class="text-sm text-gray-600">Weekly Savings</div>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
                F
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">FashionForward</h3>
                <p class="text-gray-600 text-sm">Multi-brand Fashion Retailer</p>
              </div>
            </div>
            
            <blockquote class="text-gray-600 italic mb-6">
              "Using Metristack's demand forecasting, we optimized our seasonal inventory planning. 
              Overstock reduced by 60%, and we increased margin by 25% through better buying decisions."
            </blockquote>
            
            <div class="grid grid-cols-3 gap-4 text-center">
              <div>
                <div class="text-2xl font-bold text-purple-600">60%</div>
                <div class="text-sm text-gray-600">Less Overstock</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-green-600">25%</div>
                <div class="text-sm text-gray-600">Margin Increase</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-blue-600">$2.8M</div>
                <div class="text-sm text-gray-600">Annual Savings</div>
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
          Ready to optimize your inventory?
        </h2>
        <p class="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Start building intelligent inventory management systems with Metristack's real-time data. 
          Reduce waste, prevent stockouts, and maximize profitability.
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
          No setup fees • Real-time inventory data • Advanced forecasting algorithms
        </p>
      </div>
    </section>
    
    <FooterSection />
  </div>
</template>

<script setup>
// SEO for Smart Inventory Management use case page
useHead({
  title: 'Smart Inventory Management Solutions | Metristack',
  meta: [
    { name: 'description', content: 'Build intelligent inventory management systems with Metristack. Automate reordering, forecast demand, and optimize stock levels using real-time retail data.' },
    { name: 'robots', content: 'index, follow' }
  ]
})
</script>

<style scoped>
/* Inventory management page specific styles */
</style>