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

export const ProjectHeader = styled.div`
  margin-bottom: 4rem;
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
