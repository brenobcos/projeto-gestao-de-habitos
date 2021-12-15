import { useState } from 'react'
import { Modal } from 'antd'
import Inputs from '../Inputs'

function ModalEditarPerfil() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <button onClick={showModal}>teste</button>

      <Modal
        title="Alterar Perfil"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Inputs filled text="Nome do cidadao" label="Nome" />
        <Inputs filled text="Email do cidadao" label="E-mail" />
      </Modal>
    </>
  )
}

export default ModalEditarPerfil
