import { useState } from 'react';
import { Linee } from 'utils/line.styled';
import { ReactComponent as Minus } from '../images/minus.svg';
import { ReactComponent as Plus } from '../images/plus.svg';
import faqData from 'utils/faqData';
import {
  Answer,
  Arrow,
  BtnQ,
  BtnText,
  BtnToContacts,
  FaqBlock,
  FaqBtnBlock,
  FaqFooter,
  FaqModule,
  FaqTitle,
  OverMobileBlock,
  QBlock,
  Question,
  Wrapper,
} from './faq.styled';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAnswerVisibility = index => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const handleScroll = () => {
    const sectionId = 'contacts';
    const section = document.getElementById(sectionId);

    if (section) {
      const headerHeight = 70;
      const sectionRect = section.getBoundingClientRect();

      window.scrollTo({
        top: sectionRect.top + window.scrollY - headerHeight,
        left: 0,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      <Wrapper id="faq">
        <FaqTitle>Frequently Asked Questions</FaqTitle>
        <OverMobileBlock>
          <FaqBlock>
            {faqData.map((data, index) => (
              <FaqModule key={index}>
                <Linee />
                <QBlock>
                  <BtnQ onClick={() => toggleAnswerVisibility(index)}>
                    {openIndex === index ? (
                      <Minus style={{ stroke: 'var(--main-clr-dark-green)' }} />
                    ) : (
                      <Plus style={{ stroke: 'var(--main-clr-green)' }} />
                    )}
                  </BtnQ>
                  <Question>{data.question}</Question>
                </QBlock>
                <Answer
                  style={{ display: openIndex === index ? 'block' : 'none' }}
                >
                  {data.answer}
                </Answer>
              </FaqModule>
            ))}
          </FaqBlock>
          <FaqFooter>
            <FaqTitle>Frequently Asked Questions</FaqTitle>
            <FaqBtnBlock>
              <Question>Didn't find the answer to your question?</Question>
              <BtnToContacts onClick={handleScroll}>
                <BtnText>Contact Us</BtnText>
                <Arrow />
              </BtnToContacts>
            </FaqBtnBlock>
          </FaqFooter>
        </OverMobileBlock>
        <FaqFooter>
          <Question>Didn't find the answer to your question?</Question>
          <BtnToContacts onClick={handleScroll}>
            <BtnText>Contact Us</BtnText>
            <Arrow />
          </BtnToContacts>
        </FaqFooter>
      </Wrapper>
    </>
  );
};

export default Faq;
