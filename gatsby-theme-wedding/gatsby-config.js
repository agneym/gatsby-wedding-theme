module.exports = ({ contentPath = "data" }) => ({
  siteMetadata: {
    title: "Samantha & Nathaniel",
    description: "Something",
    author: "Agney Menon"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: contentPath
      }
    },
    {
      resolve: "gatsby-transformer-json",
      options: {
        typeName: "EventJson"
      }
    },
    {
      resolve: "gatsby-plugin-tinacms",
      options: {
        plugins: ["gatsby-tinacms-git", "gatsby-tinacms-json"]
      }
    }
  ]
});
