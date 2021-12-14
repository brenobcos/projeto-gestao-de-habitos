import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  background: #121212;

  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 30px 0px;
`;

export const Titulo = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  color: #fffffc;

  margin-top: 30px;
`;

export const Detalhe = styled.div`
  font-family: Inter, Helvetica, Arial, Sans-serif;
  font-size: 12px;
  color: #fffffc;

  > p {
    margin: 20px 0;
  }
`;
