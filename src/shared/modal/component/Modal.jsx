import { useState } from "react";

import "../css/modal.css";

const Modal = ({ setIsOpenProp }) => {
  const [file, setFile] = useState();
  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="modal-parent-container">
      <div className="modal-child-container ">
        <div className="child-modal-header">
          {" "}
          <span className="close" onClick={() => setIsOpenProp(false)}>
            &times;
          </span>
        </div>
        <div className="child-modal-body">
          <div className="d-flex justify-content-center">
            <input type="file" onChange={handleChange} />
          </div>
          <div className="p-2 d-flex justify-content-center ">
            <img className="w-50 h-50" src={file} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
