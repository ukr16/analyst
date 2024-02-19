const path = require("path");

module.exports = {
  entry: "./index.js", // Change this to your actual entry file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
