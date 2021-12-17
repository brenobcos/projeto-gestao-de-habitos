import api from "../../services/api";

import { useCallback, useEffect, useState } from "react";
import { DatePicker, Space, Button, Form, Input, Divider, List } from "antd";
import toast from "react-hot-toast";

const Activity = ({ groupId }) => {
  //TOKEN
  const token = JSON.parse(localStorage.getItem("@RunLikeaDev:token")) || "";

  //HORÁRIO
  const [date, setDate] = useState("");
  const onChange = (date, dateString) => {
    setDate(dateString);
  };

  //POST
  const addActivity = ({ title }) => {
    const newActivity = {
      title,
      realization_time: `${date}T15:00:00Z`,
      group: groupId,
    };

    api
      .post("/activities/", newActivity, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Adicionado com sucesso");
        getActivity();
      })
      .catch((err) => toast.error("Erro ao adicionar"));
  };

  // ATIVIDADE - GET

  const [activity, setActivity] = useState([]);

  const getActivity = useCallback(() => {
    api
      .get(`/activities/?group=${groupId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setActivity(response.data.results);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setActivity, token]);

  useEffect(() => {
    getActivity();
  }, [getActivity]);

  //HÁBITOS - DELETE
  function removeActivity(id) {
    api
      .delete(`/activities/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        getActivity();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //HTML
  return (
    <>
      <Form onFinish={addActivity}>
        <Form.Item name="title" label="Atividade">
          <Input placeholder="Atividade" />
        </Form.Item>
        <Form.Item label="Data">
          <Space direction="vertical">
            <DatePicker onChange={onChange} />
          </Space>
        </Form.Item>
        <Button htmlType="submit">Adicionar</Button>
      </Form>

      <Divider orientation="left">Atividades do grupo</Divider>
      <List
        size="small"
        bordered
        dataSource={activity}
        renderItem={(item) => (
          <List.Item style={{ display: "flex", color: "black" }}>
            {item.title}
            <Button onClick={() => removeActivity(item.id)}>Remover</Button>
          </List.Item>
        )}
      />
    </>
  );
};

export default Activity;
