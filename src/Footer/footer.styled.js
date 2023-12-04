import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import arrowUp from '../images/arrow-up.svg';
import fbimg from '../images/facebook.svg';
import instaimg from '../images/instagram.svg';

export const Wrapper = styled.div`
  width: 320px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
    padding-bottom: 40px;
    width: 708px;
    gap: 16px;
  }
  @media screen and (min-width: 1280px) {
    width: 1240px;
  }
`;
export const ArrowRight = styled(ReactSVG).attrs({
  src: arrowUp,
})`
  stroke: var(--main-clr-dark-green);
  fill: var(--main-clr-green);
`;

export const FooterBtnUp = styled.button`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 100px;
  background: var(--main-clr-green);
  &:hover {
    background: var(--main-clr-dark-green);
    ${ArrowRight} {
      stroke: var(--main-clr-green);
      fill: var(--main-clr-dark-green);
    }
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const FooterLogoBox = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${FooterSocial} {
    display: none;
  }
  @media screen and (min-width: 768px) {
    ${FooterSocial} {
      display: flex;
      margin-left: auto;
      margin-right: 254px;
    }
  }
  @media screen and (min-width: 1280px) {
    ${FooterSocial} {
      margin-right: 371px;
    }
  }
`;
export const FBIcon = styled(ReactSVG).attrs({
  src: fbimg,
})`
fill: var(--main-clr-dark-green);
stroke: var(--main-clr-dark-green);
  width: 24px;
  height: 24px;
  cursor: pointer;
  &:hover{
    stroke: var(--main-clr-green);
    fill: var(--main-clr-green)
  }
`;

export const InstaIcon = styled(ReactSVG).attrs({
  src: instaimg,
})`
stroke: var(--main-clr-dark-green);
  width: 24px;
  height: 24px;
  cursor: pointer;
  &:hover{
    stroke: var(--main-clr-green)
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0;
    :nth-child(2) {
      margin-right: 50px;
      margin-left: auto;
    }
  }
  @media screen and (min-width: 1280px) {
    :nth-child(2) {
      margin-right: 167px;
    }
  }
`;
export const FooterText = styled.p`
  color: var(--main-clr-dark-green);
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;
