module.exports = {
  presets: ['@babel/preset-env'], // @babel/preset-env���g���Ƃ����ݒ�
  env: {
    test: {
      plugins: ['@babel/transform-react-jsx'], // test���́Atransform-es2015-modules-commonjs�����܂���B
    },
  },
}