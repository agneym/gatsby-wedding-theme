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

## Changing the theme

Create a `theme.js` file at `src/@agney/gatsby-theme-wedding/components/theme.js`

```js
const theme = {};

export default theme;
```

[See full properties here](https://github.com/BoyWithSilverWings/gatsby-wedding-theme/blob/master/gatsby-theme-wedding/src/components/theme.js)

If you need to keep existing theme and edit some of the values:

```js
import merge from "lodash.merge";
import theme from "@agney/gatsby-theme-wedding";

export default merge({}, theme, {
  colors: {
    primary: "blue"
  }
});
```

## Replacing Components

[Docs](https://www.gatsbyjs.org/docs/themes/shadowing/)
