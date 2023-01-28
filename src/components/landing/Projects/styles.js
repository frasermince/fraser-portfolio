import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 4rem 0;
`;

export const Content = styled.div`
  flex: 3;
  padding: 1rem 0;
  padding-left: 2rem;
`;

export const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectItem = styled.div`
  flex: 1;
`;

export const HeaderFlex = styled.div`
  display: flex;
  marginbottom: "4rem";
  @media (max-width: 960px) {
    flex-direction: column-reverse;
  }
`;

export const ProjectHeader = styled.div`
  margin-bottom: 4rem;
  flex: 1;
  h1 {
    margin-bottom: 2rem;
    font-size: 22pt;
    color: #212121;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 18pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }
`;

export const ProjectContent = styled.div`
  align-items: center;
  display: flex;
  ${({ reversed }) =>
    reversed &&
    `
    flex-direction: row-reverse;
  `}
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    span {
      color: #000;
      margin-left: 0.5rem;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
`;
