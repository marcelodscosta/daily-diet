import { View } from "react-native";
import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

import { DietStatisticStyleProps } from "../../components/DietStatistics/styles";

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Header = styled(View)<DietStatisticStyleProps>`
  width: 100%;
  height: 200px;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  justify-content: center;
  align-items: center;
`;

export const Wrap = styled.View`
  width: 100%;
`;

export const WrapIcon = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  margin-left: 12px;
`;

export const Icon = styled(ArrowLeft).attrs<DietStatisticStyleProps>(
  ({ theme, type }) => ({
    size: 24,
    color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  })
)``;

export const Percentage = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_G}px;
  `};
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_S}px;
  `};
`;
