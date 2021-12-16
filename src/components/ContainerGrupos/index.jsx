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
    <div
      style={{
        background: "var(--black)",
        color: "var(--white)",

        padding: "5vh 10vw",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
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
          <div style={{ width: 200, margin: "10px 0" }}>
            <Search
              value={filterGroups}
              onChange={(e) => setFilterGroups(e.target.value)}
              placeholder="Nome do grupo"
            />
          </div>
        </div>
        <List
          style={{ maxWidth: "800px" }}
          size="small"
          dataSource={groupsFiltered}
          pagination={{
            position: "bottom",
            size: "small",
            pageSize: "6",
          }}
          // grid={{
          //   gutter: 16,
          //   xs: 1,
          //   sm: 2,
          //   md: 4,
          //   lg: 4,
          //   xl: 6,
          //   xxl: 3,
          // }}
          grid={{ gutter: 16, column: 2 }}
          renderItem={(groupsFiltered) => (
            <List.Item
              className="listBgBlack"
              key={groupsFiltered.id}
              style={{ display: "flex" }}
            >
              {groupsFiltered.name}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default ContainerGroups;
