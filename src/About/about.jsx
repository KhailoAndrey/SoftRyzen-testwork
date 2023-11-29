import { Linee } from 'utils/line.styled';
import {
  GridImageMen,
  GridImageMens,
  GridItem,
  GridText,
  GridTitle,
  GridTitleBox,
  InnovationIcon,
  OpennessIcon,
  QualityIcon,
  ResponsibilityIcon,
  ValuesBox,
  ValuesGrid,
  ValuesText,
  ValuesTitle,
  Wrapper,
} from './about.styled';

const About = () => {
  return (
    <>
      <Wrapper>
        <ValuesBox>
          <ValuesTitle>Main values of our company</ValuesTitle>
          <ValuesText>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world's energy needs.
          </ValuesText>
        </ValuesBox>
        <ValuesGrid>
          <GridItem>
            <GridTitleBox>
              <OpennessIcon />
              <GridTitle>Openness</GridTitle>
            </GridTitleBox>
            <Linee />
            <GridText>to the world, people, new ideas and projects</GridText>
          </GridItem>
          <GridItem>
            <GridTitleBox>
              <ResponsibilityIcon />
              <GridTitle>Responsibility</GridTitle>
            </GridTitleBox>
            <Linee />
            <GridText>
              we are aware that the results of our work have an impact on our
              lives and the lives of future generations
            </GridText>
          </GridItem>
          <GridImageMens />
          <GridImageMen />
          <GridItem>
            <GridTitleBox>
              <InnovationIcon />
              <GridTitle>Innovation</GridTitle>
            </GridTitleBox>
            <Linee />
            <GridText>
              we use the latest technology to implement non-standard solutions
            </GridText>
          </GridItem>
          <GridItem>
            <GridTitleBox>
              <QualityIcon />
              <GridTitle>Quality</GridTitle>
            </GridTitleBox>
            <Linee />
            <GridText>
              we do not strive to be the first among others, but we want to be
              the best in our business
            </GridText>
          </GridItem>
        </ValuesGrid>
      </Wrapper>
    </>
  );
};

export default About;
