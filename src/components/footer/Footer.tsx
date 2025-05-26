import React from "react";
import Modal from "../modal/Modal";

// interface Props {
//    title: string;
//    price: number | null;
//    desc?: string;
//    children?: ReactNode;
//    btn?: ReactNode;
// }

const Footer = () => {
   return (
      <div>
         Footer
         <Modal />
      </div>
   );
};

export default React.memo(Footer);
