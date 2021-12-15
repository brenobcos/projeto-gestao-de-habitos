import api from "../../services/api";
import jwt_decode from "jwt-decode";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect, useState } from "react";

const Habits = () => {
  //TOKEN
  const token = JSON.parse(localStorage.getItem("@RunLikeaDev:token")) || "";
  const decoded = jwt_decode(token);
  const usuario = decoded.user_id;

  // HÁBITOS - POST
  const schemaHabit = yup.object().shape({
    title: yup.string().required("Obrigatório"),
    category: yup.string().required("Obrigatório"),
    difficulty: yup.string().required("Obrigatório"),
    frequency: yup.string().required("Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaHabit) });

  const addHabit = ({ title, category, difficulty, frequency }) => {
    const newHabit = {
      title,
      category,
      difficulty,
      frequency,
      achieved: false,
      how_much_achieved: 0,
      user: usuario,
    };

    api
      .post("/habits/", newHabit, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        getHabits();
      })
      .catch((err) => console.log(err));
  };

  //HÁBITOS - GET
  const [habits, setHabits] = useState([]);
  console.log(habits);

  const getHabits = useCallback(() => {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setHabits(response.data))
      .catch((err) => console.log(err));
  }, [setHabits, token]);

  useEffect(() => {
    if (habits.length === 0) {
      getHabits();
    }
  }, [habits.length, getHabits]);

  //HÁBITOS - DELETE
  function removeHabit(id) {
    api
      .delete(`/habits/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        getHabits();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <form onSubmit={handleSubmit(addHabit)}>
        {/* {errors.username?.message} */}
        <input placeholder="Hábito" {...register("title")} />
        <input placeholder="Categoria" {...register("category")} />
        <input placeholder="Dificuldade" {...register("difficulty")} />
        <input placeholder="Frequência" {...register("frequency")} />
        <button type="submit">Adicionar</button>
      </form>
      <div>
        {habits.map((habit) => (
          <div key={habit.id}>
            <div>{habit.title}</div>
            <button onClick={() => removeHabit(habit.id)}>Deletar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Habits;