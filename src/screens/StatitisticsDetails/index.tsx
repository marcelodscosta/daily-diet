import {
  Container,
  GeneralNumbers,
  GeneralNumbersDetails,
  GeneralNumbersDetails1,
  GeneralStatistics,
  Header,
  Icon,
  Percentage,
  SubTitle,
  SubTitleGeneralNumbers,
  TextGeneralNumbers,
  Title,
  Wrap,
  WrapIcon,
  Wraper,
} from "./styled";

export const StatisticsDetails = () => {
  return (
    <Container>
      <Header>
        <Wrap>
          <WrapIcon>
            <Icon />
          </WrapIcon>
        </Wrap>
        <Percentage>90.86%</Percentage>
        <SubTitle>das refeições dentro da dieta</SubTitle>
      </Header>

      <GeneralStatistics>
        <Title>Estatísticas Gerais</Title>

        <GeneralNumbers>
          <TextGeneralNumbers>4</TextGeneralNumbers>
          <SubTitleGeneralNumbers>
            Melhor Sequência de pratos dentro da dieta
          </SubTitleGeneralNumbers>
        </GeneralNumbers>

        <GeneralNumbers>
          <TextGeneralNumbers>109</TextGeneralNumbers>
          <SubTitleGeneralNumbers>refeições registradas</SubTitleGeneralNumbers>
        </GeneralNumbers>

        <Wraper>
          <GeneralNumbersDetails>
            <TextGeneralNumbers>32</TextGeneralNumbers>
            <SubTitleGeneralNumbers>
              refeições dentro da dieta
            </SubTitleGeneralNumbers>
          </GeneralNumbersDetails>

          <GeneralNumbersDetails1>
            <TextGeneralNumbers>77</TextGeneralNumbers>
            <SubTitleGeneralNumbers>
              refeições fora da dieta
            </SubTitleGeneralNumbers>
          </GeneralNumbersDetails1>
        </Wraper>
      </GeneralStatistics>
    </Container>
  );
};
