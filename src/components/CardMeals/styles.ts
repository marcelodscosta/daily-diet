import { View } from "react-native";
import styled, { css } from "styled-components/native";

interface NoticeStyleProps {
  type?: "PRIMARY" | "SECUNDARY";
}

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 49px;
  border: 0.1px solid;
  flex-direction: row;
  margin-top: 12px;
  border-radius: 2px;
  padding: 14px 12px 16px;
  justify-content: center;
  align-items: center;
`;

export const Wraper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const TextHour = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.BODY_XS}px;
    color: ${theme.COLORS.GRAY_100};
  `};
`;

export const Pipeline = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    color: ${theme.COLORS.GRAY_400};
  `};
  margin-left: 6px;
`;

export const TextSnack = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    color: ${theme.COLORS.GRAY_200};
  `};
  margin-left: 6px;
`;

export const Notice = styled(View)<NoticeStyleProps>`
  height: 14px;
  width: 14px;

  border-radius: 33px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
