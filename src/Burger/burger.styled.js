import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0); 
  }
  to {
    opacity: 1;
    transform: scale(1); 
    }
`;

export const ModalBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(23, 61, 51, 0.25);
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;

export const ModalWrapper = styled.div`
  backdrop-filter: none;
  width: 320px;
  padding-top: 36px;
  @media screen and (min-width: 768px) {
    width: 708px;
    display: flex;
    padding-top: 42px;
    justify-content: end;
  }
  @media screen and (min-width: 1280px) {
    width: 1240px;
    padding-top: 30px;
  }
`;
export const ModalContent = styled.div`
  width: 320px;
  height: 701px;
  flex-shrink: 0;
  border-radius: 25px;
  background: rgba(23, 61, 51, 0.75);
  backdrop-filter: blur(12.5px);
  padding: 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  animation: ${fadeIn} 0.5s ease;
  @media screen and (min-width: 768px) {
    padding: 24px 32px;
  }
`;

export const CloseBlock = styled.div`
  width: 60px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 4px;
  margin-bottom: 8px;
  &:hover {
    color: var(--main-clr-green);
    svg {
      stroke: var(--main-clr-green);
    }
  }
`;
export const CloseBtn = styled.button`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  background: transparent;
  border: none;
`;
export const CloseBtnText = styled.p`
  color: var(--white-clr);
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const Navi = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--white-clr);
  margin-top: 24px;
  width: 132px;
`;
export const LinkBlock = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  :hover {
    color: var(--main-clr-green);
    opacity: 1;
    svg {
      stroke: var(--main-clr-green);
    }
  }
`;

export const Links = styled.a`
  list-style: none;
  color: var(--main-text-clr);
  opacity: 0.25;
  font-family: Fira Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.96px;
  display: flex;
  align-items: center;
  gap: 8px;
`;
