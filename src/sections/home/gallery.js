import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Gallery } from "../../components/Gallery/home.js";

const HomeGallery = () => {
  const {
    homeJson: {
      Gallery: { title, button, items }
    }
  } = useStaticQuery(graphql`
    query {
      homeJson {
        Gallery {
          title
          button
          items {
            id
            name
            desc
            image {
              desktop {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              tablet {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              mobile {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return <Gallery title={title} button={button} items={items} />;
};

export default HomeGallery;
