import { Plus } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  height: 50px;
  width: 90%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 6px;
`;

export const Icon = styled(Plus).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 18,
}))``;

export const TextButton = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
  `}
  margin-left: 6px
`;
