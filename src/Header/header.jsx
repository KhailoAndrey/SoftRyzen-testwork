import Logo from 'Logo/logo';
import {
  BtnIcon,
  BtnTouch,
  BurgerBtn,
  Container,
  TouchText,
} from './header.styled';

const Header = () => {
  return (
    <>
      <Container>
        <Logo />
        <BurgerBtn>
          <BtnIcon />
        </BurgerBtn>
        <BtnTouch>
          <TouchText>Get in touch</TouchText>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="7" fill="var(--main-clr-dark-green)" />
          </svg>
        </BtnTouch>
      </Container>
    </>
  );
};

export default Header;
