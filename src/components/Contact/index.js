import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Wrapper, Heading } from "./contact.css.js";

import { Details } from "./details";
import { Map } from "./map";

export const Contact = ({ title, offices }) => {
  const mapRef = useRef(null);
  const mainRef = useRef(null);
  const satRef = useRef(null);
  const refs = [mainRef, satRef];

  return (
    <>
      <Wrapper>
        <Heading size="H2">{title}</Heading>
        {offices.map((office, idx) => (
          <Details
            key={idx + "office"}
            title={office.title}
            mail={office.mail}
            address={office.address}
            phone={office.phone}
            markerRef={refs[idx]}
            mapRef={mapRef}
          />
        ))}
      </Wrapper>
      <Map offices={offices} mapRef={mapRef} markerRefs={refs} />
    </>
  );
};

Contact.propTypes = {
  title: PropTypes.string.isRequired,
  offices: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      mail: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      coordinates: PropTypes.exact({
        latitude: PropTypes.string.isRequired,
        longitude: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired
};
