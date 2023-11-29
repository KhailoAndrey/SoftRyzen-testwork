import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import open from '../images/openness.svg';
import resp from '../images/responsibility.svg';
import inno from '../images/innovation.svg';
import qual from '../images/quality.svg';
import mens_tab from '../images/values-mens_tab.png';
import man_tab from '../images/values-men_tab.png';
import mens_desk from '../images/values-mens_desk.png';
import man_desk from '../images/values-men_desk.png';

export const Wrapper = styled.div`
  width: 320px;
  margin-bottom: 36px;
  @media screen and (min-width: 768px) {
    width: 709px;
    margin-bottom: 100px;
  }
  @media screen and (min-width: 1280px) {
    width: 1242px;
    margin-bottom: 120px;
  }
`;
export const ValuesBox = styled.div`
@media screen and (min-width: 768px){
    display: flex;
}
`;

export const ValuesTitle = styled.h1`
  color: var(--main-clr-dark-green);
  font-family: Oswald;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 36px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 48px;
  }
`;

export const ValuesText = styled.p`
  color: var(--main-clr-dark-green);
  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  margin-bottom: 36px;
`;
export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 48px;
  }
`;

export const OpennessIcon = styled(ReactSVG).attrs({
  src: open,
})`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  @media screen and (min-width: 1280px) {
    transform: scale(1.5);
  }
`;
export const ResponsibilityIcon = styled(ReactSVG).attrs({
  src: resp,
})`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  @media screen and (min-width: 1280px) {
    transform: scale(1.5);
  }
`;
export const InnovationIcon = styled(ReactSVG).attrs({
  src: inno,
})`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  @media screen and (min-width: 1280px) {
    transform: scale(1.5);
  }
`;
export const QualityIcon = styled(ReactSVG).attrs({
  src: qual,
})`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  @media screen and (min-width: 1280px) {
    transform: scale(1.5);
  }
`;

export const GridItem = styled.div`
  width: 148px;
  height: 197px;
  flex-shrink: 0;
  background: var(--second-bg-clr);
  padding: 13px 12px 12px;
  @media screen and (min-width: 768px) {
    width: 159px;
    height: 197px;
  }
  @media screen and (min-width: 1280px) {
    width: 274px;
    height: 339px;
    padding: 48px 24px;
  }
`;

export const GridTitleBox = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 33px;
  @media screen and (min-width: 768px) {
    margin-bottom: 51px;
  }
  @media screen and (min-width: 1280px) {
    height: 48px;
    margin-bottom: 94px;
  }
`;

export const GridTitle = styled.p`
  color: var(--main-clr-dark-green);
  font-family: Oswald;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 32px;
    line-height: 48px;
  }
`;

export const GridText = styled.p`
  color: var(--main-clr-dark-green);
  text-align: justify;
  font-family: Fira Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;
  margin-top: 12px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const GridImageMens = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 346px;
    height: 197px;
    flex-shrink: 0;
    background: url(${mens_tab}), lightgray 50%;
    background-position: center;
    background-size: cover;

    &:nth-child(3) {
      grid-column: span 2;
    }
  }
  @media screen and (min-width: 1280px) {
    background: url(${mens_desk});
    width: 596px;
    height: 339px;
  }
`;
export const GridImageMen = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 346px;
    height: 197px;
    flex-shrink: 0;
    background: url(${man_tab}), lightgray 50%;
    background-position: center;
    background-size: cover;

    &:nth-child(4) {
      grid-column: span 2;
    }
  }
  @media screen and (min-width: 1280px) {
    background: url(${man_desk});
    width: 596px;
    height: 339px;
  }
`;
