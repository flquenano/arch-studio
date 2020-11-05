import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { CTA } from "../../components/CTA";

const HomeCTA = () => {
  const {
    homeJson: {
      CTA: { title, button, image }
    }
  } = useStaticQuery(graphql`
    query {
      homeJson {
        CTA {
          title
          button
          image {
            mobile {
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
            desktop {
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

  return <CTA title={title} image={image} button={button} />;
};

export default HomeCTA;
