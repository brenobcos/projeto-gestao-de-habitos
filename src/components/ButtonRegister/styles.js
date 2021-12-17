import styled from "styled-components";

export const Container = styled.button`
  min-width: min-content;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 10px;
  height: 2.375rem;
  font-size: calc(10px + 1vh);
  font-weight: 600;
  border: none;
  background: ${(props) =>
    props.isColored ? "var(--color-primary)" : "var(--black)"};
  color: ${(props) => (props.isColored ? "var(--black)" : "var(--white)")};
  margin: 3px;

  width: 120px;

  :hover {
    cursor: pointer;
  }
`;
