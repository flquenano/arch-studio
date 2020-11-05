import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { useTrail } from "react-spring";
import { useInView } from "react-intersection-observer";
import { Heading } from "../Heading";
import { Item } from "./item";
import {
  Wrapper,
  Head,
  Content,
  MobileBtn,
  DesktopBtn
} from "./gallery.css.js";

export const Gallery = ({ title, button, items }) => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

  const trail = useTrail(items.length, {
    from: { opacity: 0 },
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(10%)"
  });

  return (
    <Wrapper ref={ref}>
      <Head>
        <Heading size="H2">{title}</Heading>
        <Link to="/portfolio">
          <DesktopBtn text={button} />
        </Link>
      </Head>
      <Content>
        {trail.map((props, idx) => (
          <Item
            trail={props}
            number={items[idx].id}
            key={items[idx].id}
            name={items[idx].name}
            desc={items[idx].desc}
            image={items[idx].image}
          />
        ))}
      </Content>
      <Link to="/portfolio">
        <MobileBtn text={button} />
      </Link>
    </Wrapper>
  );
};

Gallery.propTypes = {
  title: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};
