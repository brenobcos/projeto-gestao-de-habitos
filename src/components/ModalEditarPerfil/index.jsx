import { useEffect, useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import api from "../../services/api";

import { toast } from "react-hot-toast";

function ModalEditarPerfil({ user }) {
  const [userLogged, setUserLogged] = useState(null);

  const { username, email } = userLogged;

  useEffect(() => {
    api
      .get(`/users/${user.id}/`)
      .then((response) => {
        setUserLogged(response.data);
      })
      .catch((err) => console.log(err));
  }, [user]);

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
    api
      .patch(`/users/${user.id}/`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then(() => {
        toast.success("Dados atualizados com sucesso!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Button onClick={showModal}>Perfil</Button>

      <Modal
        title="Alterar Perfil"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form className="form" onFinish={onFinish}>
          <Form.Item name="username" label="Nome" initialValue={username}>
            <Input />
          </Form.Item>

          <Form.Item name="email" label="E-mail" initialValue={email}>
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
