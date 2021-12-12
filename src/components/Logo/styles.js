import styled from 'styled-components'

export const Container = styled.div`
  width: 8rem;
  height: 5rem;
  background-color: var(--black);
  color: var(--white);
  text-align: center;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;

  div {
    display: flex;
    flex-direction: row;
    width: 90%;
    margin-top: 20px;
  }

  h1 {
    width: 100%;
    background-color: var(--white);
    color: var(--black);
    font-size: 36px;
    margin-bottom: 0;
  }

  p {
    margin-bottom: 10px;
    width: 90%;
    text-align-last: justify;
    font-weight: 600;
  }
`
