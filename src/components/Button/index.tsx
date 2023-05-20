import { Container, Icon, TextButton } from "./styles";

interface Props {
  title: string;
}

export const Button = ({ title }: Props) => {
  return (
    <Container>
      <Icon />
      <TextButton>{title}</TextButton>
    </Container>
  );
};
