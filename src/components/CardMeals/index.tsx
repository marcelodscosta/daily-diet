import {
  Container,
  Notice,
  Pipeline,
  TextHour,
  TextSnack,
  Wraper,
} from "./styles";

interface CardMealsProps {
  type: "PRIMARY" | "SECUNDARY";
  hour: string;
  description: string;
}

export const CardMeals = ({ type, hour, description }: CardMealsProps) => {
  return (
    <Container>
      <Wraper>
        <TextHour>{hour}</TextHour>
        <Pipeline>|</Pipeline>
        <TextSnack>{description}</TextSnack>
      </Wraper>
      <Notice type={type} />
    </Container>
  );
};
