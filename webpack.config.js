const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/hello-app.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              compilerOptions: {
                module: "es2015"
              }
            }
          }
        ]
      }
    ]
  }
};
