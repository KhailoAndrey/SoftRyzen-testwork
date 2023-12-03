import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import phone from '../images/call.svg';
import envelope from '../images/sms.svg';
import map from '../images/map.svg';
import fbimg from '../images/facebook.svg';
import instaimg from '../images/instagram.svg';

export const Wrapper = styled.div`
  width: 320px;
  margin: 36px 0 36px;
  @media screen and (min-width: 768px) {
    width: 708px;
    margin-top: 100px;
  }
  @media screen and (min-width: 1280px) {
    width: 1240px;
    margin-top: 120px;
  }
`;
export const ContactsTitle = styled.h2`
  color: var(--main-clr-dark-green);
  font-family: Oswald;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 36px;
    line-height: 36px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 120px;
    font-size: 48px;
    line-height: 48px;
  }
`;

export const ContactsModule = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const ContactsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const ContactsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Subtitle = styled.p`
  color: var(--main-clr-dark-green);
  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;
export const PhoneIcon = styled(ReactSVG).attrs({
  src: phone,
})`
  width: 24px;
  height: 24px;
  stroke: var(--main-clr-dark-green);
  cursor: pointer;
  &:hover {
    stroke: var(--main-clr-green);
  }
`;
export const MailIcon = styled(ReactSVG).attrs({
  src: envelope,
})`
  stroke: var(--main-clr-dark-green);
  width: 24px;
  height: 24px;
  cursor: pointer;
  &:hover {
    stroke: var(--main-clr-green);
  }
`;
export const MapIcon = styled(ReactSVG).attrs({
  src: map,
})`
  stroke: var(--main-clr-dark-green);
  width: 24px;
  height: 24px;
  cursor: pointer;
  &:hover {
    stroke: var(--main-clr-green);
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
  &:hover {
    stroke: var(--main-clr-green);
    fill: var(--main-clr-green);
  }
`;

export const InstaIcon = styled(ReactSVG).attrs({
  src: instaimg,
})`
  stroke: var(--main-clr-dark-green);
  width: 24px;
  height: 24px;
  cursor: pointer;
  &:hover {
    stroke: var(--main-clr-green);
  }
`;
export const ContactsInfoBlock = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const SocialBlock = styled.div`
  width: 48px;
  height: 48px;
  padding: 12px;
`;
export const ContactsText = styled.p`
  color: var(--main-clr-dark-green);
  text-align: justify;
  font-family: Fira Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
  width: 212px;
  @media screen and (min-width: 1280px) {
    font-size: 24px;
    width: 466px;
  }
`;

export const FormBox = styled.div`
  width: 320px;
  height: 559px;
  flex-shrink: 0;
  background: var(--second-bg-clr);
  padding: 36px 12px;
  @media screen and (min-width: 768px) {
    width: 342px;
    padding: 36px 24px;
  }
  @media screen and (min-width: 1280px) {
    width: 596px;
    padding: 48px;
  }
`;
