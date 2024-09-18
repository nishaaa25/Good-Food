// src/Popup.js
import React from 'react';

const Popup = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
        <h2 className="text-lg font-semibold mb-4">Action Required</h2>
        <p className="mb-4">
          Please download the CORS extension and turn it on, then refresh the page.
        </p>
        <p className="mb-4">
          For instructions on how to do this, check out this <a href="https://youtu.be/gTG3gKy4cgo?si=xmdYbfo4aK2wMhim" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">YouTube tutorial</a>.
        </p>
        <p>
          You can download the extension from the <a href="https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Chrome Web Store</a>.
        </p>
        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
