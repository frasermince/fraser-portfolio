import styled from "styled-components";

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 601px) {
    width: 90%;
  }

  @media (min-width: 993px) {
    width: 80%;
  }
`;

export const StartingContainer = styled.div`
  margin-left: 10%;
  width: 95%;

  @media (min-width: 601px) {
    width: 90%;
  }

  @media (min-width: 993px) {
    width: 90%;
  }
`;

export default Container;
