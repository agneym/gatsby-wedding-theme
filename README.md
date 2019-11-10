# Gatsby Wedding Theme Workspace

## Manual Setup

In your `gatsby-config.js`:

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-wedding`,
      options: {
        contentPath: "occasion", // Tell the theme where your data is.
        basePath: "/event" // Tell the theme which URL to render the theme at.
      }
    }
  ]
};
```

# Changing the theme

Create a `theme.js` file at `src/gatsby-theme-wedding/components/theme.js`
