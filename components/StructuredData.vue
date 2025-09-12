<template>
  <!-- This component injects structured data into the document head -->
</template>

<script setup>
// Inject structured data schemas into document head
useHead({
  script: [
    // Organization Schema
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Metristack",
        "description": "Unified API for retail data integration - connect to any commerce platform",
        "url": "https://metristack.com",
        "logo": "https://metristack.com/logo.png",
        "sameAs": [
          "https://twitter.com/metristack",
          "https://linkedin.com/company/metristack",
          "https://github.com/metristack"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "support@metristack.com",
          "contactType": "Customer Service"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "San Francisco",
          "addressRegion": "CA",
          "addressCountry": "US"
        }
      })
    },
    // SoftwareApplication Schema
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Metristack API",
        "description": "Unified retail data API that connects to 20+ commerce platforms including Shopify, Square, Clover, and more",
        "url": "https://metristack.com",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web-based",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Free sandbox environment with paid tiers starting at $49/month"
        },
        "provider": {
          "@type": "Organization",
          "name": "Metristack"
        },
        "featureList": [
          "Unified retail data API",
          "20+ platform integrations",
          "Real-time data synchronization",
          "Webhook support",
          "RESTful endpoints",
          "Developer-friendly documentation"
        ]
      })
    },
    // FAQPage Schema
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you charge per API call?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No! We charge per connected store, not per API call. Make as many requests as you need without worrying about usage limits or surprise bills."
            }
          },
          {
            "@type": "Question", 
            "name": "What counts as a connected store?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "One merchant's store on one platform. If a merchant has Shopify + Square, that's 2 connected stores. Most merchants have 1-3 platforms."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a setup fee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No setup fees, no onboarding charges. Start with our free sandbox and only pay when you connect real merchant stores."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get volume discounts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Contact our sales team for custom pricing if you expect to connect 100+ stores or need enterprise features. We offer significant volume discounts."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly can I get started?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most developers are up and running within 15 minutes using our sandbox environment. Production integrations typically take 1-3 business days depending on the platforms."
            }
          },
          {
            "@type": "Question",
            "name": "What support do you provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "All plans include documentation and community support. Paid plans get email support, and Enterprise customers receive dedicated support with phone and video calls."
            }
          }
        ]
      })
    },
    // Service Schema
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Retail Data Integration API",
        "description": "Unified API service for connecting to multiple retail and commerce platforms",
        "provider": {
          "@type": "Organization",
          "name": "Metristack"
        },
        "serviceType": "API Integration Service",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "API Plans",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Sandbox",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Free development environment"
            },
            {
              "@type": "Offer", 
              "name": "Startup",
              "price": "49",
              "priceCurrency": "USD",
              "description": "Per connected store/month"
            },
            {
              "@type": "Offer",
              "name": "Enterprise",
              "description": "Custom pricing with volume discounts"
            }
          ]
        }
      })
    }
  ]
})
</script>