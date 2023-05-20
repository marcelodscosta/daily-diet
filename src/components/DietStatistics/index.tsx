import { Container, Icon, Percentage, SubTitle, Wraper } from "./styles";
import { DietStatisticStyleProps } from "./styles";
import { IconStatistics } from "../../components/IconStatistics/index";

export const DietStatistics = ({
  type = "PRIMARY",
}: DietStatisticStyleProps) => {
  return (
    <Container type={type}>
      <Wraper>
        <IconStatistics type={type} />
        <Percentage>90,86%</Percentage>
        <SubTitle>das refeições dentro da dieta</SubTitle>
      </Wraper>
    </Container>
  );
};
