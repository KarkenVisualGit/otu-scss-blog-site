const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCss = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  target: "browserslist",
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
    post: path.resolve(__dirname, "./src/post.js"),
    posts: path.resolve(__dirname, "./src/posts.js"),
    feedback: path.resolve(__dirname, "./src/feedback.js"),
  },
  output: {
    path: path.resolve(__dirname, "./prod"),
    filename: "[name].[contenthash:8].js",
    chunkFilename: "[id].[chunkhash].js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Index Page",
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      title: "Post Page",
      template: path.resolve(__dirname, "./src/post.html"),
      filename: "post.html",
      chunks: ["post"],
    }),
    new HtmlWebpackPlugin({
      title: "Posts Page",
      template: path.resolve(__dirname, "./src/posts.html"),
      filename: "posts.html",
      chunks: ["posts"],
    }),
    new HtmlWebpackPlugin({
      title: "Feedback",
      template: path.resolve(__dirname, "./src/feedback.html"),
      filename: "feedback.html",
      chunks: ["feedback"],
    }),
    new CleanWebpackPlugin(),
    new MiniCss({
      filename: "[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(c|sc|sa|)ss$/i,
        use: [
          MiniCss.loader,
          "css-loader",
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  "autoprefixer",
                  "postcss-preset-env",
                  "at-rule-packer",
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "html-loader",
            options: {
              sources: {
                list: [
                  {
                    tag: "source",
                    attribute: "src",
                    type: "src",
                  },
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.(mp4|webm|ogv)$/,
        type: "asset/resource",
        generator: {
          filename: "videos/[hash][ext][query]",
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name]-[contenthash][ext]",
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name]-[contenthash][ext]",
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.sharpMinify,
          options: {
            encodeOptions: {
              jpeg: {
                quality: 75,
              },
              webp: {
                quality: 85,
              },
              avif: {
                quality: 85,
              },
              png: {},
              gif: {},
            },
          },
        },
      }),
    ],
  },
};
