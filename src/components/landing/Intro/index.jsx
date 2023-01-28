import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Header from "components/theme/Header";
import Container from "components/common/Container";
import Button from "components/common/Button";
import {
  Wrapper,
  IntroWrapper,
  Details,
  Thumbnail,
  ImageWrapper,
} from "./styles";
import { StaticImage } from "gatsby-plugin-image";

export default () => {
  const {
    content: {
      frontmatter: { title, description_one, description_two, action },
    },
  } = useStaticQuery(graphql`
    query {
      content: markdownRemark(frontmatter: { section: { eq: "intro" } }) {
        frontmatter {
          title
          description_one
          description_two
          action
        }
      }
    }
  `);
  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details>
          <h1>{title}</h1>
          <h4>{description_one}</h4>
          <h4 style={{ marginBottom: "2rem" }}>{description_two}</h4>
          <Button as={AnchorLink} href="#contact">
            {action}
          </Button>
        </Details>
        <Thumbnail>
          <ImageWrapper>
            <StaticImage
              // height="550"
              src="../../../assets/round_abstract_final.png"
              alt="Circular Abstract AI Illustration"
              style={{ justifyContent: "center" }}
            />
          </ImageWrapper>
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
