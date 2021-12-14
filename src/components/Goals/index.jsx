import api from '../../services/api'
import jwt_decode from 'jwt-decode'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useCallback, useEffect, useState } from 'react'

const Goals = () => {
  //TOKEN
  const token = JSON.parse(localStorage.getItem('@RunLikeaDev:token')) || ''
  const decoded = jwt_decode(token)
  const usuario = decoded.user_id

  // GOALS - POST
  const schemaGoal = yup.object().shape({
    title: yup.string().required('Obrigatório'),
    difficulty: yup.string().required('Obrigatório'),
    how_much_achieved: yup.string().required('Obrigatório'),
    achieved: yup.string().required('Obrigatório'),
    group: yup.string().required('Obrigatório')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schemaGoal) })

  const addGoal = ({ title, category, difficulty, frequency }) => {
    const newGoal = {
      title,
      category,
      difficulty,
      frequency,
      how_much_achieved: 0,
      user: usuario
    }

    api
      .post('/goals/', newGoal, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        console.log(response.data)
        getGoals()
      })
      .catch(err => console.log(err))
  }

  //GOALS - GET
  const [goals, setGoals] = useState([])
  console.log(goals)

  const getGoals = useCallback(() => {
    api
      .get('/goals/personal/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => setGoals(response.data))
      .catch(err => console.log(err))
  }, [setGoals, token])

  useEffect(() => {
    if (goals.length === 0) {
      getGoals()
    }
  }, [goals.length, getGoals])

  //GOALS - DELETE
  function removeGoal(id) {
    api
      .delete(`/goals/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        console.log(response)
        getGoals()
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <div>Goals</div>
      <form onSubmit={handleSubmit(addGoal)}>
        {/* {errors.username?.message} */}
        <input placeholder="Meta" {...register('title')} />
        <input placeholder="Dificuldade" {...register('difficulty')} />
        <input placeholder="Progresso" {...register('how_much_achieved')} />
        <input placeholder="Concluido" {...register('achieved')} />
        <input placeholder="Grupo" {...register('group')} />

        <button type="submit">Adicionar</button>
      </form>
      <div>
        {goals.map(goal => (
          <div key={goal.id}>
            <div>{goal.title}</div>
            <button onClick={() => removeGoal(goal.id)}>Deletar</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Goals
