import { Linee } from 'utils/line.styled';
import {
  ArrowRight,
  BtnMore,
  MainAddress,
  MainContacts,
  MainImage,
  MainInfo,
  MainMail,
  MainNotation,
  MainText,
  MainTitle,
  Paragraph,
  TextMore,
  TextTitle,
  Wrapper,
} from './main.styled';

const Main = () => {
  const handleScroll = () => {
    const sectionId = 'cases';
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
      <Wrapper id="main">
        <MainInfo>
          <MainTitle>
            <TextTitle>renewable energy for any task</TextTitle>
          </MainTitle>
          <Paragraph>
            <MainText>
              Development and implementation of renewable non-polluting energy
              sources, generating power generation using energy wind, sun,
              water, biomass
            </MainText>
            <BtnMore onClick={handleScroll}>
              <TextMore>Learn more</TextMore>
              <ArrowRight />
            </BtnMore>
          </Paragraph>
        </MainInfo>
        <Linee />
        <MainContacts>
          <MainAddress>
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </MainAddress>
          <MainMail href="mailto:office@ecosolution.com">
            office@ecosolution.com
          </MainMail>
          <MainNotation>ecosolution © 2023</MainNotation>
        </MainContacts>
        <MainImage />
      </Wrapper>
    </>
  );
};

export default Main;
