const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Arch Studio`,
    author: `Francis Luigie Quenano`,
    description: `A 4 page portfolio with mapping API`,
    keywords: [
      "frontendmentor",
      "Studio",
      "advanced",
      "portfolio",
      "flquenano"
    ],
    siteURL: `https://photosnap-plum.vercel.app/`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `FrontendMentor`,
        short_name: `FEMentor`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#6abecd`,
        display: `standalone`,
        icon: "src/static/favicon-32x32.png"
      }
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["Spartan:wght@500;600;700 "]
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `content`),
        name: `content`
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 80
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-svg`
  ]
};
