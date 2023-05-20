import { Container, SubTitle, WraperSubtitle } from "./styles";
import { DietStatistics } from "../../components/DietStatistics";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ListMeals } from "../../components/ListMeals";

export const Home = () => {
  return (
    <Container>
      <Header />
      <DietStatistics />
      <WraperSubtitle>
        <SubTitle>Refeições</SubTitle>
      </WraperSubtitle>
      <Button title="Nova refeição" />
      <ListMeals />
    </Container>
  );
};
