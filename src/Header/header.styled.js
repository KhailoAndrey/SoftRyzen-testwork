import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import buttonIcon from '../images/menu.svg';
import arrow from '../images/touch_arrow.svg';

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
    /* padding: 0 32px; */
  }

  @media screen and (min-width: 1280px) {
    padding: 0 16px;
  }
`;

export const BurgerBtn = styled.button`
  cursor: pointer;
  margin-left: auto;
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: var(--second-clr-light-green);
  transition: background 0.3s ease;
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

export const TouchText = styled.p`
  color: var(--main-clr-dark-green);
  transition: color 0.3s ease;

  font-family: FiraSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const TouchArrow = styled(ReactSVG).attrs({
  src: arrow,
})`
  width: 14px;
  height: 14px;

  svg {
    circle {
      fill: var(--main-clr-dark-green);
      transition: fill 0.3s ease;
    }

    path {
      stroke: transparent;
      transition: stroke 0.3s ease;
    }
  }
`;

export const BtnTouch = styled.button`
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
  cursor: pointer;
  height: 40px;
  background: var(--main-clr-green);
  border: none;
  border-radius: 20px;
  display: inline-flex;
  padding: 10px 16px;
  margin-left: 12px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  &:hover {
    background: var(--main-clr-dark-green);
    ${TouchText} {
      color: var(--main-clr-green);
    }
    ${TouchArrow} {
      circle {
        fill: var(--main-clr-green);
      }
      path {
        stroke: var(--main-clr-dark-green);
      }
    }
  }
`;
