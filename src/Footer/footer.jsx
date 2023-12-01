import Logo from 'Logo/logo';
import { Linee } from 'utils/line.styled';
import {
  ArrowRight,
  FBIcon,
  FooterBtnUp,
  FooterInfo,
  FooterLogoBox,
  FooterSocial,
  FooterText,
  InstaIcon,
  Wrapper,
} from './footer.styled';

const Footer = () => {
  return (
    <>
      <Wrapper>
        <Linee />
        <FooterLogoBox>
          <Logo />
          <FooterBtnUp>
            <ArrowRight />
          </FooterBtnUp>
        </FooterLogoBox>
        <FooterSocial>
          <FBIcon />
          <InstaIcon />
        </FooterSocial>
        <FooterInfo>
          <FooterText>
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </FooterText>
          <FooterText>office@ecosolution.com</FooterText>
          <FooterText>ecosolution © 2023</FooterText>
        </FooterInfo>
      </Wrapper>
    </>
  );
};

export default Footer;
