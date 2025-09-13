<template>
  <section class="py-24 bg-gradient-to-br from-plaid-background via-white to-plaid-primary-50/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-20">
        <h2 class="text-3xl sm:text-4xl font-semibold mb-6">
          <span class="bg-gradient-to-tr from-plaid-accent via-plaid-primary-400 to-plaid-accent bg-clip-text text-transparent">
            Building Africa's retail data infrastructure
          </span>
        </h2>
        <p class="max-w-3xl mx-auto text-xl text-plaid-text-secondary">
          Every new platform we connect strengthens the network for everyone. Rich transaction 
          data that was previously inaccessible becomes part of a unified layer, creating 
          exponential value as Africa's retail data network grows.
        </p>
      </div>
      
            <!-- Network Stats - Plaid style -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        <div class="text-center">
          <div class="text-4xl font-bold text-plaid-primary mb-2">20+</div>
          <div class="text-lg font-semibold text-plaid-text-primary mb-1">data sources connected</div>
          <div class="text-sm text-plaid-text-muted">Previously inaccessible retail data</div>
        </div>
        
        <div class="text-center">
          <div class="text-4xl font-bold text-plaid-primary mb-2">10x</div>
          <div class="text-lg font-semibold text-plaid-text-primary mb-1">faster data access</div>
          <div class="text-sm text-plaid-text-muted">Access insights in days, not months</div>
        </div>
        
        <div class="text-center">
          <div class="text-4xl font-bold text-plaid-primary mb-2">1000+</div>
          <div class="text-lg font-semibold text-plaid-text-primary mb-1">data points accessible</div>
          <div class="text-sm text-plaid-text-muted">From previously closed systems</div>
        </div>
        
        <div class="text-center">
          <div class="text-4xl font-bold text-plaid-primary mb-2">99.9%</div>
          <div class="text-lg font-semibold text-plaid-text-primary mb-1">uptime reliability</div>
          <div class="text-sm text-plaid-text-muted">Enterprise-grade platform</div>
        </div>
      </div>

      <!-- Live Activity Feed - Inspired by Plaid -->
      <div class="bg-gradient-to-br from-plaid-primary-50 to-white rounded-3xl p-8 lg:p-12 border border-plaid-primary-100 shadow-plaid-lg relative overflow-hidden">
        <!-- Background gradient overlay using Plaid's exact network gradient -->
        <div class="absolute inset-0 opacity-5 bg-plaid-network"></div>
        
        <h3 class="text-2xl font-semibold text-plaid-text-primary text-center mb-8 relative z-10">
          API connections happening right now
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto relative z-10">
          <div class="bg-white rounded-xl p-4 shadow-plaid border border-plaid-primary-100">
            <div class="flex items-center mb-2">
              <div class="w-8 h-8 bg-plaid-success-light rounded-full flex items-center justify-center mr-3">
                <svg class="w-4 h-4 text-plaid-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div>
                <div class="font-semibold text-sm text-plaid-text-primary">LendingCorp</div>
                <div class="text-xs text-plaid-text-muted">2m ago</div>
              </div>
            </div>
            <div class="text-sm text-plaid-text-secondary">Shopify sales data connected</div>
          </div>
          
          <div class="bg-white rounded-xl p-4 shadow-plaid border border-plaid-primary-100">
            <div class="flex items-center mb-2">
              <div class="w-8 h-8 bg-plaid-accent-light rounded-full flex items-center justify-center mr-3">
                <svg class="w-4 h-4 text-plaid-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div>
                <div class="font-semibold text-sm text-plaid-text-primary">AnalyticsPro</div>
                <div class="text-xs text-plaid-text-muted">5m ago</div>
              </div>
            </div>
            <div class="text-sm text-plaid-text-secondary">Transaction data accessed ✅</div>
          </div>
          
          <div class="bg-white rounded-xl p-4 shadow-plaid border border-plaid-primary-100">
            <div class="flex items-center mb-2">
              <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <svg class="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div>
                <div class="font-semibold text-sm text-plaid-text-primary">QuickBooks Plugin</div>
                <div class="text-xs text-plaid-text-muted">8m ago</div>
              </div>
            </div>
            <div class="text-sm text-plaid-text-secondary">Inventory data accessed from Square</div>
          </div>
          
          <div class="bg-white rounded-xl p-4 shadow-plaid border border-plaid-primary-100">
            <div class="flex items-center mb-2">
              <div class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                <svg class="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM4 8.618l6-4.5 6 4.5V17H4V8.618z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div>
                <div class="font-semibold text-sm text-plaid-text-primary">RetailBank</div>
                <div class="text-xs text-plaid-text-muted">12m ago</div>
              </div>
            </div>
            <div class="text-sm text-plaid-text-secondary">Loan approved with accessible data</div>
          </div>
          
          <div class="bg-white rounded-xl p-4 shadow-plaid border border-plaid-primary-100">
            <div class="flex items-center mb-2">
              <div class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                <svg class="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div>
                <div class="font-semibold text-sm text-plaid-text-primary">FraudGuard</div>
                <div class="text-xs text-plaid-text-muted">15m ago</div>
              </div>
            </div>
            <div class="text-sm text-plaid-text-secondary">Risk assessment completed</div>
          </div>
          
          <div class="bg-white rounded-xl p-4 shadow-plaid border border-plaid-primary-100">
            <div class="flex items-center mb-2">
              <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div>
                <div class="font-semibold text-sm text-plaid-text-primary">TaxTech</div>
                <div class="text-xs text-plaid-text-muted">18m ago</div>
              </div>
            </div>
            <div class="text-sm text-plaid-text-secondary">Tax calculation updated</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Network effect section inspired by Plaid
</script>