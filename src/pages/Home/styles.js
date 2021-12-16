import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  header {
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    background-color: var(--black);
    padding: 1rem;

    position: sticky;
    top: 0;

    text-align: center;
    div {
      margin: 0 auto;
    }

    @media screen and (min-width: 750px) {
      flex-direction: row;
    }
  }

  img {
    width: 100%;
  }

  footer {
    background: var(--black);
    color: var(--white);
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 10px 0;

    h5 {
      color: var(--white);
      font-size: calc(1rem + 1vh);
      margin: 10px 0;
    }

    p {
      margin: 2px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;

  @media screen and (min-width: 750px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    margin-top: 50px;

    button {
      margin-left: 25px;
    }
  }
`;
