import { useCallback, useEffect, useState } from "react";

import "./style.css";

import { List } from "antd";
import Search from "antd/lib/transfer/search";

import api from "../../services/api";
import ModalGroups from "../ModalGrupos";
import { TeamOutlined } from "@ant-design/icons";

const ContainerGroups = () => {
  const token = JSON.parse(localStorage.getItem("@RunLikeaDev:token")) || "";

  const [groups, setHabits] = useState([]);
  const [filterGroups, setFilterGroups] = useState("");

  const getGroups = useCallback(() => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setHabits(response.data))
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
    <div style={{ margin: "0 10vw" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            fontFamily: "Roboto, black, sans-serif",
            fontSize: "24px",
            color: "var(--color-primary",
            fontWeight: "900",
          }}
        >
          <TeamOutlined style={{ marginRight: "20px" }} />
          MEUS GRUPOS
          <ModalGroups />
        </div>
        <div style={{ width: 200 }}>
          <Search
            value={filterGroups}
            onChange={(e) => setFilterGroups(e.target.value)}
            placeholder="Nome do grupo"
          />
        </div>
      </div>
      <List
        style={{ color: "white", paddingBottom: "50px" }}
        size="small"
        dataSource={groupsFiltered}
        pagination={{
          position: "bottom",
          size: "small",
          pageSize: "6",
        }}
        renderItem={(groupsFiltered) => (
          <List.Item key={groupsFiltered.id} style={{ display: "flex" }}>
            {groupsFiltered.name} Editar
          </List.Item>
        )}
      />
    </div>
  );
};

export default ContainerGroups;
