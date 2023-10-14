const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const glob = require("glob");

const pages = glob.sync("src/*.html");

module.exports = {
  mode: "development",
  target: "web",
  devtool: "source-map",
  entry: {
    index: path.resolve(__dirname, "./src/index.js"),
    post: path.resolve(__dirname, "./src/post.js"),
    posts: path.resolve(__dirname, "./src/posts.js"),
    feedback: path.resolve(__dirname, "./src/feedback.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[contenthash:8].js",
    chunkFilename: "[id].[chunkhash].js",
    clean: true,
  },
  plugins: [
    ...pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          title: path.basename(page, path.extname(page)),
          template: page,
          filename: path.basename(page),
          chunks: [path.basename(page, path.extname(page))],
        })
    ),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(c|sc|sa|)ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
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
        test: /\.(jpe?g|png|gif|svg|webp)$/,
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
  devServer: {
    compress: false,
    open: true,
    port: 9000,
    hot: true,
    allowedHosts: "all",
  },
};
