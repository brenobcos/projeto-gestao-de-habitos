import { useCallback, useEffect, useState } from "react";

import { Button, Modal, List } from "antd";
import Search from "antd/lib/transfer/search";

import api from "../../services/api";

const ModalGroups = () => {
  // MODAL
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const token = JSON.parse(localStorage.getItem("@RunLikeaDev:token")) || "";

  const [groups, setHabits] = useState([]);
  const [filterGroups, setFilterGroups] = useState("");

  const getGroups = useCallback(() => {
    api
      .get("/groups/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setHabits(response.data.results))
      .catch((err) => console.log(err));
  }, [setHabits, token]);

  useEffect(() => {
    if (groups.length === 0) {
      getGroups();
    }
  }, [groups.length, getGroups]);

  const groupsFiltered = groups.filter((item) =>
    item.name.toLowerCase().includes(filterGroups.toLowerCase())
  );

  return (
    <>
      <Button onClick={showModal}>Grupos</Button>

      <Modal
        title="Grupos"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Search
          value={filterGroups}
          onChange={(e) => setFilterGroups(e.target.value)}
          placeholder="Digite o nome do grupo"
        />

        <List
          size="small"
          bordered
          dataSource={groupsFiltered}
          renderItem={(item) => (
            <List.Item key={item.id} style={{ display: "flex" }}>
              <h2>Grupo:{item.name}</h2>
              <h3>Descrição: {item.description}</h3>
              <h4>Categoria: {item.category}</h4>
            </List.Item>
          )}
        />
      </Modal>
    </>
  );
};

export default ModalGroups;
