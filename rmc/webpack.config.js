module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    filename: "rmc.js"
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', ".js"]
  }
}