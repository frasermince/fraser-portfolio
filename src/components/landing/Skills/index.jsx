import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Container from "components/common/Container";
import Button from "components/common/Button";
import SkillIllustration from "components/illustrations/SkillIllustration";
import { Wrapper, SkillsWrapper, Details, Thumbnail } from "./styles";
import { StaticImage } from "gatsby-plugin-image"

export default () => {
  const {
    content: {
      frontmatter: { title, description, action }
    }
  } = useStaticQuery(graphql`
    query {
      content: markdownRemark(frontmatter: { section: { eq: "about" } }) {
        frontmatter {
          title
          description
          action
        }
      }
    }
  `);
  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <StaticImage src="../../../assets/abstract_ai_door.png" alt="Man Entering High Tech Door" />
        </Thumbnail>
        <Details>
          <h1>{title}</h1>
          <p>{description}</p>
          <Button as={AnchorLink} href="#contact">
            {action}
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
