const fs = require("fs");

exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = "data";
  if (!fs.existsSync(contentPath)) {
    reporter.info(`Creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
}

exports.createPages = async ({ actions }) => {
  const basePath = "/";
  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/Landing.js"),
  });
}