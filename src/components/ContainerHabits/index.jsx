import { useCallback, useEffect, useState } from "react";

import "./style.css";

import { List } from "antd";

import api from "../../services/api";

import { TeamOutlined } from "@ant-design/icons";

import ModalHabits from "../ModalHabits";

const ContainerHabits = () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div
      style={{
        margin: "0 10vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "30px",
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
          size="small"
          dataSource={data}
          pagination={{
            position: "bottom",
            size: "small",
            pageSize: "6",
          }}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          renderItem={(item) => (
            <List.Item
              className="listBgWhite"
              key={item.id}
              style={{ display: "flex" }}
            >
              {item.title}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default ContainerHabits;
