import { useState } from "react";

import { Modal, Tabs } from "antd";

import { EditFilled } from "@ant-design/icons";
import Activity from "../Activity";
import Goals from "../Goals";

const ModalEditGroup = ({ groupId, name }) => {
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

  return (
    <>
      <EditFilled
        onClick={showModal}
        style={{ cursor: "pointer", marginLeft: "20px" }}
      />

      <Modal
        title={name}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="Atividade" key="1">
            <Activity groupId={groupId} />
          </TabPane>
          <TabPane tab="Metas" key="2">
            <Goals groupId={groupId} />
          </TabPane>
        </Tabs>
      </Modal>
    </>
  );
};

export default ModalEditGroup;
