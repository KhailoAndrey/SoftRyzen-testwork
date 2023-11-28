import {
  ArrowRight,
  BtnMore,
  Line,
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
        <MainTitle>
          <TextTitle>renewable energy for any task</TextTitle>
        </MainTitle>
        <Paragraph>
          <MainText>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </MainText>
          <BtnMore>
            <TextMore>Learn more</TextMore>
            <ArrowRight />
          </BtnMore>
        </Paragraph>
      </Wrapper>
      <Line />
    </>
  );
};

export default Main;
