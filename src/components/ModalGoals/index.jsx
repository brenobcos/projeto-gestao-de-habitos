import api from "../../services/api";

import { useCallback, useEffect, useState } from "react";
import { Button, Modal, Form, Input, Divider, List } from "antd";

const Goals = ({ id }) => {
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

  const addGoal = ({
    title,
    how_much_achieved,
    difficulty,
    achieved,
    group,
  }) => {
    const newGoal = {
      title,
      how_much_achieved,
      difficulty,
      achieved,
      group,
    };

    api
      .post("/goals/", newGoal, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        getGoals();
      })
      .catch((err) => console.log(err));
  };

  //GOALS - GET
  const [goals, setGoals] = useState([]);

  const getGoals = useCallback(() => {
    api
      .get("/goals/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setGoals(response.data))
      .catch((err) => console.log(err));
  }, [setGoals, token]);

  useEffect(() => {
    if (goals.length === 0) {
      getGoals();
    }
  }, [goals.length, getGoals]);

  //GOALS - DELETE
  function removeGoal(id) {
    api
      .delete(`/goals/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        getGoals();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Button onClick={showModal}>Modal Metas</Button>

      <Modal
        title="Metas"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Divider orientation="left">Adicionar Meta</Divider>

        <Form className="form" onFinish={addGoal}>
          <Form.Item name="title" label="Meta">
            <Input placeholder="Meta" />
          </Form.Item>
          <Form.Item name="difficulty" label="Dificuldade">
            <Input placeholder="Dificuldade" />
          </Form.Item>
          <Form.Item name="how_much_achieved" label="Progresso">
            <Input placeholder="Progresso" />
          </Form.Item>
          <Form.Item name="achieved" label="Concluido">
            <Input placeholder="Concluido" />
          </Form.Item>
          <Form.Item name="group" label="Grupo">
            <Input placeholder="Grupo" />
          </Form.Item>
          <Button htmlType="submit">Adicionar</Button>
        </Form>
        <Divider orientation="left">Remover Meta</Divider>

        <List
          size="small"
          bordered
          dataSource={goals}
          renderItem={(item) => (
            <List.Item key={item.id} style={{ display: "flex" }}>
              {item.title}
              <Button onClick={() => removeGoal(item.id)}>X</Button>
            </List.Item>
          )}
        />
      </Modal>
    </div>
  );
};

export default Goals;
