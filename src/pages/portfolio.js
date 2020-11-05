import React from "react";
import { SEO } from "../components/SEO.js";
import { Layout } from "../components/layout";
import { Gallery } from "../sections/portfolio";

const Home = () => (
  <Layout title="portfolio">
    <SEO title="Porfolio" />
    <Gallery />
  </Layout>
);

export default Home;
