import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import  arrowRight  from '../images/swiper-arrow-right.svg';


export const Wrapper = styled.div`
width: 320px;
`
export const CasesHeadBox = styled.div`
    margin-bottom: 19px;
`
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

`
export const LineVert = styled.div`
    display: none;
`
export const SwiperButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    background-color: var(--main-bg-clr);
`
export const SwiperNumberSlide = styled.p`
    
`
export const SwipeBtnLeft = styled.button`
    width: 66px;
    height: 66px;
    padding: 15px;
    border-radius: 100px;
border: 1px solid var(--main-clr-dark-green);
margin-right: 12px;
margin-left: auto;
`
export const SwipeBtnRight = styled.button`    
    width: 66px;
    height: 66px;
    padding: 15px;
    border-radius: 100px;
border: 1px solid var(--main-clr-dark-green);
margin-right: 0;
`
export const SwiperItem = styled.div`
    background-color: var(--second-bg-clr);
    height: 318px;
    `
export const SwiperImg = styled.img`
    width: 320px;
    height: 168px;
    margin-bottom: 24px;
    `
export const SwiperInfo = styled.div`
padding: 0 12px 12px;
    
`
export const SwiperTitleBox = styled.div`
    display: flex;
    justify-content: space-between;
margin-bottom: 21px;
    width: 296px;
`
export const SwiperItemTitle = styled.p`
    color: var(--main-clr-dark-green);
text-align: justify;
font-family: Fira Sans;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.72px;
width: 175px;
`

export const Arrow = styled(ReactSVG).attrs({
  src: arrowRight,
})`
  width: ${(props) => (props.size ? props.size + 'px' : '36px')};
  height: ${(props) => (props.size ? props.size + 'px' : '36px')};
transform: ${(props) => {
        let transformValue = '';
    if (props.rotateRight) transformValue += 'rotateY(180deg) ';
    if (props.rotateUpLeft) transformValue += 'rotate(135deg) ';
    if (props.scale) transformValue += `scale(${props.scale})`;
        return transformValue.trim() || 'none';
    }};
    transform-origin: center;

  @media screen and (min-width: 1280px) {
  }
`;

export const SwiperItemBtnLink = styled.button`
    width: 60px;
    height: 60px;
    display: inline-flex;
padding: 16px;
align-items: center;
justify-content: center;
/* gap: 10px; */
border: none;
border-radius: 100px;
background: var(--main-clr-green);
transform-origin: center;

`

export const SwiperInfoBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
`

export const SwiperItemText = styled.p`
color: var(--main-clr-dark-green);
text-align: justify;
font-family: Fira Sans;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.48px;
`
export const SwiperItemDate = styled.p`
    color: var(--main-clr-dark-green);
text-align: right;
font-family: Fira Sans;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.48px;
`

