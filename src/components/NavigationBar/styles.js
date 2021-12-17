import styled from "styled-components";

export const Container = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: var(--black);
  padding: 1rem;

  position: sticky;
  top: 0;
  z-index: 2;

  text-align: center;
  div {
    margin: 0 auto;
  }

  @media screen and (min-width: 750px) {
    flex-direction: row;
  }
`;
