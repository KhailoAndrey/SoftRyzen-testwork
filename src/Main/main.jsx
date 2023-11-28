import {
  ArrowRight,
  BtnMore,
  Line,
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
  return (
    <>
      <Wrapper>
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
            <BtnMore>
              <TextMore>Learn more</TextMore>
              <ArrowRight />
            </BtnMore>
          </Paragraph>
        </MainInfo>
        <Line />
        <MainContacts>
          <MainAddress>
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </MainAddress>
          <MainMail>office@ecosolution.com</MainMail>
          <MainNotation>ecosolution © 2023</MainNotation>
        </MainContacts>
        <MainImage />
      </Wrapper>
    </>
  );
};

export default Main;
