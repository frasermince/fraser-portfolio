import SEO from "components/common/SEO";
import Intro from "components/landing/Intro";
import Projects from "components/landing/Projects";
import Interests from "components/landing/Interests";
import Contact from "components/landing/Contact";
import About from "components/landing/About";
import Experience from "components/landing/Experience";
import Footer from "components/theme/Footer";
import Layout from "components/common/Layout";

import type { HeadFC, PageProps } from "gatsby";

import * as React from "react";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Interests />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
