import styled from "styled-components";

export const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.7rem 1.2rem;
  background-color: ${({ bg }) => bg || "#f55f88"};
  color: ${({ color }) => color || "#000000"};
  width: 35%;
  opacity: 1;
  text-transform: uppercase;
  border-radius: 1.25rem;
  transition: all 300ms ease-in;
  /* TODO: Hover effect */
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
