import React from "react";
import Container, { OuterContainer } from "components/common/Container";
import { Wrapper, Header } from "./styles";

export default () => {
  return (
    <OuterContainer id="about">
      <Wrapper as={Container}>
        <Header>
          <h2>About</h2>
          <p>
            As a Senior Fullstack Engineer and ambitious Machine Learning
            Researcher, I am passionate about personal growth and expanding my
            knowledge. In recent years, I have focused on mastering the field of
            Deep Reinforcement Learning and Natural Language Processing. My
            current endeavors include engaging in cutting-edge research projects
            and actively seeking out new career opportunities.
          </p>
          <p>
            In my free time, I am deeply interested in the fields of politics,
            economics, and urbanism. I enjoy running and staying active. Reading
            fiction and non-fiction literature is one of my favorite pastimes.
          </p>
        </Header>
      </Wrapper>
    </OuterContainer>
  );
};
