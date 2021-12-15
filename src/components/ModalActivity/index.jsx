import api from "../../services/api";

import { useCallback, useEffect, useState } from "react";
import {
  DatePicker,
  Space,
  Button,
  Modal,
  Form,
  Input,
  Divider,
  List,
} from "antd";

const Activity = () => {
  //TOKEN
  const token = JSON.parse(localStorage.getItem("@RunLikeaDev:token")) || "";

  // MODAL
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //HORÁRIO
  const [date, setDate] = useState("");
  const onChange = (date, dateString) => {
    setDate(dateString);
  };

  const addActivity = ({ title }) => {
    const newActivity = {
      title,
      realization_time: `${date}T15:00:00Z`,
      group: 412,
    };

    api
      .post("/activities/", newActivity, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        getActivity();
      })
      .catch((err) => console.log(err));
  };

  // ATIVIDADE - GET

  const [activity, setActivity] = useState([]);

  const getActivity = useCallback(
    (groupId) => {
      api
        //   .get(`/activities/?group=${groupId}`)
        .get(`/activities/?group=412`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setActivity(response.data.results);
        })
        .catch((err) => console.log(err));
    },
    [setActivity, token]
  );

  useEffect(() => {
    if (activity.length === 0) {
      getActivity();
    }
  }, [activity.length, getActivity]);

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
    <div>
      <Button onClick={showModal}>Modal Atividades</Button>

      <Modal
        title="Atividades"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Divider orientation="left">Adicionar atividade</Divider>
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
            <List.Item style={{ display: "flex" }}>
              {item.title}
              <Button onClick={() => removeActivity(item.id)}>X</Button>
            </List.Item>
          )}
        />
      </Modal>
    </div>
  );
};

export default Activity;
