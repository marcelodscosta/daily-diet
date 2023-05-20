import styled from "styled-components/native";
import { DietStatisticStyleProps } from "../DietStatistics/styles";
import { ArrowUpRight } from "phosphor-react-native";

type Props = {
  type: "PRIMARY" | "SECUNDARY";
};

export const Container = styled.View`
  width: 100%;
  align-items: flex-end;
  margin-right: 12px;
`;

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  size: 24,
}))``;
