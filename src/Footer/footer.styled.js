import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import arrowUp from '../images/arrow-up.svg';
import fbimg from '../images/facebook.svg';
import instaimg from '../images/instagram.svg';

export const Wrapper = styled.div`
  width: 320px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const FooterLogoBox = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;
export const FBIcon = styled(ReactSVG).attrs({
  src: fbimg,
})`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const InstaIcon = styled(ReactSVG).attrs({
  src: instaimg,
})`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
`;
export const FooterText = styled.p`
  color: #173d33;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;
