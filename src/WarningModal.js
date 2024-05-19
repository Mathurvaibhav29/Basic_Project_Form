import React from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");
const WarningModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Warning Modal"
      style={{
        overlay: { backgroundColor: "rgba(0,0,0,0.75)" },
        content: {
          top: "20%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      <h1 className="font-extrabold text-center">Warning!</h1>
      <p>Enter Name Please</p>
      <button
        onClick={onRequestClose}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
      >
        {" "}
        OK{" "}
      </button>
    </Modal>
  );
};
export default WarningModal;
