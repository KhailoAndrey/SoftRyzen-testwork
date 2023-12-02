import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import arrowRight from '../images/arrow-right.svg';
import mainImgMob from '../images/wind-turbine_mob.png';
import mainImgTab from '../images/wind-turbine_tab.png';
import mainImgDesk from '../images/wind-turbine_desk.png';

export const Wrapper = styled.div`
  margin: 0;
  margin-top: 146px;
  @media screen and (min-width: 768px) {
    margin-top: 164px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 200px;
  }
`;

export const MainInfo = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
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

export const TextTitle = styled.h1`
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
  text-align: left;
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
width: 32px;
height: 32px;
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

export const MainContacts = styled.div`
  align-items: center;
  margin-top: 24px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    margin-top: 16px;
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 12px;
  }
`;
export const MainAddress = styled.p`
  color: var(--main-clr-dark-green);
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;
export const MainMail = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: var(--main-clr-dark-green);
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
`;

export const MainNotation = styled.p`
  display: none;
  color: var(--main-clr-dark-green);
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-left: 50px;
    margin-right: 0;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 167px;
  }
`;

export const MainImage = styled.img`
  width: 320px;
  height: 200px;
  flex-shrink: 0;
  background: url(${mainImgMob}), lightgray 50%;
  background-position: center;
  background-size: cover;
  margin: 36px 0;
  @media screen and (min-width: 768px) {
    margin: 40px 0 100px;
    background: url(${mainImgTab}), lightgray 50%;
    height: 350px;
    width: 709px;
  }
  @media screen and (min-width: 1280px) {
    background: url(${mainImgDesk}), lightgray 50%;
    width: 1240px;
    height: 524px;
    flex-shrink: 0;
    margin: 36px 0 120px;
  }
`;
