import { useEffect, useState } from 'react';
import {
  Counter,
  CounterText,
  CounterTitle,
  VertLine,
  Wrapper,
} from './electricity.styled';

const Electricity = () => {
  const [count, setCount] = useState(1134147814);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const formatNumber = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };
  return (
    <>
      <Wrapper>
        <CounterTitle>Electricity we produced for all time</CounterTitle>
        <VertLine />
        <Counter>
          {formatNumber(count)}
          <CounterText>kWh</CounterText>
        </Counter>
      </Wrapper>
    </>
  );
};

export default Electricity;
