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
  return (
    <Wrapper>
      <Head>
        <Heading size="H2">{title}</Heading>
        <Link to="p">
          <DesktopBtn text={button} />
        </Link>
      </Head>
      <Content>
        {items.map((props, idx) => (
          <Item
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
