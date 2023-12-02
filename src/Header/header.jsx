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
  return (
    <>
      <Container id='header'>
        <Logo />
        <BurgerBtn>
          <BtnIcon />
        </BurgerBtn>
        <BtnTouch>
          <TouchText>Get in touch</TouchText>
          <TouchArrow />
        </BtnTouch>
      </Container>
    </>
  );
};

export default Header;
