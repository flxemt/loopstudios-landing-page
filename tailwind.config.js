/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'dark-gray': 'hsl(0, 0%, 55%)',
        'very-dark-gray': 'hsl(0, 0%, 41%)',
        hover: 'rgba(255, 255, 255, 0.75071)'
      }
    },
    fontSize: {
      h1: '4.5rem', // 72px
      h2: '3rem', // 48px
      h3: '2.5rem', // 40px
      h4: '2rem', // 32px
      h5: '1.5rem', // 24px
      body: '0.9375rem' // 15px
    },
    lineHeight: {
      h1: '4.125rem', // 66px
      h2: '3rem', // 48px
      h3: '2.25rem', // 38px
      h4: '2rem', // 32px
      h5: '1.5rem', // 24px
      body: '1.5625rem' // 15px
    },
    gridTemplateColumns: {
      default: 'repeat(auto-fill, minmax(240px, 1fr))'
    },
    backgroundImage: {
      'hero-mobile': 'url("/mobile/image-hero.jpg")',
      'hero-desktop': 'url("/desktop/image-hero.jpg")',
      'overlay-mobile': 'linear-gradient(90deg, rgb(0 0 0 / 50%) 0%, rgb(0 0 0 / 0%) 70%)',
      'overlay-desktop': 'linear-gradient(0deg, rgb(0 0 0 / 50%) 0%, rgb(0 0 0 / 0%) 70%)'
    },
    fontFamily: {
      serif: ['Alata', 'sans-serif'],
      heading: ['Josefin Sans', 'sans-serif']
    },
    maxWidth: {
      container: '1110px'
    },
    screens: {
      xl: '1110px'
    }
  },
  plugins: []
}
