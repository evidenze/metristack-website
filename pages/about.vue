<template>
  <div>
    <StructuredData />
    <HeaderSection />
    <main class="animate-on-scroll">
      
      <!-- About Hero Section -->
      <section class="relative bg-white overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100"></div>
        <div class="absolute inset-0 bg-plaid-glow opacity-20"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-32 lg:pt-32 lg:pb-40">
          <div class="text-center">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight mb-6 stagger-item">
              Built by developers,
              <span class="text-primary-500">for developers</span>
            </h1>
            <p class="max-w-3xl mx-auto text-xl text-gray-600 mb-16 leading-relaxed stagger-item">
              We experienced the pain of retail integrations firsthand. After months building custom connectors 
              for each platform, we knew there had to be a better way. Metristack is that better way.
            </p>
          </div>
        </div>
      </section>

      <!-- Our Story Section -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="stagger-item">
              <h2 class="text-3xl font-semibold text-gray-900 mb-6">
                The integration nightmare that sparked a solution
              </h2>
              <div class="space-y-6 text-gray-600">
                <p>
                  In 2023, our team was building lending products for retail merchants. We quickly discovered 
                  that every commerce platform—Shopify, Square, Clover, WooCommerce—had different APIs, 
                  different data formats, and different authentication methods.
                </p>
                <p>
                  What should have taken weeks stretched into months. Our engineering team spent more time 
                  wrestling with API inconsistencies than building the lending features our customers needed.
                </p>
                <p>
                  We realized we weren't alone. Every fintech, analytics, and business tools company was 
                  fighting the same battle—building and maintaining dozens of platform-specific integrations 
                  just to access basic retail data.
                </p>
              </div>
            </div>
            <div class="stagger-item">
              <div class="bg-white rounded-2xl border border-gray-200 shadow-plaid-lg p-8">
                <div class="mb-6">
                  <h3 class="text-xl font-semibold text-gray-900 mb-4">The old way was broken:</h3>
                  <div class="space-y-3">
                    <div class="flex items-center text-red-600">
                      <svg class="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                      </svg>
                      6+ months to integrate major platforms
                    </div>
                    <div class="flex items-center text-red-600">
                      <svg class="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                      </svg>
                      Dedicated engineers for each platform
                    </div>
                    <div class="flex items-center text-red-600">
                      <svg class="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                      </svg>
                      Constant maintenance as APIs change
                    </div>
                    <div class="flex items-center text-red-600">
                      <svg class="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                      </svg>
                      Features delayed by integration work
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Mission Section -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-semibold text-gray-900 mb-6 stagger-item">
              Our mission: Let developers build, not integrate
            </h2>
            <p class="max-w-3xl mx-auto text-xl text-gray-600 stagger-item">
              Every minute spent on API integrations is a minute not spent building the features that 
              drive business value. We're changing that.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center stagger-item">
              <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Speed to market</h3>
              <p class="text-gray-600">
                Launch retail integrations in days, not months. Focus your engineering resources on 
                building differentiated features.
              </p>
            </div>

            <div class="text-center stagger-item">
              <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Reliability first</h3>
              <p class="text-gray-600">
                Enterprise-grade infrastructure handling millions of API calls daily. 99.9% uptime 
                backed by comprehensive monitoring.
              </p>
            </div>

            <div class="text-center stagger-item">
              <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Developer experience</h3>
              <p class="text-gray-600">
                Clean, consistent APIs with comprehensive docs, SDKs, and support. Built by developers 
                who understand your workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-semibold text-gray-900 mb-6 stagger-item">
              Meet the team solving retail integration
            </h2>
            <p class="max-w-3xl mx-auto text-xl text-gray-600 stagger-item">
              We're engineers, product builders, and former founders who've felt the pain of building 
              retail integrations. Now we're solving it for everyone.
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div class="bg-white rounded-2xl border border-gray-200 shadow-plaid-sm p-8 text-center stagger-item hover-lift">
              <div class="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span class="text-2xl font-bold text-white">ES</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Essiene Kanem</h3>
              <p class="text-primary-600 font-medium mb-4">Co-Founder & CEO</p>
              <p class="text-gray-600 text-sm">
                Former fintech founder. Built lending products for 3 years, spent way too much time on integrations.
              </p>
            </div>

            <div class="bg-white rounded-2xl border border-gray-200 shadow-plaid-sm p-8 text-center stagger-item hover-lift">
              <div class="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span class="text-2xl font-bold text-white">JD</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Jane Developer</h3>
              <p class="text-primary-600 font-medium mb-4">Co-Founder & CTO</p>
              <p class="text-gray-600 text-sm">
                Ex-Stripe engineer. Specialized in API design and developer experience at scale.
              </p>
            </div>

            <div class="bg-white rounded-2xl border border-gray-200 shadow-plaid-sm p-8 text-center stagger-item hover-lift">
              <div class="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span class="text-2xl font-bold text-white">MK</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Mike Kim</h3>
              <p class="text-primary-600 font-medium mb-4">Lead Engineer</p>
              <p class="text-gray-600 text-sm">
                Built integrations at 2 unicorn startups. Expert in real-time data syncing and webhooks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Values Section -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-semibold text-gray-900 mb-6 stagger-item">
              Our values guide everything we build
            </h2>
          </div>

          <div class="grid md:grid-cols-2 gap-12">
            <div class="stagger-item">
              <h3 class="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <div class="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <svg class="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                Developer-first thinking
              </h3>
              <p class="text-gray-600 mb-6">
                Every API endpoint, every SDK, every piece of documentation is designed from the developer's 
                perspective. If it's not intuitive for us to use, we rebuild it.
              </p>

              <h3 class="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <div class="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <svg class="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                Radical transparency
              </h3>
              <p class="text-gray-600">
                Clear pricing, no hidden fees, public status pages, and honest communication about what's 
                working and what isn't. Your success depends on our reliability.
              </p>
            </div>

            <div class="stagger-item">
              <h3 class="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <div class="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <svg class="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                Obsess over reliability
              </h3>
              <p class="text-gray-600 mb-6">
                Your customers depend on your product, and your product depends on our API. We treat 
                every millisecond of downtime as a failure of our core mission.
              </p>

              <h3 class="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <div class="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <svg class="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                Long-term partnership
              </h3>
              <p class="text-gray-600">
                We're building infrastructure that powers your business for years, not months. Every 
                decision considers the long-term impact on your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Join Us CTA -->
      <section class="py-20 bg-primary-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-semibold text-gray-900 mb-6 stagger-item">
              Ready to stop building integrations?
            </h2>
            <p class="text-xl text-gray-600 mb-10 stagger-item">
              Join 500+ companies that chose to focus on their core product instead of API maintenance.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center stagger-item">
              <button class="group relative w-full sm:w-auto bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-plaid hover:shadow-plaid-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 btn-hover transform hover:scale-105 active:scale-95">
                Start Building Today
                <svg class="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
              <button class="group relative w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-gray-200 shadow-plaid-sm hover:shadow-plaid focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 hover-lift">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import StructuredData from '~/components/StructuredData.vue'
import HeaderSection from '~/components/HeaderSection.vue'
import FooterSection from '~/components/FooterSection.vue'

// SEO optimization for About page
useHead({
  title: 'About Metristack - Built by Developers for Developers | Retail API',
  meta: [
    { name: 'description', content: 'Learn about Metristack\'s mission to eliminate retail integration pain. Founded by developers who experienced months-long API integrations, we built the unified retail API we wished existed.' },
    { name: 'keywords', content: 'about metristack, retail API team, founders story, developer-first API, retail integration solution, fintech API, commerce platform integration' },
    { property: 'og:title', content: 'About Metristack - Built by Developers for Developers' },
    { property: 'og:description', content: 'Founded by developers who spent months building retail integrations. Now we help 500+ companies launch in days, not months.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://metristack.com/about' }
  ]
})

// Animation on scroll functionality
onMounted(() => {
  // Set up intersection observer for staggered animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
        
        // Trigger stagger animations for child elements
        const staggerItems = entry.target.querySelectorAll('.stagger-item')
        staggerItems.forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity = '1'
            item.style.transform = 'translateY(0)'
          }, index * 100)
        })
      }
    })
  }, observerOptions)

  // Observe all sections for scroll animations
  nextTick(() => {
    const sections = document.querySelectorAll('section')
    sections.forEach((section) => {
      observer.observe(section)
    })

    // Initially hide stagger items
    const staggerItems = document.querySelectorAll('.stagger-item')
    staggerItems.forEach((item) => {
      item.style.opacity = '0'
      item.style.transform = 'translateY(20px)'
      item.style.transition = 'all 0.6s ease-out'
    })
  })
})
</script>