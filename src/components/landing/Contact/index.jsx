import React from "react";
import Container from "components/common/Container";
import TalkIllustration from "components/illustrations/TalkIllustration";
import ContactForm from "./ContactForm";
import { Wrapper, Details, Thumbnail } from "./styles";
import image from "assets/ancient_ai.png";
import { StaticImage } from "gatsby-plugin-image"


export default () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <StaticImage src="../../../assets/ancient_ai.png" alt="Ancient High Tech City" />
    </Thumbnail>

  </Wrapper>
);
