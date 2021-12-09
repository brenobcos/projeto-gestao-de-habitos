import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../services/api'

const Registration = () => {
  const formSchema = yup.object().shape({
    username: yup.string().required('Nome de usuario obrigatório'),
    email: yup.string().required('E-mail obrigatório').email('E-mail Invalido'),
    password: yup.string().required('Senha obrigatória'),
    confirmPassword: yup
      .string()
      .required('Confirmação obrigatória')
      .oneOf([yup.ref('password'), null], 'Senhas diferentes')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(formSchema) })

  const submitUser = ({ username, email, password }) => {
    const user = { username, email, password }
    console.log(user)
    api.post('/users/', user).then(res => {
      console.log(res.data)
    })
  }

  return (
    <div>
      <h3>Cadastro</h3>

      <form onSubmit={handleSubmit(submitUser)}>
        <input placeholder="Nome de usuario" {...register('username')} />
        {errors.username?.message}
        <input placeholder="E-mail" {...register('email')} />
        {errors.email?.message}
        <input placeholder="Senha" type="password" {...register('password')} />
        {errors.password?.message}
        <input
          placeholder="Confirmar senha"
          type="password"
          {...register('confirmPassword')}
        />
        {errors.confirmPassword?.message}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}

export default Registration
