import React from "react";
import Container from "components/common/Container";
import TalkIllustration from "components/illustrations/TalkIllustration";
import ContactForm from "./ContactForm";
import { Wrapper, Details, Thumbnail } from "./styles";
import image from "assets/ancient_ai.png";

export default () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={image} />
    </Thumbnail>

  </Wrapper>
);
