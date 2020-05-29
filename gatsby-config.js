module.exports = {
  siteMetadata: {
    siteUrl: "https:///www.maximgodigna.com",
    title: `Maxim Godigna`,
    description: ` Diplômé de la haute école de cuisine française Grégoire Ferrandi, 
    le chef Maxim Godigna est le propriétaire du restaurant Galia, 
    123 rue Didot dans le 14ème (face au bâtiment de la Croix-Rouge française).`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/sign.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-168020458-1",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat`, `Cormorant+Garamond\:ital@1`],
        display: "swap",
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
