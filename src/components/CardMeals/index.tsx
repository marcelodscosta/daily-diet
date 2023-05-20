import {
  Container,
  Notice,
  Pipeline,
  TextHour,
  TextSnack,
  Wraper,
} from "./styles";

export const CardMeals = () => {
  return (
    <Container>
      <Wraper>
        <TextHour>20:00</TextHour>
        <Pipeline>|</Pipeline>
        <TextSnack>X-tudo</TextSnack>
      </Wraper>
      <Notice type="PRIMARY" />
    </Container>
  );
};
