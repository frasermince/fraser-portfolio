import SEO from "components/common/SEO";
import Intro from "components/landing/Intro";
import Projects from "components/landing/Projects";
import Skills from "components/landing/Skills";
import Contact from "components/landing/Contact";
import Footer from "components/theme/Footer";

import type { HeadFC, PageProps } from "gatsby";

import * as React from "react";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <SEO />
      <Intro />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
