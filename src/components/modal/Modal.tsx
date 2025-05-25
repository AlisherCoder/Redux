import React, { useState } from "react";
import { Modal } from "antd";
import Form from "../../pages/Form";

interface Props {
   show: boolean;
}

const Popap: React.FC<Props> = ({ show }) => {
   const [isModalOpen, setIsModalOpen] = useState(show);

   const handleOk = () => {
      setIsModalOpen(false);
   };

   const handleCancel = () => {
      setIsModalOpen(false);
   };

   return (
      <>
         <Modal
            title='Basic Modal'
            closable={{ "aria-label": "Custom Close Button" }}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
         >
            <Form />
         </Modal>
      </>
   );
};

export default Popap;
