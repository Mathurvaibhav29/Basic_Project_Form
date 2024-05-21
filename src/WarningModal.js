// WarningModal.js
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the app element for accessibility

const WarningModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Warning Modal"
      className="fixed inset-0 flex items-center justify-center p-4"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
        <h1 className="text-xl font-bold mb-4 text-center">Warning</h1>
        <p className="mb-4 text-center">Enter Name Please</p>
        <button
          onClick={onRequestClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default WarningModal;

