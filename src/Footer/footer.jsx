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
  Mail,
  Wrapper,
} from './footer.styled';

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const Footer = () => {
  return (
    <>
      <Linee />
      <Wrapper>
        <FooterLogoBox>
          <Logo />
          <FooterSocial>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <FBIcon />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <InstaIcon />
            </a>
          </FooterSocial>
          <FooterBtnUp onClick={handleScrollToTop}>
            <ArrowRight />
          </FooterBtnUp>
        </FooterLogoBox>
        <FooterSocial>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <FBIcon />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <InstaIcon />
          </a>
        </FooterSocial>
        <FooterInfo>
          <FooterText>
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </FooterText>
          <Mail href="mailto:office@ecosolution.com">
            office@ecosolution.com
          </Mail>
          <FooterText>ecosolution © 2023</FooterText>
        </FooterInfo>
      </Wrapper>
    </>
  );
};

export default Footer;
