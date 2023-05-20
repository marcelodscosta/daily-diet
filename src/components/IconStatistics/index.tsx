import { Container, Icon } from "./styles";
import { DietStatisticStyleProps } from "../DietStatistics/styles";

export const IconStatistics = ({ type }: DietStatisticStyleProps) => {
  return (
    <Container>
      <Icon type={type} />
    </Container>
  );
};
