import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  /* gap: 3rem; */

  /* border: 2px solid red; */
  /* background-color: hsl(0 0% 100% / 0.3); */
  /* backdrop-filter: blur(1rem); */

  div {
    width: 45%;
    max-width: 700px;
  }
  & > div {
    h2 {
      text-align: left;
      color: ${({ theme }) => theme.colors.logo_clr};
    }
    display: flex;

    /* align-item: center; */
    /* justify-content: center; */
    flex-direction: column;
  }
  p {
    color: #000;
    margin-block: 2rem;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
`;
