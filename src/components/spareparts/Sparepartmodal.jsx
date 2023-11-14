// import React from 'react'
import Modal from 'react-modal';
import React, { useState, useEffect, useMemo } from "react";

function Sparepartmodal() {
    const [showModal, setShowModal] = useState(false);
  return (
    <Modal
    isOpen={showModal}
    onRequestClose={() => setShowModal(false)}
    className="fixed inset-0 flex items-center justify-center z-50"
    overlayClassName="fixed inset-0 bg-black bg-opacity-50"
  >
    <div className="bg-black-500 rounded-lg p-6">
      <h1 className="text-xl font-bold mb-4">Confirmation</h1>
      <p className="bg-gradient-text mb-6">Are you sure you want to remove the vehicle?</p>
      <div className="flex justify-end">
        <button
          className="px-4 py-2  text-white rounded hover:bg-blue-600 mr-2"
          onClick={() => {
            // localStorage.removeItem("vinnData");
            setShowModal(false);
            // navigate("/dashboard");
          }}
        >
          Confirm
        </button>
        <button
          className="px-4 py-2  text-white rounded hover:bg-gray-400"
          onClick={() => setShowModal(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  </Modal>
  )
}

export default Sparepartmodal