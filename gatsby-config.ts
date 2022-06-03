import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `edardev`,
    siteUrl: `https://edar.dev`
  },
  plugins: [
    'gatsby-plugin-top-layout',
    'gatsby-plugin-postcss',
    "gatsby-plugin-image", 
    "gatsby-plugin-react-helmet",
    'gatsby-plugin-mui-emotion',
    "gatsby-plugin-sitemap", 
    "gatsby-plugin-mdx", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};

export default config;
