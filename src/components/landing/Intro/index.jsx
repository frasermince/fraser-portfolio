import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Header from "components/theme/Header";
import {StartingContainer} from "components/common/Container";
import Button from "components/common/Button";
import { Wrapper, IntroWrapper, Details, Thumbnail } from "./styles";
import { StaticImage } from "gatsby-plugin-image"


export default () => {
  const {
    content: {
      frontmatter: { title, description, action }
    }
  } = useStaticQuery(graphql`
    query {
      content: markdownRemark(frontmatter: { section: { eq: "intro" } }) {
        frontmatter {
          title
          description
          action
        }
      }
    }
  `);
  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={StartingContainer}>
        <Details>
          <h1>{title}</h1>
          <h4>{description}</h4>
          <Button as={AnchorLink} href="#contact">
            {action}
          </Button>
        </Details>
        <Thumbnail>
          <StaticImage height="550" src="../../../assets/round_abstract_final.png" alt="Circular Abstract AI Illustration" />
          {/* <StaticImage  src="../../../assets/round_abstract_final.png" alt="Circular Abstract AI Illustration" /> */}
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
