import { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import api from "../../services/api";

import { toast } from "react-hot-toast";

function ModalEditarPerfil({ user }) {
  const { username, email, id } = user;

  // MODAL
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // PATCH
  const onFinish = (data) => {
    api
      .patch(`/users/${user.id}/`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then(() => {
        toast.success("Dados atualizados com sucesso!");
        setTimeout(() => {
          setIsModalVisible(false);
        }, 2500);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Button onClick={showModal}>Perfil</Button>

      <Modal
        title="Alterar Perfil"
        visible={isModalVisible}
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
