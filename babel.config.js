module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['ie >= 11'],
        },
      },
    ],
  ],
};
