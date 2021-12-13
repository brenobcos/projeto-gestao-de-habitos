import { Container } from './styles'

const Button = ({ children, color = true, ...rest }) => {
  return (
    <Container color={color} type="button" {...rest}>
      {children}
    </Container>
  )
}

export default Button
