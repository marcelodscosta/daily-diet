import { View } from "react-native";
import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export interface DietStatisticStyleProps {
  type?: "PRIMARY" | "SECUNDARY";
}

export const Container = styled(View)<DietStatisticStyleProps>`
  width: 90%;
  height: 102px;

  align-items: center;

  border-radius: 8px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Percentage = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.TITLE_G}px;
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.BODY_S}px;
  `}
`;

export const Wraper = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const WraperIcon = styled.View`
  width: 100%;
  align-items: flex-end;
  margin-right: 12px;
`;

export const Icon = styled(ArrowUpRight).attrs<DietStatisticStyleProps>(
  ({ theme, type }) => ({
    color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
    size: 24,
  })
)``;
