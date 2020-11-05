import React from "react";
import PropTypes from "prop-types";
import { useTrail, config } from "react-spring";
import { useInView } from "react-intersection-observer";
import { Item } from "./item";
import { WrapperIdx as Wrapper, Content } from "./gallery.css.js";

export const Gallery = ({ items }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const trail = useTrail(items.length, {
    from: { opacity: 0 },
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(10%)",
    config: config.gentle
  });
  return (
    <Wrapper ref={ref}>
      <Content>
        {trail.map((props, idx) => (
          <Item
            trail={props}
            number={items[idx].id}
            key={idx + "galleryItem"}
            name={items[idx].title}
            desc={items[idx].date}
            image={items[idx].image}
          />
        ))}
      </Content>
    </Wrapper>
  );
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          desktop: PropTypes.object,
          tablet: PropTypes.object,
          mobile: PropTypes.object
        })
      )
    })
  )
};
