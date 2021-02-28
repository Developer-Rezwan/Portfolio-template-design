const path = require('path');
module.exports = {
  entry: "./index.js",
  output: {
    filename: 'bundle.js',
    path : path.resolve(__dirname , 'dist')
  }, 
  mode: 'development',
  devServer: {
    contentBase: [
      path.join(__dirname),
      path.join(__dirname, 'public'),
    ],
    port: 8000,
    open : true,
    compress: true,
  },
  module: {
    rules: [
      {
         test: [/\.s[ac]ss$/i , /\.css$/i],
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
    ],
  },
}