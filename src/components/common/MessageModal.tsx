import { Button, Modal } from "antd";
import React, { useState } from "react";

type TypeProps = {
  title: string;
  content: string;
};

const MessageModal: React.FC<TypeProps> = ({ title, content }: TypeProps) => {
  const [visible, setVisible] = useState(false);


  const showModal = () => {
    setVisible(true);
  };

 

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <a type="primary" onClick={showModal}>
        {title}
      </a>
      <Modal
        title="Tin nhắn"
        visible={visible}
       footer={false}
       onCancel={handleCancel}
      >
        <p>{content}</p>
      </Modal>
    </>
  );
};

export default MessageModal;
