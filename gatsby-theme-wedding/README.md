# Gatsby Wedding Theme

## Quick Start

```shell
mkdir my-site
cd my-site
yarn init
# install gatsby-theme-minimal and it's dependencies
yarn add gatsby react react-dom @agney/gatsby-theme-wedding
```

Then add the theme to your `gatsby-config.js`.

```javascript
module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-wedding",
      options: {}
    }
  ]
};
```

That's it, you can now run your gatsby site using

```shell
yarn gatsby develop
```
