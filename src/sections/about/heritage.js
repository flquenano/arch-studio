import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Heritage } from "../../components/Heritage";

const AboutHeritage = () => {
  const {
    aboutJson: {
      heritage: { title, body, image }
    }
  } = useStaticQuery(graphql`
    query {
      aboutJson {
        heritage {
          title
          body {
            p1
            p2
            p3
          }
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return <Heritage image={image} title={title} body={body} />;
};

export default AboutHeritage;
