import Logo from 'Logo/logo';
import { BtnIcon, BurgerBtn, Container } from './header.styled';

const Header = () => {
  return (
    <>
      <Container>
        <Logo />
        <BurgerBtn>
          <BtnIcon />
        </BurgerBtn>
      </Container>
    </>
  );
};

export default Header;
