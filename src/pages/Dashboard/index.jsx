import api from "../../services/api";
import jwt_decode from "jwt-decode";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const Dashboard = () => {
  //TOKEN
  const token = JSON.parse(localStorage.getItem("@RunLikeaDev:token")) || "";
  const decoded = jwt_decode(token);
  const usuario = decoded.user_id;

  // HÁBITOS - POST
  const formSchema = yup.object().shape({
    title: yup.string().required("Obrigatório"),
    category: yup.string().required("Obrigatório"),
    difficulty: yup.string().required("Obrigatório"),
    frequency: yup.string().required("Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const addHabit = ({ title, category, difficulty, frequency }) => {
    const newUser = {
      title,
      category,
      difficulty,
      frequency,
      how_much_achieved: 0,
      user: usuario,
    };

    api
      .post("/habits/", newUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  //HÁBITOS - GET

  const [habits, setHabits] = useState([]);
  console.log(habits);

  const showHabit = () => {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setHabits(response.data);
      })
      .catch((err) => console.log(err));
  };

  //HTML
  return (
    <div>
      <div>Dashboard</div>
      <br></br>
      <form onSubmit={handleSubmit(addHabit)}>
        {/* {errors.username?.message} */}
        <input placeholder="Hábito" {...register("title")} />
        <input placeholder="Categoria" {...register("category")} />
        <input placeholder="Dificuldade" {...register("difficulty")} />
        <input placeholder="Frequência" {...register("frequency")} />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default Dashboard;
