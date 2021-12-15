// pegar o id do usuario armazenado
// get na api das informacoes
// exibir as informacoes nos inputs
// alterar as informacoes que o usuario digitar na api

import jwt_decode from "jwt-decode";
import api from "../../services/api";

import { useState } from "react";
import { Button, Modal, Form, Input } from "antd";

function ModalEditarPerfil() {
  const token = JSON.parse(localStorage.getItem("@RunLikeaDev:token")) || "";
  const decoded = jwt_decode(token);
  const usuario = decoded.user_id;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (data) => {
    console.log("Success:", data);
    // api.patch(`/user/${usuario}`, data).then((response) => {
    //   console.log(response);
    //   toast.success("Alteração realizada com sucesso");
    // });
  };

  return (
    <>
      <Button onClick={showModal}>+</Button>
      <Modal
        title="Alterar Perfil"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form className="form" onFinish={onFinish}>
          <Form.Item
            name="username"
            label="Nome"
            initialValue="Nome do cidadao"
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            initialValue="Email do cidadao"
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit">Enviar</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default ModalEditarPerfil;
