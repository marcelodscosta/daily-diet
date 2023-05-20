import { Container } from "./styles";
import { DietStatistics } from "../../components/DietStatistics";
import { Header } from "../../components/Header";

export const Home = () => {
  return (
    <Container>
      <Header />
      <DietStatistics />
    </Container>
  );
};
