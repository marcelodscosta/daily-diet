import { Container, SubTitle, WraperSubtitle } from "./styles";
import { DietStatistics } from "../../components/DietStatistics";
import { Header } from "../../components/Header";

export const Home = () => {
  return (
    <Container>
      <Header />
      <DietStatistics />
      <WraperSubtitle>
        <SubTitle>Refeições</SubTitle>
      </WraperSubtitle>
    </Container>
  );
};
