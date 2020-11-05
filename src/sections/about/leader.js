import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Leaders } from "../../components/Leaders";

const AboutLeaders = () => {
  const {
    aboutJson: {
      leaders: { title, profiles }
    }
  } = useStaticQuery(graphql`
    query {
      aboutJson {
        leaders {
          title
          profiles {
            name
            position
            image {
              childImageSharp {
                fluid(maxWidth: 350, quality: 75) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);
  return <Leaders title={title} profiles={profiles} />;
};

export default AboutLeaders;
