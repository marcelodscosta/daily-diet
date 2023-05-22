import { FlatList } from "react-native";
import { CardMeals } from "../CardMeals";
import { Container, DateTitle } from "./styles";

interface Food {
  hour: string;
  description: string;
  type: "PRIMARY" | "SECUNDARY";
}

export interface ListMealsProps {
  date: string;
  foods: Food[];
}

export function ListMeals(data: ListMealsProps) {
  return (
    <Container>
      <DateTitle>{data.date}</DateTitle>
      <FlatList
        data={data.foods}
        keyExtractor={(item) => item.hour}
        renderItem={({ item }) => (
          <CardMeals
            description={item.description}
            hour={item.hour}
            type={item.type}
          />
        )}
      />
    </Container>
  );
}
