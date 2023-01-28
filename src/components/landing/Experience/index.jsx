import React from "react";
import Container, { OuterContainer } from "components/common/Container";
import { Wrapper, Header } from "./styles";

export default () => {
  return (
    <Wrapper as={Container} id="about">
      <Header>
        <h2>Experience</h2>
        <ul>
          <li>Welcome (YC W20) - 2021 - 2022</li>
          <li>Unchart - 2020 - 2021</li>
          <li>thoughtbot - 2018 - 2020</li>
          <li>Spiceworks - 2015 - 2018</li>
        </ul>
      </Header>
    </Wrapper>
  );
};
