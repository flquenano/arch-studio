import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Wrapper, Content, Heading } from "./leaders.css.js";

import { Profile } from "./item";

export const Leaders = ({ title, profiles }) => {
  const [snsHover, setSnsHover] = useState(false);

  const onScreenChange = ({ matches }) => {
    if (!matches) {
      return setSnsHover(false);
    }
    setSnsHover(true);
  };

  useEffect(() => {
    const snsQuery = window.matchMedia("(min-width: 1024px)");
    snsQuery.addEventListener("change", onScreenChange);
    onScreenChange(snsQuery);
    return () => {
      snsQuery.removeEventListener("change", onScreenChange);
    };
  }, []);

  return (
    <Wrapper>
      <Heading size="H2">{title}</Heading>
      <Content>
        {profiles.map((profile, idx) => (
          <Profile
            key={idx + "profile"}
            snsHover={snsHover}
            name={profile.name}
            position={profile.position}
            image={profile.image}
          />
        ))}
      </Content>
    </Wrapper>
  );
};

Leaders.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      image: PropTypes.object.isRequired
    })
  )
};
