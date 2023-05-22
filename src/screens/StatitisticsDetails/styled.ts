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
  margin-bottom: -10px;
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

export const GeneralStatistics = styled.View`
  width: 100%;
  height: 644px;
  margin-top: -20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  align-items: center;
  padding-top: 32px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
  `};
  margin-bottom: 12px;
`;

export const GeneralNumbers = styled.View`
  width: 90%;
  height: 89px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 12px;
`;

export const TextGeneralNumbers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_M}px;
  `};
`;

export const SubTitleGeneralNumbers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_S}px;
  `};
`;

export const Wraper = styled.View`
  width: 90%;
  height: 89px;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  flex-direction: row;
`;

export const GeneralNumbersDetails = styled.View`
  width: 48%;
  height: 89px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 12px;
`;

export const GeneralNumbersDetails1 = styled.View`
  width: 48%;
  height: 89px;
  background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 12px;
`;
