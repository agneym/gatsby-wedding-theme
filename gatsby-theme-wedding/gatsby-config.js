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
        typeName: "Event"
      }
    }
  ]
});
