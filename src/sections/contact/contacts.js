import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Contact } from "../../components/Contact";

const Contacts = () => {
  const {
    contactJson: {
      details: { title, offices }
    }
  } = useStaticQuery(graphql`
    query {
      contactJson {
        details {
          title
          offices {
            title
            mail
            address
            phone
            coordinates {
              latitude
              longitude
            }
          }
        }
      }
    }
  `);

  return <Contact title={title} offices={offices} />;
};

export default Contacts;
