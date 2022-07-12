const lineClampPlugin = require('@tailwindcss/line-clamp')

const spacing0to100px = Object.fromEntries(
  Array.from({ length: 101 }).map((_, index) => [index, `${index}px`])
)

module.exports = {
  mode: 'jit',
  prefix: 'tw-',

  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  important: true,

  theme: {
    borderWidth: {
      DEFAULT: '1px',
      ...spacing0to100px,
    },

    borderRadius: {
      ...spacing0to100px,
      full: '9999px',
    },

    spacing: {
      ...spacing0to100px,
    },

    fontFamily: {
      sans: ['Daikon', 'sans-serif'],
    },

    fontSize: {
      'sm-100': ['14px', '100%'],
      'sm-120': ['14px', '120%'],
      '16-100': ['16px', '100%'],
      '16-110': ['16px', '110%'],
      '20-120': ['20px', '120%'],
      ...spacing0to100px,
    },

    lineHeight: {
      100: '100%',
      120: '120%',
      140: '140%',
      150: '150%',
      160: '160%',
      170: '170%',
      180: '180%',
    },
  },

  plugins: [lineClampPlugin],
}
