module.exports = () => ({
  plugins: [
    require('tailwindcss'),
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 0
    })
  ]
})
