import api from "../../services/api";
import jwt_decode from "jwt-decode";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import { useState } from "react";

const Profile = () => {

  const [userName, setUserName] = useState("");


  const token = JSON.parse(localStorage.getItem("@RunLikeaDev:token")) || "";
  const decoded = jwt_decode(token);
  const id = decoded.user_id;

  const formSchema = yup.object().shape({
    username: yup.string().required("Insira seu username"),
    email: yup.string().required("E-mail obrigatório").email("E-mail Invalido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });


  const handleNewUserName = (data) => {
    api
      .patch(`/users/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success('Dados atualizados com sucesso!', userName)
        console.log(response)
      })
      .then(() => {
        setUserName(data.username);
        console.log(data.username);
      })

      .catch((err) => console.log(err));
  };

  const onSubmit = (data) => {
    handleNewUserName(data);
  };

  return (
    <>
      <button >X</button>
      <div>
        <h3>Atualizar Perfil</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Nome" {...register("username")} />
          {errors.username?.message}

          <input type="text" placeholder="Email" {...register("email")} />
          {errors.email?.message}

          <button type="submit">Salvar</button>
        </form>
      </div>
    </>
  );
};

export default Profile;
