import styled from 'styled-components'

export const Container = styled.button`
  min-width: min-content;
  padding: 10px;
  height: 2.375rem;
  font-size: calc(10px + 1vh);
  font-weight: 400;
  border: none;
  background: ${props => (props.color ? '#757BC8' : '#121212')};
  color: ${props => (props.color ? '#121212' : '#FFF')};
  margin: 3px;

  :hover {
    cursor: pointer;
  }
`
