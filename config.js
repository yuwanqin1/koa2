entry: {
    main: [
      'webpack-hot-middleware/client?noInfo=true&reload=true', // 生产环境的入口建议把这个去掉
      './src/index.tsx'
    ]
  }
plugins: [
    new webpack.HotModuleReplacementPlugin()
]