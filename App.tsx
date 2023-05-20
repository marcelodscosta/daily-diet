import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import { Text, StatusBar, ActivityIndicator } from "react-native";

export default function App() {
  const [fontloaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      {fontloaded ? (
        <Text>Projeto Inicializado!!!</Text>
      ) : (
        <ActivityIndicator />
      )}
    </ThemeProvider>
  );
}
