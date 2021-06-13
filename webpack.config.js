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
          {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-object-rest-spread']
        }
      }
      },
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
      {
        test: require.resolve("underscore"),
        loader: "expose-loader",
        options: {
          exposes: [
            "_.map|map",
            {
              globalName: "_.reduce",
              moduleLocalName: "reduce",
            },
            {
              globalName: ["_", "filter"],
              moduleLocalName: "filter",
            },
          ],
        },
      },
    ],
  },
}