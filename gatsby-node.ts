const path = require("path");
const webpack = require("webpack");

exports.onCreateWebpackConfig = ({ actions }) => {
  // make sure to have the process.env configs from the .env file available on the /src/* files
  actions.setWebpackConfig({
    resolve: {
      // https://www.gatsbyjs.org/docs/add-custom-webpack-config/#absolute-imports
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};
