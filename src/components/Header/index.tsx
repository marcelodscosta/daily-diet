import { HeaderHome, Logo, Photograph } from "./styles";
import LogoMarca from "../../assets/Logo.png";
import Perfil from "../../assets/Foto-perfil.png";

export const Header = () => {
  return (
    <HeaderHome>
      <Logo source={LogoMarca} />
      <Photograph source={Perfil} />
    </HeaderHome>
  );
};
