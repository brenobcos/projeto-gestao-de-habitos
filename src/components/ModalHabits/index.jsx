import api from "../../services/api";
import jwt_decode from "jwt-decode";
import { useCallback, useEffect, useState } from "react";

import { toast } from "react-hot-toast";

import { Button, Modal, Form, Input, List, Card, Tabs } from "antd";
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
  const [form] = Form.useForm();

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
      .then(() => {
        getData();
        toast.success("Adicionado com sucesso");
      })
      .catch((err) => toast.error("Erro ao adicionar"));

    form.resetFields();
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
        toast.error("Hábito removido");
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const { TabPane } = Tabs;
  return (
    <div>
      <PlusSquareFilled
        onClick={showModal}
        style={{
          cursor: "pointer",
          marginLeft: "20px",
          color: "var(--color-primary)",
        }}
      />

      <Modal
        title="Hábitos"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="Adicionar Hábito" key="1">
            <Form form={form} className="form" onFinish={onFinish}>
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
          </TabPane>
          <TabPane tab="Remover Hábito" key="2">
            <List
              size="small"
              style={{ color: "var(--black)" }}
              bordered
              dataSource={data}
              pagination={{
                position: "bottom",
                size: "small",
                pageSize: "2",
              }}
              renderItem={(item) => (
                <List.Item key={item.id}>
                  <Card>
                    <p>Hábito: {item.title}</p>
                    <p>Categoria: {item.category}</p>
                    <p>Dificuldade: {item.difficulty}</p>
                    <p>Frequência: {item.frequency}</p>

                    <Button onClick={() => removeHabit(item.id)}>
                      Remover
                    </Button>
                  </Card>
                </List.Item>
              )}
            />
          </TabPane>
        </Tabs>
      </Modal>
    </div>
  );
};

export default ModalHabits;
