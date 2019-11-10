module.exports = {
  siteMetadata: {
    title: "Something & Something",
    description: "Something",
    author: "Agney Menon"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "data"
      }
    },
    {
      resolve: "gatsby-transformer-json",
      options: {
        typeName: "Event"
      }
    }
  ]
};
