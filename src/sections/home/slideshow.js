import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { SlideShow as SD } from "../../components/SlideShow";

const HomeSlideShow = () => {
  const {
    homeJson: { SlideShow }
  } = useStaticQuery(graphql`
    query {
      homeJson {
        SlideShow {
          heading
          text
          image {
            desktop {
              childImageSharp {
                fluid(maxWidth: 1100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tablet {
              childImageSharp {
                fluid(maxWidth: 573) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            mobile {
              childImageSharp {
                fluid(maxWidth: 375) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);
  return <SD slideShow={SlideShow} />;
};

export default HomeSlideShow;
