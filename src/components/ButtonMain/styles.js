import styled from "styled-components";

export const Container = styled.button`
  width: 160px;
  height: 30px;
  font-weight: 900;
  font-size: 12px;

  background: var(--color-primary),

  min-width: min-content;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 10px;
  border: none;
  background: var(--color-primary);
  color: var(--black);

  :hover {
    cursor: pointer;
  }
`;
