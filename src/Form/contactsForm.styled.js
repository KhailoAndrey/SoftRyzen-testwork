import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import arrowRight from '../images/arrow-right.svg';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 28px;
  justify-content: flex-end;
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledLabel = styled.label`
  display: block;
  color: var(--main-clr-dark-green);
  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const StyledInput = styled.input`
  border: none;
  height: 31px;
  background: var(--second-bg-clr);
  border-bottom: 1px solid var(--main-clr-green);
`;
export const MessageInput = styled.textarea`
  height: 147px;
  border: none;
  resize: none;
  background: var(--second-bg-clr);
  border-bottom: 1px solid var(--main-clr-green);
`;
export const ArrowRight = styled(ReactSVG).attrs({
  src: arrowRight,
})`
  width: 32px;
  height: 32px;
`;

export const BtnText = styled.p`
  color: var(--main-clr-dark-green);
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.64px;
`;
export const SubmitBtn = styled.button`
  cursor: pointer;
  display: flex;
  width: 100px;
  height: 39px;
  padding: 4px 4px 4px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 500px;
  border: 1px solid var(--main-clr-green);
  background: transparent;
  margin-left: auto;
  &:hover {
    background: var(--main-clr-dark-green);
    ${BtnText} {
      color: var(--main-clr-green);
    }
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  top: 32px;
  right: 8px;
  color: var(--err-red-clr);
  font-size: 8px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;
