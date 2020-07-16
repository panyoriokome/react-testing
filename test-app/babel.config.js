module.exports = {
  presets: ['@babel/preset-env'], // @babel/preset-env‚ğg‚¤‚Æ‚¢‚¤İ’è
  env: {
    test: {
      plugins: ['@babel/transform-react-jsx'], // test‚ÍAtransform-es2015-modules-commonjs‚ğ‚©‚Ü‚¹‚éB
    },
  },
}