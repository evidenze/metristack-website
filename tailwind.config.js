/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        // Stripe-inspired primary blues
        primary: {
          50: '#f0f2ff',
          100: '#e6e8ff',
          200: '#d1d9ff',
          300: '#aab9ff',
          400: '#8b95ff',
          500: '#635bff', // Stripe's signature purple-blue
          600: '#5a4fcf',
          700: '#4c44b3',
          800: '#3c3591',
          900: '#0a2540', // Stripe's dark blue
        },
        // Refined grays with perfect contrast ratios (Stripe-style)
        gray: {
          25: '#fcfcfd',
          50: '#f9fafb',
          100: '#f2f4f7',
          200: '#eaecf0',
          300: '#d0d5dd',
          400: '#98a2b3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#1d2939',
          900: '#101828',
        },
        // Stripe's success and accent colors
        success: {
          50: '#ecfdf3',
          100: '#d1fadf',
          500: '#12b76a',
          600: '#039855',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      fontFamily: {
        // Rethink Sans from Google Fonts with fallbacks
        sans: ['"Rethink Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.5' }],
        'lg': ['1.125rem', { lineHeight: '1.5' }],
        'xl': ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.33' }],
        '3xl': ['1.875rem', { lineHeight: '1.27' }],
        '4xl': ['2.25rem', { lineHeight: '1.22' }],
        '5xl': ['3rem', { lineHeight: '1.17' }],
        '6xl': ['3.75rem', { lineHeight: '1.13' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
      },
      boxShadow: {
        // Stripe's signature shadow system
        'stripe-sm': '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        'stripe': '0px 1px 3px 0px rgba(16, 24, 40, 0.1), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)',
        'stripe-md': '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
        'stripe-lg': '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
        'stripe-xl': '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
      },
      backgroundImage: {
        // Stripe-style gradients
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'stripe-gradient': 'linear-gradient(135deg, #635bff 0%, #7c3aed 100%)',
        'stripe-subtle': 'linear-gradient(135deg, #f9fafb 0%, #f2f4f7 100%)',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.025em',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}