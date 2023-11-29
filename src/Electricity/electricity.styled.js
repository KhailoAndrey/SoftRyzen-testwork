import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 36px;
  gap: 24px;
  @media screen and (min-width: 768px) {
    width: 708px;
    margin-bottom: 100px;
  }
  @media screen and (min-width: 1280px) {
    width: 1240px;
    margin-bottom: 120px;
    gap: 16px;
  }
`;
export const CounterTitle = styled.h2`
  width: 286px;
  color: var(--main-clr-dark-green);
  text-align: center;
  font-family: Oswald;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    width: 368px;
    font-size: 36px;
    line-height: 36px;
  }
  @media screen and (min-width: 1280px) {
    width: 491px;
    font-size: 48px;
    line-height: 48px;
  }
`;
export const VertLine = styled.div`
  width: 1px;
  height: 48px;
  flex-shrink: 0;
  background: var(--main-clr-green);
  @media screen and (min-width: 768px) {
    height: 87px;
  }
`;
export const Counter = styled.div`
  width: 303px;
  display: flex;
  color: var(--main-clr-green);
  text-align: center;
  font-family: Oswald;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 602px;
    font-size: 100px;
    line-height: 100px;
  }
  @media screen and (min-width: 1280px) {
    width: 975px;
    font-size: 164px;
    line-height: 164px;
  }
`;
export const CounterText = styled.p`
  color: var(--main-clr-dark-green);
  text-align: center;
  font-family: Oswald;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 48px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 48px;
  }
`;
