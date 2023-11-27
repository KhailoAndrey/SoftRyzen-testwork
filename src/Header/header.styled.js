import styled from 'styled-components';
import buttonIcon from '../images/menu.svg';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0;
  background-color: var(--main-bg-clr);
  position: sticky;
  top: 0;
  z-index: 50;

  @media screen and (min-width: 768px) {
    height: 68px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 16px;
  }
`;

export const BurgerBtn = styled.button`
  cursor: pointer;
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: var(--second-clr-light-green);
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: var(--main-clr-green);
  }
`;
export const BtnIcon = styled.img`
  width: 16px;
  height: 16px;
  content: url(${buttonIcon});
`;
