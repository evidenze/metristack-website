<template>
  <div>
    <HeaderSection />
    
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-50 via-white to-primary-100 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team. We're here to help you build breakthrough products with Metristack.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Contact Information -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Main Contact Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          <!-- Sales & Business Inquiries -->
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 shadow-md">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-semibold text-blue-900">Sales & Business</h3>
                <p class="text-blue-700 text-sm">Partnership opportunities and pricing</p>
              </div>
            </div>
            
            <div class="space-y-4 mb-6">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <a href="mailto:sales@metristack.com" class="text-lg font-medium text-blue-900 hover:text-blue-700 transition-colors">
                  sales@metristack.com
                </a>
              </div>
              
              <div class="flex items-center">
                <svg class="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-blue-800">Available globally</span>
              </div>
              
              <div class="flex items-center">
                <svg class="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-blue-800">Response within 24 hours</span>
              </div>
            </div>
            
            <div class="bg-white bg-opacity-50 rounded-lg p-4">
              <p class="text-sm text-blue-800 leading-relaxed">
                Ready to integrate with African retail data? Our sales team will help you choose the right plan 
                and get started with Metristack. We'll discuss your use case and provide personalized onboarding.
              </p>
            </div>
          </div>
          
          <!-- Technical Support -->
          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4 shadow-md">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-semibold text-green-900">Technical Support</h3>
                <p class="text-green-700 text-sm">API help and integration support</p>
              </div>
            </div>
            
            <div class="space-y-4 mb-6">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <a href="mailto:support@metristack.com" class="text-lg font-medium text-green-900 hover:text-green-700 transition-colors">
                  support@metristack.com
                </a>
              </div>
              
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-green-800">Developer documentation available</span>
              </div>
              
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-green-800">Business hours support</span>
              </div>
            </div>
            
            <div class="bg-white bg-opacity-50 rounded-lg p-4">
              <p class="text-sm text-green-800 leading-relaxed">
                Need help with API integration or technical questions? Our developer support team provides 
                guidance on implementation, troubleshooting, and best practices.
              </p>
            </div>
          </div>
        </div>
        
        <!-- Additional Contact Options -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <!-- Security Issues -->
          <div class="bg-red-50 rounded-xl p-6 border border-red-200 text-center">
            <div class="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-red-900 mb-2">Security Issues</h4>
            <a href="mailto:security@metristack.com" class="text-red-700 hover:text-red-900 font-medium transition-colors">
              security@metristack.com
            </a>
            <p class="text-sm text-red-600 mt-2">
              Report vulnerabilities or security concerns
            </p>
          </div>
          
          <!-- Partnership Inquiries -->
          <div class="bg-purple-50 rounded-xl p-6 border border-purple-200 text-center">
            <div class="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-purple-900 mb-2">Partnerships</h4>
            <a href="mailto:partnerships@metristack.com" class="text-purple-700 hover:text-purple-900 font-medium transition-colors">
              partnerships@metristack.com
            </a>
            <p class="text-sm text-purple-600 mt-2">
              Integration partnerships and collaborations
            </p>
          </div>
          
          <!-- Media & Press -->
          <div class="bg-orange-50 rounded-xl p-6 border border-orange-200 text-center">
            <div class="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-orange-900 mb-2">Media & Press</h4>
            <a href="mailto:press@metristack.com" class="text-orange-700 hover:text-orange-900 font-medium transition-colors">
              press@metristack.com
            </a>
            <p class="text-sm text-orange-600 mt-2">
              Media inquiries and press releases
            </p>
          </div>
        </div>
        
        <!-- Company Information -->
        <div class="bg-gray-50 rounded-2xl p-8 text-center">
          <div class="max-w-3xl mx-auto">
            <div class="flex items-center justify-center mb-6">
              <div class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mr-4 shadow-md">
                <span class="text-white font-bold text-xl">M</span>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">Metristack</h2>
            </div>
            
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              The unified API for African retail data. We're building the infrastructure that enables 
              breakthrough products across fintech, analytics, and commerce.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div class="text-left">
                <h4 class="font-semibold text-gray-900 mb-2">🌍 Our Mission</h4>
                <p class="text-gray-600 text-sm">
                  Democratizing access to retail data across Africa, enabling developers to build 
                  solutions that transform commerce.
                </p>
              </div>
              
              <div class="text-left">
                <h4 class="font-semibold text-gray-900 mb-2">⚡ Response Time</h4>
                <p class="text-gray-600 text-sm">
                  We typically respond to sales inquiries within 24 hours and support requests 
                  during business hours.
                </p>
              </div>
            </div>
            
            <!-- Social Links -->
            <div class="flex justify-center space-x-6 mt-8">
              <a href="#" class="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Twitter">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-600 transition-colors" aria-label="LinkedIn">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-600 transition-colors" aria-label="GitHub">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div class="mt-16 text-center">
          <h3 class="text-2xl font-semibold text-gray-900 mb-8">Need Something Else?</h3>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <a href="#" class="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow group">
              <div class="text-primary-600 group-hover:text-primary-700 font-medium">📚 Documentation</div>
              <div class="text-sm text-gray-600 mt-1">API reference and guides</div>
            </a>
            <a href="#" class="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow group">
              <div class="text-primary-600 group-hover:text-primary-700 font-medium">💬 Community</div>
              <div class="text-sm text-gray-600 mt-1">Developer forums and discussions</div>
            </a>
            <a href="#" class="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow group">
              <div class="text-primary-600 group-hover:text-primary-700 font-medium">📊 Status Page</div>
              <div class="text-sm text-gray-600 mt-1">Service status and uptime</div>
            </a>
            <a href="#" class="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow group">
              <div class="text-primary-600 group-hover:text-primary-700 font-medium">🚀 Get Started</div>
              <div class="text-sm text-gray-600 mt-1">Quick start guide</div>
            </a>
          </div>
        </div>
        
      </div>
    </section>
    
    <FooterSection />
  </div>
</template>

<script setup>
// SEO for Contact page
useHead({
  title: 'Contact Us | Metristack',
  meta: [
    { name: 'description', content: 'Get in touch with Metristack team for sales, support, partnerships, and technical questions about our unified retail API platform.' },
    { name: 'robots', content: 'index, follow' }
  ]
})
</script>

<style scoped>
/* Contact page specific styles */
</style>