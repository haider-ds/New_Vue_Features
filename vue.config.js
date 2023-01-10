const { defineConfig } = require("@vue/cli-service");
const Dotenv = require('dotenv-webpack');
module.exports = defineConfig({
  transpileDependencies: ["quasar"],
  configureWebpack: {
    plugins: [new Dotenv()],
  },
  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false,
    },
  },
});
