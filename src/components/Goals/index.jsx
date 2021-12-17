import api from "../../services/api";
import { useCallback, useEffect, useState } from "react";
import { Button, Form, Input, Divider, List } from "antd";
import { toast } from "react-hot-toast";

const Goals = ({ groupId }) => {
  //TOKEN
  const token = JSON.parse(localStorage.getItem("@RunLikeaDev:token")) || "";

  // POST

  const addGoal = ({ title, how_much_achieved, difficulty }) => {
    const newGoal = {
      title,
      how_much_achieved,
      difficulty,
      achieved: false,
      group: groupId, //GROUPID AQUI EM TUDO QUE ESTIVER COM 1159
    };

    api
      .post("/goals/", newGoal, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => toast.success("Meta criada com sucesso"))
      .then(getGoals)
      .catch((err) => toast.error("Falha ao criar meta"));
  };

  //GOALS - GET
  const [goals, setGoals] = useState([]);

  const getGoals = useCallback(() => {
    api
      .get(`/goals/?group=${groupId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setGoals(response.data.results))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setGoals, token]);

  useEffect(() => {
    getGoals();
  }, [getGoals]);

  //GOALS - DELETE
  const removeGoal = (id) => {
    api
      .delete(`/goals/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.error("Meta removida");
        getGoals();
      });
  };

  return (
    <>
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
        <Button htmlType="submit">Adicionar</Button>
      </Form>
      <Divider orientation="left">Remover Meta</Divider>

      <List
        size="small"
        bordered
        dataSource={goals}
        renderItem={(item) => (
          <List.Item key={item.id} style={{ display: "flex", color: "black" }}>
            {item.title}
            <Button onClick={() => removeGoal(item.id)}>X</Button>
          </List.Item>
        )}
      />
    </>
  );
};

export default Goals;
