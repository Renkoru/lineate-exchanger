const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: "node",
  entry: {
      app: ["./backend/server.js"]
  },
  output: {
    path: path.resolve(__dirname, "./dist/backend"),
    filename: "server.js"
  },
    node: {
        __dirname: false,
    },
  externals: [nodeExternals()],
};
