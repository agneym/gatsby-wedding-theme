# Gatsby Wedding Theme Workspace

A simple and easy wedding theme using Gatsby and Styled Components.

<a href="https://badge.fury.io/js/%40agney%2Fgatsby-theme-wedding"><img src="https://badge.fury.io/js/%40agney%2Fgatsby-theme-wedding.svg" alt="npm version" height="18"></a>
<a href="#badge">
<img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
</a>

[Demo](https://vigorous-ptolemy-fe8a70.netlify.com/event)

## Manual Setup

In your `gatsby-config.js`:

```bash
npm i --save-dev @agney/gatsby-theme-wedding

# OR #
yarn add --dev @agney/gatsby-theme-wedding
```

```js
module.exports = {
  plugins: [
    {
      resolve: `@agney/gatsby-theme-wedding`,
      options: {
        contentPath: "occasion", // Tell the theme where your data is.
        basePath: "/event" // Tell the theme which URL to render the theme at.
      }
    }
  ]
};
```

## Adding the Data

[Data Format](https://github.com/BoyWithSilverWings/gatsby-wedding-theme/blob/master/gatsby-theme-wedding/data/event.json) - You can provide data in JSON format.

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

## Replacing Components (Shadowing)

[Docs](https://www.gatsbyjs.org/docs/themes/shadowing/)

## Contributing

This theme makes use of [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)

```
yarn
yarn workspace example develop
```
