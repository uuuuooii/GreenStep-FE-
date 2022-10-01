module.exports = {
  webpack: function (config, env) {
    config.output.filename = `static/js/[name].[hash:8]-${Date.now()}.js`;
    config.output.chunkFilename = `static/js/[name].[hash:8]-${Date.now()}.chunk.js`;

    const miniCSSExtractPlugin = config.plugins.find(
      (element) => element.constructor.name === "MiniCssExtractPlugin"
    );

    miniCSSExtractPlugin.options.filename = `static/css/[name].[hash:8]-${Date.now()}.css`;
    miniCSSExtractPlugin.options.chunkFilename = `static/css/[name].[hash:8]-${Date.now()}.chunk.css`;
    return config;
  },
};
