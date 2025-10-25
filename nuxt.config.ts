// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  // SEO and Meta Configuration
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Metristack - Unified API for Retail Data | Connect Any Commerce Platform',
      meta: [
        // Primary Meta Tags
        { name: 'title', content: 'Metristack - Unified API for Retail Data | Connect Any Commerce Platform' },
        { name: 'description', content: 'Connect to any retail platform with a single API. Metristack provides unified access to sales, inventory, customers, and orders from 20+ commerce platforms. Start building in minutes, not months.' },
        { name: 'keywords', content: 'retail API, commerce API, unified API, retail data, ecommerce integration, POS API, Shopify API, Square API, retail analytics, commerce data' },
        { name: 'author', content: 'Metristack' },
        { name: 'robots', content: 'index, follow' },
        { name: 'language', content: 'English' },
        { name: 'theme-color', content: '#635bff' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://metristack.com' },
        { property: 'og:title', content: 'Metristack - Unified API for Retail Data' },
        { property: 'og:description', content: 'Connect to any retail platform with a single API. Access sales, inventory, customers, and orders from 20+ commerce platforms in one unified interface.' },
        { property: 'og:image', content: 'https://metristack.com/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:site_name', content: 'Metristack' },
        { property: 'og:locale', content: 'en_US' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://metristack.com' },
        { name: 'twitter:title', content: 'Metristack - Unified API for Retail Data' },
        { name: 'twitter:description', content: 'Connect to any retail platform with a single API. Access sales, inventory, customers, and orders from 20+ commerce platforms.' },
        { name: 'twitter:image', content: 'https://metristack.com/twitter-image.png' },
        { name: 'twitter:creator', content: '@metristack' },
        { name: 'twitter:site', content: '@metristack' },
        
        // Additional SEO
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'msapplication-TileColor', content: '#635bff' },
        { name: 'apple-mobile-web-app-title', content: 'Metristack' },
        { name: 'application-name', content: 'Metristack' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'canonical', href: 'https://metristack.com' }
      ]
    }
  },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  
  googleFonts: {
    families: {
      'Inter': [300, 400, 500, 600, 700, 800],
      'Martian Mono': [300, 400, 500, 600, 700, 800]
    },
    display: 'swap',
    prefetch: false,
    preconnect: false,
    preload: false,
    download: true,
    base64: false
  },
  
  components: {
    global: true,
    dirs: [
      '~/components'
    ]
  },
  
  // Performance optimizations
  nitro: {
    compressPublicAssets: true,
    minify: true,
  },
  
  // Vite optimizations for Core Web Vitals
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'vue-vendor': ['vue', '@vue/runtime-core']
          }
        }
      }
    },
    optimizeDeps: {
      include: ['vue', '@vue/runtime-core']
    }
  },
  
  // CSS optimization
  css: ['~/assets/css/transitions.css'],
  
  // Runtime config for environment variables
  runtimeConfig: {
    public: {
      siteUrl: 'https://metristack.com'
    }
  }
})
