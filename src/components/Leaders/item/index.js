import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSpring } from "react-spring";

import {
  Wrapper,
  Img,
  ImgWrapper,
  ProfileInfo,
  Name,
  Position,
  SNS,
  Twitter,
  LinkedIn,
  ItemOverlay
} from "./item.css.js";
export const Profile = ({ snsHover, image, name, position }) => {
  const [isHover, setIsHover] = useState(false);
  const overlay = useSpring({
    from: {
      opacity: 0
    },
    opacity: isHover ? 1 : 0
  });

  const sns = (
    <SNS>
      <LinkedIn $ishover={isHover} />
      <Twitter $ishover={isHover} />
    </SNS>
  );
  return (
    <Wrapper>
      <ImgWrapper>
        {snsHover ? (
          <ItemOverlay
            style={overlay}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {sns}
          </ItemOverlay>
        ) : undefined}
        <Img fluid={image.childImageSharp.fluid} />
      </ImgWrapper>
      <ProfileInfo>
        <Name size="H3">{name}</Name>
        <Position>{position}</Position>
        {snsHover ? undefined : sns}
      </ProfileInfo>
    </Wrapper>
  );
};

Profile.propTypes = {
  snsHover: PropTypes.bool.isRequired,
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
};
