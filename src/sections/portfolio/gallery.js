import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Gallery } from "../../components/Gallery";

const PortfolioGallery = () => {
  const {
    portfolioJson: { items }
  } = useStaticQuery(graphql`
    query {
      portfolioJson {
        items {
          date
          title
          image {
            tablet {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            desktop {
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
  `);
  return <Gallery items={items} />;
};

export default PortfolioGallery;
