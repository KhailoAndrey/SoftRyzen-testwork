import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import arrow from '../images/touch_arrow.svg';

export const Wrapper = styled.div`
  width: 320px;
  margin-top: 36px;
`;
export const FaqTitle = styled.h2`
  color: var(--main-clr-dark-green);
  font-family: Oswald;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;
  margin-bottom: 24px;
`;
export const FaqBlock = styled.div`
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const FaqModule = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
  align-items: end;
`;

export const BtnQ = styled.button`
  border: none;
  width: 16px;
  height: 16px;
  background: transparent;
`;

export const QBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;
export const Question = styled.p`
  color: var(--main-clr-dark-green);
  text-align: justify;
  font-family: Fira Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
  width: 296px;
`;
export const Answer = styled.p`
  color: var(--main-clr-dark-green);
  text-align: justify;
  font-family: Fira Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;
  width: 296px;
`;

export const FaqFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  ${Question} {
    width: 100%;
    text-align: center;
  }
`;

export const BtnText = styled.p`
  color: var(--main-clr-dark-green);
  transition: color 0.3s ease;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const Arrow = styled(ReactSVG).attrs({
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

export const BtnToContacts = styled.button`
  cursor: pointer;
  display: flex;
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
    ${BtnText} {
      color: var(--main-clr-green);
    }
    ${Arrow} {
      circle {
        fill: var(--main-clr-green);
      }
      path {
        stroke: var(--main-clr-dark-green);
      }
    }
  }
`;
