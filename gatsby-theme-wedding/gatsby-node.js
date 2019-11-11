const fs = require("fs");

exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || "data";
  if (!fs.existsSync(contentPath)) {
    reporter.info(`Creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

exports.createPages = async ({ actions }, options) => {
  const basePath = options.basePath || "/";
  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/Landing.js")
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  console.log("on create webpack config gets called!!!!!!!!!!!!!!!!!");
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /sal.js/,
            use: loaders.null()
          }
        ]
      }
    });
  }
};
