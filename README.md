# webpack-basic-setups

It is a repository with various webpack set ups, and here you can find different version with addition of specific webpack settings, and which version is denoting which settings is given below.

run **npm run build** to get build folder

## version 1.0.0

1. Basic integration of webpack in a single page project.

```javascript
module.exports = {
   entry: "./src/index.js",
   output: {
   filename: "bundle.[contenthash].js",
   path: path.resolve(\_\_dirname, "./dist"),
   /_ public path should be the website address or where we are keeping the build" _/
   publicPath: "dist/",
   },
   mode: "none",
}
```

2. Webpack loaders: handling image, css, sass and babel loader basic configuration.

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.png$/,
        use: ["file-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["transform-class-properties"],
          },
        },
      },
    ],
  },
};
```

3. Using Webpack plugin to extract all css files inside a single and seperate css file. Without it all css will be inside .js file header style block (more will be in next version)

```js
module.exports = {
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css",
    }),
  ],
};
```
