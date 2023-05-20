import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px 24px;
`;

export const Photograph = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 33.3333px;
  border: 1px;
  border-style: solid;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;
