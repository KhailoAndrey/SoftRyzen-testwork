import { Linee } from 'utils/line.styled';
import {
  Answer,
  BtnQ,
  FaqBlock,
  FaqModule,
  FaqTitle,
  QBlock,
  Question,
  Wrapper,
} from './faq.styled';
import { ReactComponent as Minus } from '../images/minus.svg';
import { ReactComponent as Plus } from '../images/plus.svg';
import { useState } from 'react';

const Faq = () => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(true);

  const toggleAnswerVisibility = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };
  return (
    <>
      <Wrapper id="faq">
        <FaqTitle>Frequently Asked Questions</FaqTitle>
        <FaqBlock>
          <Linee />
          <FaqModule>
            <QBlock>
              <BtnQ onClick={toggleAnswerVisibility}>
                {isAnswerVisible ? (
                  <Minus style={{ stroke: 'var(--main-clr-dark-green)' }} />
                ) : (
                  <Plus style={{ stroke: 'var(--main-clr-dark-green)' }} />
                )}
              </BtnQ>
              <Question>
                How do wind turbines and solar panels work together in a
                renewable energy system?
              </Question>
            </QBlock>
            <Answer style={{ display: isAnswerVisible ? 'block' : 'none' }}>
              Wind turbines and solar panels generate electricity through
              different mechanisms. Wind turbines harness the kinetic energy of
              the wind to turn blades, which then drive a generator. Solar
              panels convert sunlight into electricity through the photovoltaic
              effect. When integrated into a renewable energy system, these
              technologies complement each other by providing a continuous and
              reliable power supply. Wind power is often more abundant during
              certain times, while solar power is consistent during daylight
              hours, resulting in a more stable overall energy output.
            </Answer>
          </FaqModule>
          <Linee />
          <FaqModule>
            <QBlock>
              <BtnQ onClick={toggleAnswerVisibility}>
                {isAnswerVisible ? (
                  <Minus style={{ stroke: 'var(--main-clr-dark-green)' }} />
                ) : (
                  <Plus style={{ stroke: 'var(--main-clr-dark-green)' }} />
                )}
              </BtnQ>
              <Question>
                What sets EcoSolution's renewable energy solutions apart from
                others on the market?
              </Question>
            </QBlock>
            <Answer style={{ display: isAnswerVisible ? 'block' : 'none' }}>
              Wind turbines and solar panels generate electricity through
              different mechanisms. Wind turbines harness the kinetic energy of
              the wind to turn blades, which then drive a generator. Solar
              panels convert sunlight into electricity through the photovoltaic
              effect. When integrated into a renewable energy system, these
              technologies complement each other by providing a continuous and
              reliable power supply. Wind power is often more abundant during
              certain times, while solar power is consistent during daylight
              hours, resulting in a more stable overall energy output.
            </Answer>
          </FaqModule>
          <Linee />
          <FaqModule>
            <QBlock>
              <BtnQ onClick={toggleAnswerVisibility}>
                {isAnswerVisible ? (
                  <Minus style={{ stroke: 'var(--main-clr-dark-green)' }} />
                ) : (
                  <Plus style={{ stroke: 'var(--main-clr-dark-green)' }} />
                )}
              </BtnQ>
              <Question>
                How can businesses and communities benefit from integrating
                renewable energy solutions from EcoSolution?
              </Question>
            </QBlock>
            <Answer style={{ display: isAnswerVisible ? 'block' : 'none' }}>
              Wind turbines and solar panels generate electricity through
              different mechanisms. Wind turbines harness the kinetic energy of
              the wind to turn blades, which then drive a generator. Solar
              panels convert sunlight into electricity through the photovoltaic
              effect. When integrated into a renewable energy system, these
              technologies complement each other by providing a continuous and
              reliable power supply. Wind power is often more abundant during
              certain times, while solar power is consistent during daylight
              hours, resulting in a more stable overall energy output.
            </Answer>
          </FaqModule>
          <Linee />
          <FaqModule>
            <QBlock>
              <BtnQ onClick={toggleAnswerVisibility}>
                {isAnswerVisible ? (
                  <Minus style={{ stroke: 'var(--main-clr-dark-green)' }} />
                ) : (
                  <Plus style={{ stroke: 'var(--main-clr-dark-green)' }} />
                )}
              </BtnQ>
              <Question>
                How does EcoSolution engage with local communities and support a
                just transition to renewable energy?
              </Question>
            </QBlock>
            <Answer style={{ display: isAnswerVisible ? 'block' : 'none' }}>
              Wind turbines and solar panels generate electricity through
              different mechanisms. Wind turbines harness the kinetic energy of
              the wind to turn blades, which then drive a generator. Solar
              panels convert sunlight into electricity through the photovoltaic
              effect. When integrated into a renewable energy system, these
              technologies complement each other by providing a continuous and
              reliable power supply. Wind power is often more abundant during
              certain times, while solar power is consistent during daylight
              hours, resulting in a more stable overall energy output.
            </Answer>
          </FaqModule>
        </FaqBlock>
      </Wrapper>
    </>
  );
};

export default Faq;
