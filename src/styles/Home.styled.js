import styled from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  min-height: 100vh;
  color: blue;
  padding-inline: 4rem;
  background-color: ${({ theme }) => theme.colors.body};
  h2 {
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: center; */
    text-align: center;
    font-size: 3rem;
    line-height: 1.1;
    color: ${({ theme }) => theme.colors.title};
  }
  div {
    margin-top: 7rem;
  }
`;
