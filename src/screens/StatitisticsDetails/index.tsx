import {
  Container,
  Header,
  Icon,
  Percentage,
  SubTitle,
  Wrap,
  WrapIcon,
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
    </Container>
  );
};
