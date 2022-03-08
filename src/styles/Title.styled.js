import styled from "styled-components";

export const Title = styled.h1`
  font-size: calc(3rem + 3vw);
  color: ${({ theme }) => theme.colors.title};
  text-align: center;
`;
