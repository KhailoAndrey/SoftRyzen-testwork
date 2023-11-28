import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import arrowRight from '../images/arrow-right.svg';

export const Wrapper = styled.div`
  margin: 0;
  margin-top: 146px;
  @media screen and (min-width: 768px) {
    margin-top: 164px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 200px;
  }
`;
export const MainTitle = styled.div`
  width: 320px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    width: 301px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1280px) {
    width: 485px;
  }
`;

export const TextTitle = styled.p`
  color: var(--main-clr-dark-green);
  font-family: Oswald;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 48px;
    width: 301px;
  }
  @media screen and (min-width: 1280px) {
    width: 485px;
    font-size: 64px;
    line-height: 64px;
  }
`;

export const Paragraph = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  max-width: 320px;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    max-width: 342px;
    gap: 43px;
    align-items: start;
    justify-content: space-between;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1280px) {
    max-width: 363px;
    margin-left: 300px;
    margin-right: auto;
  }
`;
export const MainText = styled.p`
  color: var(--main-clr-dark-green);
  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const ArrowRight = styled(ReactSVG).attrs({
  src: arrowRight,
})`
  svg {
    circle {
      fill: var(--main-clr-green);
      transition: fill 0.3s ease;
    }
    path {
      stroke: var(--main-clr-dark-green);
      transition: stroke 0.3s ease;
    }
  }
`;

export const TextMore = styled.p`
  color: var(--main-clr-dark-green);
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.64px;
`;

export const BtnMore = styled.button`
  cursor: pointer;
  display: flex;
  height: 39px;
  padding: 4px 4px 4px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 500px;

  border: 1px solid var(--main-clr-green);
  background-color: var(--main-bg-clr);
  &:hover {
    background: var(--main-clr-dark-green);
    ${TextMore} {
      color: var(--main-clr-green);
    }
  }
`;

export const Line = styled.div`
  width: 320px;
  height: 1px;
  flex-shrink: 0;
  background: #97d28b;
  @media screen and (min-width: 768px) {
    width: 708px;
  }
  @media screen and (min-width: 1280px) {
    width: 1240px;
  }
`;
