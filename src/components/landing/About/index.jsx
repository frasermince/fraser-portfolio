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
            Senior Fullstack Engineer and aspiring ML Researcher. I am
            continuously starting new projects, challenging myself, and learning
            more about the world around me. For the past couple of years I have
            been learning everything I can about deep reinforcement learning and
            natural language processing. Currently working on research projects
            and exploring new job opportunities.
          </p>
          <p>
            Outside of work I am very passionate about politics, economics, and
            urbanism. I love to run and am extremely social. I am always reading
            both fiction and non-fiction books.
          </p>
        </Header>
      </Wrapper>
    </OuterContainer>
  );
};
