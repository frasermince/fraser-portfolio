import React from "react";
import { defaultTitle } from "data";
import Container from "components/common/Container";
import Social from "./Social";
import { Wrapper, Flex, Details } from "./styles";
export default () =>
  React.createElement(
    Wrapper,
    null,
    React.createElement(
      Flex,
      { as: Container },
      React.createElement(
        Details,
        null,
        React.createElement("h2", null, defaultTitle),
        React.createElement(
          "span",
          null,
          "\u00A9 All rights are reserved | ",
          new Date().getFullYear()
        )
      ),
      React.createElement(Social, null)
    )
  );
