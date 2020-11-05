import React from "react";
import { SEO } from "../components/SEO.js";
import { Layout } from "../components/layout";
import { Hero, Heritage, Leaders } from "../sections/about";

const About = () => (
  <Layout title="About">
    <SEO title="About" />
    <Hero />
    <Heritage />
    <Leaders />
  </Layout>
);

export default About;
