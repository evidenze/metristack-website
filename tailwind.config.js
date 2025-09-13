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
        // Plaid-inspired color palette
        primary: {
          50: '#f0f9ff', // Light cyan background
          100: '#e0f2fe', // Lighter cyan
          200: '#bae6fd', // Light cyan
          300: '#7dd3fc', // Medium cyan
          400: '#38bdf8', // Bright cyan
          500: '#0891b2', // Plaid's primary teal
          600: '#0e7490', // Darker teal
          700: '#155e75', // Dark teal
          800: '#164e63', // Very dark teal
          900: '#0a2540', // Plaid's signature navy
        },
        // Secondary blue palette
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Plaid's refined grays
        gray: {
          25: '#fcfcfd',
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        // Plaid accent colors
        accent: {
          cyan: '#06b6d4',
          teal: '#14b8a6',
          blue: '#3b82f6',
          indigo: '#6366f1',
          purple: '#8b5cf6',
          pink: '#ec4899',
        },
        // Status colors
        success: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981',
          600: '#059669',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
        }
      },
      fontFamily: {
        // Instrument Sans from Google Fonts with fallbacks
        sans: ['"Instrument Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
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
        // Plaid's refined shadow system
        'plaid-sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'plaid': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'plaid-md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'plaid-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'plaid-xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        'plaid-inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'plaid-glow': '0 0 0 1px rgb(8 145 178 / 0.1), 0 4px 6px -1px rgb(8 145 178 / 0.1)',
      },
      backgroundImage: {
        // Plaid-inspired gradients
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'plaid-network': 'linear-gradient(101deg, #07578C 25.49%, #0E94D8 55.78%, #42F0CD 86.17%)',
        'plaid-radial-teal': 'radial-gradient(circle at top left, #40EED0 2.7%, #2EBBF5 102.04%)',
        'plaid-hero': 'linear-gradient(135deg, #0891b2 0%, #06b6d4 25%, #3b82f6 50%, #6366f1 75%, #8b5cf6 100%)',
        'plaid-subtle': 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
        'plaid-dark': 'linear-gradient(135deg, #0a2540 0%, #164e63 50%, #0e7490 100%)',
        'plaid-accent': 'linear-gradient(90deg, #06b6d4 0%, #14b8a6 50%, #10b981 100%)',
        'plaid-glow': 'radial-gradient(600px circle at 50% 50%, #0891b240, transparent 40%)',
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