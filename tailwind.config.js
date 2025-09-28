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
        // FLUTTERWAVE-INSPIRED COLOR PALETTE

        // Primary brand colors
        primary: {
          50: '#f8fafd', // Light background
          100: '#f1f5f9', // Lighter background
          200: '#e2e8f0', // Light surface
          300: '#cbd5e1', // Medium surface
          400: '#94a3b8', // Medium gray
          500: '#00abab', // Flutterwave teal
          600: '#262c55', // Flutterwave deep blue
          700: '#1d1d1d', // Dark text
          800: '#0a0e27', // Flutterwave navy
          900: '#000000', // Black
        },
        // Secondary color variations
        secondary: {
          50: '#f6f9fc',
          100: '#f2f2f2',
          200: '#f9f9f9',
          300: '#828282',
          400: '#313131',
          500: '#00abab', // Teal
          600: '#006aff', // Bright blue
          700: '#262c55', // Deep blue
          800: '#0a0e27', // Navy
          900: '#000000', // Black
        },
        // Accent colors from Flutterwave palette
        accent: {
          orange: '#fb9129',
          green: '#35a162',
          purple: '#6672c7',
          blue: '#006aff',
          pink: '#eb7da7',
          red: '#eb5757',
          teal: '#00abab',
          'soft-pink': '#f1a5c2',
          'pale-green': '#dcf5e7',
          peach: '#f3b08c',
        },
        // Background colors
        background: {
          primary: '#ffffff',
          secondary: '#f8fafd',
          tertiary: '#f6f9fc',
          muted: '#f9f9f9',
          dark: '#313131',
          light: '#f2f2f2',
        },
        // Text colors
        text: {
          primary: '#000000',
          secondary: '#1d1d1d',
          muted: '#828282',
          inverse: '#ffffff',
        },
        // Status colors aligned with Flutterwave palette
        success: {
          50: '#dcf5e7',
          100: '#dcf5e7',
          500: '#35a162',
          600: '#35a162',
        },
        warning: {
          50: '#fff8e6',
          100: '#fff0cc',
          500: '#fb9129',
          600: '#fb9129',
        },
        error: {
          50: '#ffebeb',
          100: '#ffd6d6',
          500: '#eb5757',
          600: '#eb5757',
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
        // Flutterwave-inspired gradients
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'flutterwave-hero': 'linear-gradient(135deg, #0a0e27 0%, #262c55 25%, #00abab 50%, #35a162 75%, #fb9129 100%)',
        'flutterwave-teal': 'linear-gradient(135deg, #00abab 0%, #35a162 100%)',
        'flutterwave-navy': 'linear-gradient(135deg, #0a0e27 0%, #262c55 100%)',
        'flutterwave-accent': 'linear-gradient(90deg, #00abab 0%, #35a162 50%, #fb9129 100%)',
        'flutterwave-subtle': 'linear-gradient(135deg, #f8fafd 0%, #f6f9fc 100%)',
        'flutterwave-glow': 'radial-gradient(600px circle at 50% 50%, rgba(0, 171, 171, 0.15), transparent 40%)',
        // Original Flutterwave gradients from website
        'flutterwave-globe': 'linear-gradient(200deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)',
        'flutterwave-cards': 'linear-gradient(107.69deg, rgba(44, 21, 63, 0.4) 16.54%, rgba(214, 163, 255, 0) 97.51%)',
        'flutterwave-steps': 'linear-gradient(81.57deg, rgba(0, 175, 175, 0.3) -2.42%, rgba(105, 255, 162, 0.3) 102.07%)',
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