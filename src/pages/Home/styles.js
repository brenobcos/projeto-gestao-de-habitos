import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  header {
    height: 6rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    background-color: var(--black);
    padding: 0 1rem;
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
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const GlideContainer = styled.div`
  margin: 0 15px;
`

export const Glide = styled.div`
  text-align: center;

  h4 {
    font-size: calc(1rem + 0.5vh);
  }
  img {
    max-width: 500px;
    margin: 0 auto;
  }
`
