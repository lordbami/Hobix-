/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // NASA Standard Colors
        'nasa-dark-blue': '#001F3F',
        'nasa-light-blue': '#1A4D7A',
        'nasa-text-primary': '#F0F0F0',
        'nasa-text-secondary': '#B0B0B0',
        'nasa-bg': '#0A0E27',
        
        // Alugoke Brand (African Orange)
        'alugoke-orange': '#FF6B35',
        
        // Status Colors
        'status-success': '#2ECC40',
        'status-warning': '#FF9500',
        'status-critical': '#FF0000',
        'status-go': '#2ECC40',
        'status-no-go': '#FF0000',
        
        // Beidou Theme (Red for GNSS overlays)
        'beidou-red': '#C60C30',
        'beidou-accent': '#FF1744',
        
        // Subsystem Colors
        'subsys-thermal': '#FF3333',
        'subsys-power': '#00FF99',
        'subsys-comms': '#9D4EDD',
        'subsys-adcs': '#00D9FF',
        'subsys-data-blue': '#00D9FF',
        'subsys-grid': '#1A4D7A',
      },
      fontFamily: {
        'sans': ['IBM Plex Sans', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['11px', { lineHeight: '1.6' }],
        'sm': ['12px', { lineHeight: '1.6' }],
        'base': ['14px', { lineHeight: '1.6' }],
        'lg': ['16px', { lineHeight: '1.6' }],
        'xl': ['18px', { lineHeight: '1.6' }],
        '2xl': ['24px', { lineHeight: '1.6' }],
        '3xl': ['32px', { lineHeight: '1.6' }],
      },
      letterSpacing: {
        'tight': '0.01em',
        'normal': '0.02em',
        'wide': '0.05em',
      },
      lineHeight: {
        'snug': '1.6',
        'normal': '1.6',
        'relaxed': '1.8',
      },
      animation: {
        'pulse-red': 'pulse-red 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fault-appear': 'fault-appear 0.3s ease-in',
        'gate-advance': 'gate-advance 1s ease-out',
        'mcq-reveal': 'mcq-reveal 0.4s ease-out',
        'health-drain': 'health-drain 0.5s ease-in',
      },
      keyframes: {
        'pulse-red': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'fault-appear': {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'gate-advance': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'mcq-reveal': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'health-drain': {
          '0%': { width: '100%' },
          '100%': { width: '0%' },
        },
      },
      boxShadow: {
        'nasa-glow': '0 0 20px rgba(0, 217, 255, 0.3)',
        'beidou-glow': '0 0 20px rgba(198, 12, 48, 0.3)',
        'fault-glow': '0 0 30px rgba(255, 51, 51, 0.5)',
      },
      backgroundImage: {
        'gradient-nasa': 'linear-gradient(135deg, #001F3F 0%, #0A0E27 100%)',
        'gradient-beidou': 'linear-gradient(135deg, #C60C30 0%, #FF1744 100%)',
        'grid-pattern': 'radial-gradient(circle at 1px 1px, #1A4D7A 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '20px 20px',
      },
    },
  },
  plugins: [
    // Custom plugin for accessibility helpers
    function ({ addUtilities }) {
      const newUtilities = {
        '.high-contrast': {
          '@apply bg-white text-black': {},
        },
        '.sr-only': {
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          borderWidth: '0',
        },
        '.font-dyslexia': {
          fontFamily: 'IBM Plex Sans, sans-serif',
          letterSpacing: '0.02em',
          lineHeight: '1.6',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
