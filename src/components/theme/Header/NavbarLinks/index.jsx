import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Wrapper } from "./styles";

export default ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href="#about">About</AnchorLink>
    <AnchorLink href="#experience">Experience</AnchorLink>
    <AnchorLink href="#projects">Projects</AnchorLink>
    <AnchorLink href="#interests">Interests</AnchorLink>
    <AnchorLink href="#contact">Contact</AnchorLink>
    <a href="https://blog.frasermince.com">Blog</a>
  </Wrapper>
);
