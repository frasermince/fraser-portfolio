import styled from "styled-components";
import colors from "tokens/colors";

export const Wrapper = styled.div`
  background-image: ${({ color = colors.primaryOverlay }) =>
    `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 614.6 768.3'%3E%3Cpath fill='%23${color}' d='M.6 0s10.7 250 168.6 299.6 380 198 441.4 302.2S.6 830.4.6 733-.7-.5.6 0z' data-name='Path 29'/%3E%3C/svg%3E")`};
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`;

export const ListWrapper = styled.div`
  padding: 4rem 0;
`;

export const SkillsWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

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

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;

export const Content = styled.div`
  flex: 3;
  padding: 1rem 0;
  padding-left: 2rem;
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
