/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        emeraldDeep: '#063f35',
        emeraldInk: '#092f2a',
        gold: '#c9a24a',
        goldSoft: '#f2dfad',
        pearl: '#f6f7f4',
        charcoal: '#151515'
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'Poppins', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        luxury: '0 24px 80px rgba(6, 63, 53, 0.14)',
        glow: '0 0 34px rgba(201, 162, 74, 0.26)'
      },
      backgroundImage: {
        'emerald-radial': 'radial-gradient(circle at 20% 20%, rgba(201,162,74,.22), transparent 32%), linear-gradient(135deg, #063f35, #092f2a)'
      }
    }
  },
  plugins: []
};
