<template>
  <footer class="bg-flutterwave-navy text-white relative overflow-hidden">
    <!-- Gradient overlay for extra depth -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
        <!-- Company Info -->
        <div class="lg:col-span-1">
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-12 h-12 flex items-center justify-center">
              <img 
                src="~/assets/images/logo.png" 
                alt="Metristack Logo" 
                class="w-full h-full object-contain"
              />
            </div>
            <span class="text-2xl font-bold font-mono">Metristack</span>
          </div>
          <p class="text-text-muted leading-relaxed mb-6 max-w-sm">
            The unified API for retail data. Connect to any commerce platform with a single integration.
          </p>
          
          <!-- Social Links -->
          <div class="flex space-x-4">
            <a href="#" class="text-text-muted hover:text-accent-blue transition-colors duration-200">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
            <a href="#" class="text-text-muted hover:text-accent-purple transition-colors duration-200">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" class="text-text-muted hover:text-accent-orange transition-colors duration-200">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Use Cases Links -->
        <div>
          <h3 class="text-lg font-semibold font-mono mb-6">Use Cases</h3>
          <ul class="space-y-4">
            <li><NuxtLink to="/use-cases/fintech-lending" class="text-text-muted hover:text-accent-orange transition-colors duration-200">Fintech & Lending</NuxtLink></li>
            <li><NuxtLink to="/use-cases/marketing-automation" class="text-text-muted hover:text-accent-pink transition-colors duration-200">Marketing Automation</NuxtLink></li>
            <li><NuxtLink to="/use-cases/inventory-management" class="text-text-muted hover:text-accent-green transition-colors duration-200">Smart Inventory</NuxtLink></li>
            <li><NuxtLink to="/use-cases/retail-analytics" class="text-text-muted hover:text-accent-purple transition-colors duration-200">Retail Analytics</NuxtLink></li>
            <li><NuxtLink to="/use-cases/customer-experience" class="text-text-muted hover:text-accent-blue transition-colors duration-200">Customer Experience</NuxtLink></li>
            <li><a href="#pricing" class="text-text-muted hover:text-accent-teal transition-colors duration-200">Pricing</a></li>
          </ul>
        </div>
        
        <!-- Developers Links -->
        <div>
          <h3 class="text-lg font-semibold font-mono mb-6">Developers</h3>
          <ul class="space-y-4">
            <li><a href="#" class="text-gray-400 hover:text-accent-blue transition-colors duration-200">Documentation</a></li>
            <li><a href="#" class="text-gray-400 hover:text-accent-green transition-colors duration-200">Quick Start</a></li>
            <li><a href="#" class="text-gray-400 hover:text-accent-purple transition-colors duration-200">Code Examples</a></li>
            <li><a href="#" class="text-gray-400 hover:text-accent-orange transition-colors duration-200">Status Page</a></li>
            <li><a href="#" class="text-gray-400 hover:text-accent-pink transition-colors duration-200">Community</a></li>
            <li><a href="#" class="text-gray-400 hover:text-accent-teal transition-colors duration-200">GitHub</a></li>
          </ul>
        </div>
        
        <!-- Company Links -->
        <div>
          <h3 class="text-lg font-semibold font-mono mb-6">Company</h3>
          <ul class="space-y-4">
            <li><a href="#" class="text-gray-400 hover:text-accent-green transition-colors duration-200">About</a></li>
            <li><a href="#" class="text-gray-400 hover:text-accent-orange transition-colors duration-200">Blog</a></li>
            <li><a href="#" class="text-gray-400 hover:text-accent-blue transition-colors duration-200">Careers</a></li>
            <li><NuxtLink to="/contact" class="text-gray-400 hover:text-accent-purple transition-colors duration-200">Contact</NuxtLink></li>
            <li><NuxtLink to="/developer-policy" class="text-gray-400 hover:text-accent-pink transition-colors duration-200">Developer Policy</NuxtLink></li>
            <li><NuxtLink to="/end-user-policy" class="text-gray-400 hover:text-accent-teal transition-colors duration-200">End-User Policy</NuxtLink></li>
          </ul>
        </div>
      </div>
      
      <!-- Newsletter Signup -->
      <div class="border-t border-gray-800 pt-12 mb-12">
        <div class="max-w-md">
          <h3 class="text-lg font-semibold font-mono mb-4">Stay updated</h3>
          <p class="text-gray-400 mb-6">Get the latest product updates and developer news.</p>
          <form class="flex gap-3">
            <input 
              type="email" 
              placeholder="Enter your email"
              class="flex-1 bg-primary-800 border border-primary-600 rounded-lg px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
            >
            <button 
              type="submit"
              class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <!-- Bottom Footer -->
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col lg:flex-row justify-between items-center">
          <div class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-4 lg:mb-0">
            <p class="text-gray-400 text-sm">
              © 2025 Metristack. All rights reserved.
            </p>
            <div class="flex items-center space-x-6 text-sm">
              <NuxtLink to="/privacy-policy" class="text-gray-400 hover:text-accent-blue transition-colors duration-200">Privacy Policy</NuxtLink>
              <NuxtLink to="/terms-of-use" class="text-gray-400 hover:text-accent-purple transition-colors duration-200">Terms of Use</NuxtLink>
              <NuxtLink to="/security" class="text-gray-400 hover:text-accent-red transition-colors duration-200">Security</NuxtLink>
            </div>
          </div>
          
          <!-- Status Indicator -->
          <div class="flex items-center space-x-2 text-sm">
            <div class="w-2 h-2 bg-accent-green rounded-full"></div>
            <span class="text-text-muted">All systems operational</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component with comprehensive links and newsletter signup
</script>