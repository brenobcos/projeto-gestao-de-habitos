import { useCallback, useEffect, useState } from "react";

import "./style.css";

import { List } from "antd";

import api from "../../services/api";
import ButtonEdit from "../ButtonEdit";
import { TeamOutlined } from "@ant-design/icons";
import ModalHabits from "../ModalHabits";

const ContainerHabitos = () => {
  const token = JSON.parse(localStorage.getItem("@RunLikeaDev:token")) || "";

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

            color: "var(--black)",
            fontWeight: "900",

            display: "flex",
            alignItems: "center",

            marginTop: "50px",
          }}
        >
          <TeamOutlined style={{ marginRight: "20px" }} />
          MEUS HÁBITOS
          <ModalHabits />
        </div>
      </div>
      <List
        style={{ color: "white", paddingBottom: "50px" }}
        size="small"
        dataSource={data}
        pagination={{
          position: "bottom",
          size: "small",
          pageSize: "6",
        }}
        renderItem={(item) => (
          <List.Item key={item.id} style={{ display: "flex" }}>
            {item.title}
          </List.Item>
        )}
      />
    </div>
  );
};

export default ContainerHabitos;
