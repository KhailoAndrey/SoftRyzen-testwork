import Logo from 'Logo/logo';
import {
  BtnIcon,
  BtnTouch,
  BurgerBtn,
  Container,
  TouchArrow,
  TouchText,
} from './header.styled';

const Header = () => {
  const handleScroll = () => {
    const sectionId = 'contacts';
    const section = document.getElementById(sectionId);

    if (section) {
      const headerHeight = 70;
      const sectionRect = section.getBoundingClientRect();

      window.scrollTo({
        top: sectionRect.top + window.scrollY - headerHeight,
        left: 0,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      <Container id="header">
        <Logo />
        <BurgerBtn>
          <BtnIcon />
        </BurgerBtn>
        <BtnTouch onClick={handleScroll}>
          <TouchText>Get in touch</TouchText>
          <TouchArrow />
        </BtnTouch>
      </Container>
    </>
  );
};

export default Header;
