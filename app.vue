<template>
  <div>
    <StructuredData />
    <HeaderSection />
    <main class="animate-on-scroll">
      <Transition name="fade" appear>
        <HeroSection />
      </Transition>
      <Transition name="slide-up" appear>
        <ProblemSection />
      </Transition>
      <Transition name="slide-up" appear>
        <SolutionSection />
      </Transition>
      <Transition name="slide-up" appear>
        <BenefitsSection />
      </Transition>
      <Transition name="slide-up" appear>
        <HowItWorksSection />
      </Transition>
      <Transition name="slide-up" appear>
        <UseCasesSection />
      </Transition>
      <Transition name="slide-up" appear>
        <SocialProofSection />
      </Transition>
      <Transition name="slide-up" appear>
        <PricingSection />
      </Transition>
      <Transition name="slide-up" appear>
        <FinalCtaSection />
      </Transition>
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import StructuredData from '~/components/StructuredData.vue'
import HeaderSection from '~/components/HeaderSection.vue'
import HeroSection from '~/components/HeroSection.vue'
import ProblemSection from '~/components/ProblemSection.vue'
import SolutionSection from '~/components/SolutionSection.vue'
import BenefitsSection from '~/components/BenefitsSection.vue'
import HowItWorksSection from '~/components/HowItWorksSection.vue'
import UseCasesSection from '~/components/UseCasesSection.vue'
import SocialProofSection from '~/components/SocialProofSection.vue'
import PricingSection from '~/components/PricingSection.vue'
import FinalCtaSection from '~/components/FinalCtaSection.vue'
import FooterSection from '~/components/FooterSection.vue'

// SEO enhancements
useHead({
  title: 'Metristack - Unified Retail API | Connect Any Commerce Platform',
  meta: [
    { name: 'description', content: 'Connect to Shopify, Square, Clover & 20+ commerce platforms with one unified retail API. Access sales data, inventory, and customer analytics instantly. Free sandbox available.' },
    { name: 'keywords', content: 'retail API, commerce API, unified API, Shopify API, Square API, Clover API, retail data integration, ecommerce API, POS API, retail analytics' }
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