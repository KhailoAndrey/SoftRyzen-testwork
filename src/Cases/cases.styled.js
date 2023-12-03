import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import arrowRight from '../images/swiper-arrow-right.svg';

export const Wrapper = styled.div`
  width: 320px;
  @media screen and (min-width: 768px) {
    width: 709px;
  }
  @media screen and (min-width: 1280px) {
    width: 1240px;
  }
`;
export const CasesHeadBox = styled.div`
  margin-bottom: 19px;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 38px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 120px;
  }
`;
export const CasesTitle = styled.h2`
  width: 264px;
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
    width: 343px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 48px;
    width: 398px;
  }
`;
export const LineVert = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 1px;
    height: 65px;
    flex-shrink: 0;
    background: var(--main-clr-green);
  }
  @media screen and (min-width: 1280px) {
    height: 96px;
  }
`;
export const SwiperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  background-color: var(--main-bg-clr);
  @media screen and (min-width: 768px) {
    width: 343px;
  }
  @media screen and (min-width: 1280px) {
    width: 385px;
  }
`;
export const SwiperNumberSlide = styled.p`
  color: var(--main-clr-dark-green);
  display: flex;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 28px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -1.12px;
  width: 72px;
  @media screen and (min-width: 768px) {
    width: 74px;
  }
`;
export const SwiperNumberTotal = styled.span`
  color: rgba(23, 61, 51, 0.25);
  font-family: Fira Sans;
  font-size: 28px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -1.12px;
`;
export const Arrow = styled(ReactSVG).attrs({
  src: arrowRight,
})`
  width: ${props => (props.size ? props.size + 'px' : '36px')};
  height: ${props => (props.size ? props.size + 'px' : '36px')};
  stroke: var(--main-clr-dark-green);

  transform: ${props => {
    let transformValue = '';
    if (props.rotateright) transformValue += 'rotateY(180deg) ';
    if (props.rotateupleft) transformValue += 'rotate(135deg) ';
    if (props.scale) transformValue += `scale(${props.scale})`;
    return transformValue.trim() || 'none';
  }}; 
  transform-origin: center;
`;

export const SwipeBtnLeft = styled.button`
  width: 66px;
  height: 66px;
  padding: 15px;
  border-radius: 100px;
  border: 1px solid var(--main-clr-dark-green);
  margin-right: 12px;
  margin-left: auto;
  background: var(--main-bg-clr);
  &:hover {
    border: 1px solid var(--main-clr-green);
    ${Arrow} {
      stroke: var(--main-clr-green);
    }
  }
  @media screen and (min-width: 1280px) {
    width: 84px;
    height: 84px;
    padding: 24px;
    margin-right: 24px;
  }
`;
export const SwipeBtnRight = styled.button`
  width: 66px;
  height: 66px;
  padding: 15px;
  border-radius: 100px;
  border: 1px solid var(--main-clr-dark-green);
  margin-right: 0;
  background: var(--main-bg-clr);

  &:hover {
    border: 1px solid var(--main-clr-green);
    ${Arrow} {
      stroke: var(--main-clr-green);
    }
  }
  @media screen and (min-width: 1280px) {
    width: 84px;
    height: 84px;
    padding: 24px;
  }
`;

export const Slides = styled.div`
  display: flex;
  width: 320px;
  @media screen and (min-width: 768px) {
    width: 708px;
  }
  @media screen and (min-width: 1280px) {
    width: 1240px;
  }
`;
export const SwiperItem = styled.div`
  background-color: var(--second-bg-clr);
  height: 318px;
  @media screen and (min-width: 768px) {
    width: 342px;
    height: 322px;
  }
  @media screen and (min-width: 1280px) {
    width: 596px;
    height: 506px;
  }
`;
export const SwiperImg = styled.div`
  margin-bottom: 24px;
  @media screen and (min-width: 1280px) {
    margin-bottom: 36px;
  }
`;

export const SwiperInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 12px 0;
  @media screen and (min-width: 1280px) {
    padding: 0 48px 0;
  }
`;
export const SwiperTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 12px;
  width: 296px;
  min-height: 76px;
  @media screen and (min-width: 768px) {
    width: 318px;
  }
  @media screen and (min-width: 1280px) {
    width: 500px;
    min-height: 94px;
  }
`;
export const SwiperItemTitle = styled.p`
  color: var(--main-clr-dark-green);
  text-align: justify;
  font-family: Fira Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    letter-spacing: -0.8px;
  }
  @media screen and (min-width: 1280px) {
    height: 58px;
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;

export const SwiperItemBtnLink = styled.button`
  width: 60px;
  height: 60px;
  display: inline-flex;
  padding: 16px;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 100px;
  background: var(--main-clr-green);
  transform-origin: center;
  margin-left: 60px;
  &:hover {
    background: var(--main-clr-dark-green);
    ${Arrow} {
      stroke: var(--main-clr-green);
    }
  }
`;

export const SwiperInfoBox = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 12px;
  margin-bottom: 12px;
  @media screen and (min-width: 1280px) {
    margin-top: 24px;
  }
`;

export const SwiperItemText = styled.p`
  color: var(--main-clr-dark-green);
  text-align: justify;
  font-family: Fira Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    letter-spacing: -0.56px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;
export const SwiperItemDate = styled.p`
  color: var(--main-clr-dark-green);
  text-align: right;
  font-family: Fira Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
  @media screen and (min-width: 768px) {
    letter-spacing: -0.56px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;

