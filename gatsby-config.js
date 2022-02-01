require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: process.env.GATSBY_SITE_URI,
    title: process.env.GATSBY_SITE_TITLE,
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_KEY,
        environment: process.env.CONTENTFUL_ENVIRONMENT,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
  ],
};
