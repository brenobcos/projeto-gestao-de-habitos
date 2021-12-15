// pegar o id do usuario armazenado
// get na api das informacoes
// exibir as informacoes nos inputs
// alterar as informacoes que o usuario digitar na api

import jwt_decode from "jwt-decode";
import api from "../../services/api";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";

import { useState } from "react";
import { Button, Modal } from "antd";
import Inputs from "../Inputs";

function ModalEditarPerfil() {
  const token = JSON.parse(localStorage.getItem("@RunLikeaDev:token")) || "";
  const decoded = jwt_decode(token);
  const usuario = decoded.user_id;

  const schema = yup.object().shape({
    username: yup.string(),
    email: yup.string(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isModalVisible, setIsModalVisible] = useState(true);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onSubmitFunction = (data) => {
    console.log(data);
    api.patch(`/user/${usuario}`, data).then((response) => {
      console.log(response);
      toast.success("Alteração realizada com sucesso");
    });
  };

  return (
    <Modal
      title="Alterar Perfil"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
        <Inputs
          filled
          text="Nome do cidadao"
          label="Nome"
          name="username"
          register={register}
        />
        <Inputs
          filled
          text="Email do cidadao"
          label="E-mail"
          name="email"
          register={register}
        />
        <button type="submit">Enviar</button>
      </form>
    </Modal>
  );
}

export default ModalEditarPerfil;
