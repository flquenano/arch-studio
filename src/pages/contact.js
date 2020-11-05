import React from "react";
import { SEO } from "../components/SEO.js";
import { Layout } from "../components/layout";
import { Hero, Contacts, Connect } from "../sections/contact";

const About = () => {
  return (
    <Layout title="Contact">
      <SEO title="Contact" />
      <Hero />
      <Contacts />
      <Connect />
    </Layout>
  );
};

export default About;
