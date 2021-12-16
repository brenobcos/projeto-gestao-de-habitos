import { useCallback, useEffect, useState } from "react";

import { Button, Modal, List, Form, Input, Card, Tabs } from "antd";
import Search from "antd/lib/transfer/search";

import api from "../../services/api";
import { PlusSquareFilled } from "@ant-design/icons";

const ModalGroups = () => {
  // MODAL
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // TABS

  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }

  // GROUPS - POST

  const token = JSON.parse(localStorage.getItem("@RunLikeaDev:token")) || "";

  const createGroup = ({ name, description, category }) => {
    const newGroup = {
      name,
      description,
      category,
    };
    api
      .post("/groups/", newGroup, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response.data);
        getGroups();
      })
      .catch((err) => console.log(err));
  };

  //GROUPS - GET
  const [groups, SetGroups] = useState([]);
  const [filterGroups, setFilterGroups] = useState("");

  const getGroups = useCallback(() => {
    api
      .get("/groups/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => SetGroups(response.data.results))
      .catch((err) => console.log(err));
  }, [SetGroups, token]);

  const groupsFiltered = groups.filter((item) =>
    item.name.toLowerCase().includes(filterGroups.toLowerCase())
  );

  useEffect(() => {
    getGroups();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //GROUPS INSCRIBEDS - GET
  const [groupsInscribeds, SetgroupsInscribeds] = useState([]);
  const [filterGroupsInscribeds, setFilterGroupsInscribeds] = useState("");

  const getGroupsInscrebeds = useCallback(() => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => SetgroupsInscribeds(response.data))
      // .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }, [SetgroupsInscribeds, token]);

  const groupsInscribedsFiltered = groupsInscribeds.filter((item) =>
    item.name.toLowerCase().includes(filterGroupsInscribeds.toLowerCase())
  );

  useEffect(() => {
    getGroupsInscrebeds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //DELETE
  const removeGroup = (id) => {
    api
      .delete(`/groups/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        getGroups();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //INSCRIÇÃO
  const subsUser = (id) => {
    api
      .post(`/groups/${id}/subscribe/`, "", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <PlusSquareFilled
        onClick={showModal}
        style={{ cursor: "pointer", marginLeft: "50px" }}
      />

      <Modal
        title="Grupos"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Criar Grupo" key="1">
            <Form className="form" onFinish={createGroup}>
              <Form.Item name="name" label="Título">
                <Input placeholder="Nome do Grupo" autoComplete="off" />
              </Form.Item>
              <Form.Item name="description" label="Descrição do Grupo">
                <Input placeholder="Descrição do Grupo" autoComplete="off" />
              </Form.Item>
              <Form.Item name="category" label="Categoria">
                <Input placeholder="Categoria" autoComplete="off" />
              </Form.Item>

              <Button htmlType="submit">Criar Grupo</Button>
            </Form>
          </TabPane>

          <TabPane tab="Inscrever-se" key="2">
            <Search
              value={filterGroups}
              onChange={(e) => setFilterGroups(e.target.value)}
              placeholder="Digite o nome do grupo"
            />

            <List
              size="small"
              bordered
              style={{ color: "var(--black)" }}
              dataSource={groupsFiltered}
              pagination={{
                position: "bottom",
                size: "small",
                pageSize: "15",
              }}
              renderItem={(item) => (
                <List.Item key={item.id}>
                  <Card size="small" title={item.name} style={{ width: 300 }}>
                    <p>Descrição: {item.description}</p>
                    <p>Categoria: {item.category}</p>
                    <Button onClick={() => subsUser(item.id)}>Entrar</Button>
                  </Card>
                </List.Item>
              )}
            />
          </TabPane>
          <TabPane tab="Sair do grupo" key="3">
            <Search
              value={filterGroupsInscribeds}
              onChange={(e) => setFilterGroupsInscribeds(e.target.value)}
              placeholder="Digite o nome do grupo"
            />

            <List
              style={{ color: "white", paddingBottom: "50px" }}
              size="small"
              dataSource={groupsInscribedsFiltered}
              pagination={{
                position: "bottom",
                size: "small",
                pageSize: "3",
              }}
              renderItem={(item) => (
                <List.Item key={item.id} style={{ display: "flex" }}>
                  <Card size="small" title={item.name} style={{ width: 300 }}>
                    <Button onClick={() => removeGroup(item.id)}>Sair</Button>
                  </Card>
                </List.Item>
              )}
            />
          </TabPane>
        </Tabs>
      </Modal>
    </>
  );
};

export default ModalGroups;
