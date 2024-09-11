const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const fs = require("fs");
const path = require("path");
const glob = require("glob");

const mode = process.env.NODE_ENV || "development";
const devMode = mode === "development";
const target = devMode ? "web" : "browserslist";

const HTML_FILES = glob.sync("./src/*.html");
const pages = HTML_FILES.map((page) => {
  return new HtmlWebpackPlugin({
    template: path.resolve(__dirname, page),
    filename: path.basename(page),
    chunks: [path.basename(page, ".html"), "app"],
    minify: false,
  });
});

const videoSourcePath = path.resolve(__dirname, "./", "src/files/");
const videoDestPath = path.resolve(__dirname, "./", "app/files/");

if (fs.existsSync(videoSourcePath)) {
  const copyPlugin = new CopyPlugin({
    patterns: [
      {
        from: videoSourcePath,
        to: videoDestPath,
      },
    ],
  });

  if (!module.exports.plugins) {
    module.exports.plugins = [];
  }

  module.exports.plugins.push(copyPlugin);
} else {
  console.warn(
    `Warning: Directory ${videoSourcePath} does not exist. Videos will not be copied.`,
  );
}

const INCLUDE_PATTERN =
  /<include\s+src=["'](\.\/)?([^"']+)["'](?:\s+data-text='([^']+)')?\s*><\/include>/g;

const { JSDOM } = require("jsdom");

function processNestedHtml(content, loaderContext, resourcePath = "") {
  let fileDir =
    resourcePath === ""
      ? path.dirname(loaderContext.resourcePath)
      : path.dirname(resourcePath);

  function replaceHtml(match, pathRule, src, dataText) {
    if (pathRule === "./") {
      fileDir = loaderContext.context;
    }
    const filePath = path.resolve(fileDir, src);
    loaderContext.dependency(filePath);
    let html = fs.readFileSync(filePath, "utf8");
    try {
      const data = dataText && JSON.parse(dataText);
      const dom = new JSDOM(html);
      const document = dom.window.document;
      if (data) {
        Object.keys(data).forEach((selector) => {
          const elementData = data[selector];
          const elements = document.querySelectorAll(selector);

          if (elements.length > 0) {
            elements.forEach((element) => {
              if (elementData.text) {
                element.textContent = elementData.text;
              }
              if (elementData.html) {
                element.innerHTML = elementData.html;
              }
              if (elementData.class) {
                element.classList.add(elementData.class);
              }
            });
          } else {
            console.error(
              `Elements with selector "${selector}" not found in ${src}`,
            );
          }
        });
      }

      html = document.body.innerHTML;

      html = processNestedHtml(html, loaderContext, filePath);
    } catch (error) {}

    return html;
  }

  content = content.replace(
    INCLUDE_PATTERN,
    (match, pathRule, src, dataText) => {
      return replaceHtml(match, pathRule, src, dataText);
    },
  );

  return content;
}

function processHtmlLoader(content, loaderContext) {
  let newContent = processNestedHtml(content, loaderContext);
  newContent = newContent.replace(
    /(src|data-src)="(.*?)\.(jpg|png)"/gi,
    (match, p1, p2, p3) => {
      return `${p1}="${p2}.webp"`;
    },
  );
  return newContent;
}

module.exports = {
  mode,
  target,
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    open: true,
    hot: true,
    port: "auto",
    host: "local-ip",
    static: path.resolve(__dirname, "app"),
    watchFiles: path.join(__dirname, "src"),
  },

  entry: {
    app: path.resolve(__dirname, "src/js", "app.js"),
    main: path.resolve(__dirname, "src/js/pages", "main.js"),
    "main-ru": path.resolve(__dirname, "src/js/pages", "main-ru.js"),
    cart: path.resolve(__dirname, "src/js/pages", "cart.js"),
    "cart-no-items": path.resolve(
      __dirname,
      "src/js/pages",
      "cart-no-items.js",
    ),
    feed: path.resolve(__dirname, "src/js/pages", "feed.js"),
    "feed-chapter": path.resolve(__dirname, "src/js/pages", "feed-chapter.js"),
    "feed-chapter-2": path.resolve(
      __dirname,
      "src/js/pages",
      "feed-chapter-2.js",
    ),
    "feed-chapter-new": path.resolve(
      __dirname,
      "src/js/pages",
      "feed-chapter-new.js",
    ),
    "feed-chapter-video": path.resolve(
      __dirname,
      "src/js/pages",
      "feed-chapter.js",
    ),
    checkout: path.resolve(__dirname, "src/js/pages", "checkout.js"),
    contacts: path.resolve(__dirname, "src/js/pages", "contacts.js"),
    "contacts-success": path.resolve(__dirname, "src/js/pages", "contacts.js"),
    "error-page-403": path.resolve(
      __dirname,
      "src/js/pages",
      "error-page-chapter.js",
    ),
    "error-page-503": path.resolve(
      __dirname,
      "src/js/pages",
      "error-page-chapter.js",
    ),
    "error-page-505": path.resolve(
      __dirname,
      "src/js/pages",
      "error-page-chapter.js",
    ),
    "item-card": path.resolve(__dirname, "src/js/pages", "item-card.js"),
    "legal-info": path.resolve(__dirname, "src/js/pages", "legal-info.js"),
    team: path.resolve(__dirname, "src/js/pages", "team.js"),
    "team-chapter": path.resolve(__dirname, "src/js/pages", "team-page.js"),
    "order-confirm": path.resolve(
      __dirname,
      "src/js/pages",
      "order-confirm.js",
    ),
    "order-confirm-error": path.resolve(
      __dirname,
      "src/js/pages",
      "order-confirm.js",
    ),
    "not-found": path.resolve(__dirname, "src/js/pages", "not-found.js"),
    match: path.resolve(__dirname, "src/js/pages", "match.js"),
    manifest: path.resolve(__dirname, "src/js/pages", "manifest.js"),
    partners: path.resolve(__dirname, "src/js/pages", "partners.js"),
    merch: path.resolve(__dirname, "src/js/pages", "merch.js"),
  },
  output: {
    path: path.resolve(__dirname, "app"),
    clean: true,
    filename: "js/[name].js",
  },

  plugins: [
    ...pages,
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[name].css",
    }),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [
            "imagemin-gifsicle",
            "imagemin-mozjpeg",
            "imagemin-pngquant",
            "imagemin-svgo",
          ],
        },
      },
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 90,
            overrideExtension: true,
          },
        },
      ],
      detailedLogs: false,
      silent: false,
      strict: true,
    }),
    fs.existsSync(videoSourcePath)
      ? new CopyPlugin({
          patterns: [
            {
              from: path.resolve(__dirname, "./", "src/img/"),
              to: path.resolve(__dirname, "./", "app/img/"),
              noErrorOnMissing: true,
            },
            {
              from: path.resolve(__dirname, "./", "src/fonts/"),
              to: path.resolve(__dirname, "./", "app/fonts/"),
              noErrorOnMissing: true,
            },
            {
              from: videoSourcePath,
              to: videoDestPath,
              noErrorOnMissing: true,
            },
          ],
        })
      : new CopyPlugin({
          patterns: [
            {
              from: path.resolve(__dirname, "./", "src/img/"),
              to: path.resolve(__dirname, "./", "app/img/"),
              noErrorOnMissing: true,
            },
            {
              from: path.resolve(__dirname, "./", "src/fonts/"),
              to: path.resolve(__dirname, "./", "app/fonts/"),
              noErrorOnMissing: true,
            },
          ],
        }),
  ],

  optimization: {
    minimize: !devMode,
    minimizer: [new TerserPlugin()],
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options: {
              sources: false,
              minimize: false,
              esModule: false,
              preprocessor: processHtmlLoader,
            },
          },
        ],
      },
      // изображения
      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              esModule: false,
              modules: {
                auto: true,
                namedExport: true,
                localIdentName: "foo__[name]__[local]",
              },
              url: false,
            },
          },
          "group-css-media-queries-loader",
          "sass-loader",
        ],
      },
      // шрифты
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      //js
      {
        test: /\.(?:js|mjs|cjs)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      //video
      {
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
        generator: {
          filename: "files/[name][ext]",
        },
      },
    ],
  },
};
