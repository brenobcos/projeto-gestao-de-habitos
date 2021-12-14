import { EditFilled } from "@ant-design/icons";

import { useState } from "react";
import { Modal } from "antd";

// importar todos os modais

function ButtonEdit({ modal }) {
  // const [modalPicked, setModalPicked] = useState("modal")

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div
        style={{
          fontFamily: "Inter,Helvetica,Arial,Sans-serif",
          fontSize: "12px",
          width: "50px",

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onClick={showModal}
      >
        Editar
        <EditFilled />
      </div>

      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

export default ButtonEdit;
