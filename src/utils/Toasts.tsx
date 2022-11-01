import React, { useState } from "react";

import Toast from "react-bootstrap/Toast";

const Toasts: React.FC = () => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Warning</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>
          This page aims to organise events organised by AWS in Switzerland.
          This is not official AWS website!
        </Toast.Body>
      </Toast>
    </>
  );
};

export default Toasts;
