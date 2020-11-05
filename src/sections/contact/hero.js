import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Hero } from "../../components/Hero";

const ContactHero = () => {
  const {
    contactJson: { hero }
  } = useStaticQuery(graphql`
    query {
      contactJson {
        hero {
          title
          content {
            title
            body
          }
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
  `);
  return (
    <Hero
      image={hero.image}
      title={hero.title}
      subTitle={hero.content.title}
      text={hero.content.body}
    />
  );
};

export default ContactHero;
