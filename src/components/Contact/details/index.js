import React from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  Content,
  Heading,
  Text,
  Button,
  ButtonText,
  Arrow
} from "./details.css.js";

export const Details = ({ title, mail, address, phone, mapRef, markerRef }) => {
  return (
    <Wrapper>
      <Content>
        <Heading>{title}</Heading>
        <Text>Mail : {mail}</Text>
        <Text>Address : {address}</Text>
        <Text>Phone : {phone}</Text>
      </Content>
      <Button
        onClick={() => {
          markerRef.current.openPopup();
          mapRef.current.scrollIntoView({
            behavior: "smooth",
            block: "end"
          });
        }}
      >
        <ButtonText>View on Map</ButtonText>
        <Arrow />
      </Button>
    </Wrapper>
  );
};

Details.propTypes = {
  title: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};
