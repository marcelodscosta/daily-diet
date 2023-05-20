import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import { Text, StatusBar } from "react-native";
import { Loading } from "./src/components/Loading";
import { Home } from "./src/screens/Home";

export default function App() {
  const [fontloaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      {fontloaded ? <Home /> : <Loading />}
    </ThemeProvider>
  );
}
