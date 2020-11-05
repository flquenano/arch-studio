import React from "react";
import { SEO } from "../components/SEO.js";
import { Layout } from "../components/layout";
import { Welcome } from "../components/Welcome";
// import { CTA } from "../components/CTA";
import { Gallery, SlideShow, CTA } from "../sections/home";

const Home = () => (
  <Layout title="HOME">
    <SEO title="Home" />
    <SlideShow />
    <Welcome />
    <CTA />
    <Gallery />
  </Layout>
);

export default Home;
