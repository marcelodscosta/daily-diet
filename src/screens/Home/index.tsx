import { Container, SubTitle, WraperSubtitle, Listing } from "./styles";
import { DietStatistics } from "../../components/DietStatistics";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ListMeals, ListMealsProps } from "../../components/ListMeals";
import { FlatList } from "react-native";

export const Home = () => {
  const meals: ListMealsProps[] = [
    {
      date: "12.03.2023",
      foods: [
        {
          hour: "22:30",
          description: "Melancia",
          type: "PRIMARY",
        },
        {
          hour: "22:40",
          description: "Hambuguer",
          type: "SECUNDARY",
        },
        {
          hour: "23:00",
          description: "Salada",
          type: "PRIMARY",
        },
      ],
    },
    {
      date: "13.03.2023",
      foods: [
        {
          hour: "07:30",
          description: "Melancia",
          type: "PRIMARY",
        },
        {
          hour: "08:40",
          description: "Hambuguer",
          type: "SECUNDARY",
        },
        {
          hour: "11:00",
          description: "Salada",
          type: "PRIMARY",
        },
        {
          hour: "12:00",
          description: "Macarronada",
          type: "SECUNDARY",
        },
      ],
    },
  ];

  return (
    <Container>
      <Header />
      <DietStatistics />
      <WraperSubtitle>
        <SubTitle>Refeições</SubTitle>
      </WraperSubtitle>
      <Button title="Nova refeição" />

      <Listing>
        <FlatList
          data={meals}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => <ListMeals {...item} />}
        />
      </Listing>
    </Container>
  );
};
