import api from "../../services/api";
import jwt_decode from "jwt-decode";
import { useCallback, useEffect, useState } from "react";

import { Button, Modal, Form, Input, Divider, List, Card } from "antd";
import { PlusSquareFilled } from "@ant-design/icons";

const ModalHabits = () => {
  // MODAL
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //TOKEN
  const token = JSON.parse(localStorage.getItem("@RunLikeaDev:token")) || "";
  const decoded = jwt_decode(token);
  const usuario = decoded.user_id;

  // HÁBITOS - POST

  const onFinish = ({ title, category, difficulty, frequency }) => {
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
        getData();
      })
      .catch((err) => console.log(err));
  };

  //HÁBITOS - GET
  const [data, setData] = useState([]);

  const getData = useCallback(() => {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, [setData, token]);

  useEffect(() => {
    getData();
  }, [getData]);

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
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <PlusSquareFilled
        onClick={showModal}
        style={{
          cursor: "pointer",
          marginLeft: "40px",
          color: "var(--color-primary)",
        }}
      />

      <Modal
        title="Hábitos"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Divider orientation="left">Adicionar Hábito</Divider>

        <Form className="form" onFinish={onFinish}>
          <Form.Item name="title" label="Hábito">
            <Input placeholder="Hábito" />
          </Form.Item>
          <Form.Item name="category" label="Categoria">
            <Input placeholder="Categoria" />
          </Form.Item>
          <Form.Item name="difficulty" label="Dificuldade">
            <Input placeholder="Dificuldade" />
          </Form.Item>
          <Form.Item name="frequency" label="Frequência">
            <Input placeholder="Frequência" />
          </Form.Item>
          <Button htmlType="submit">Adicionar</Button>
        </Form>
        <Divider orientation="left">Remover Hábito</Divider>

        <List
          size="small"
          style={{ color: "var(--black)" }}
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item style={{ display: "flex" }}>
              <Card>
                {item.title}
                <Button onClick={() => removeHabit(item.id)}>X</Button>
              </Card>
            </List.Item>
          )}
        />
      </Modal>
    </div>
  );
};

export default ModalHabits;
