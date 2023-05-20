import { Container, Header, Logo, Photograph } from "./styles";
import LogoMarca from "../../assets/Logo.png";
import Perfil from "../../assets/Foto-perfil.png";

export const Home = () => {
  return (
    <Container>
      <Header>
        <Logo source={LogoMarca} />
        <Photograph source={Perfil} />
      </Header>
    </Container>
  );
};
