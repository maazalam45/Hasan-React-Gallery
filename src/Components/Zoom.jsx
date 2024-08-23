import React from "react";

function Zoom({ img, title, description, onClose }) {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
        <div className="bg-gray-900 text-white rounded-lg shadow-lg max-w-2xl w-full relative flex flex-col p-6 mx-4 sm:mx-6 lg:mx-8">
          <div className="mb-4 w-full">
            <img
              className="w-full h-72 object-cover rounded-lg"
              src={img}
              alt={title}
            />
          </div>

          <div className="flex-grow mb-20 text-center">
            <h2 className="text-2xl font-semibold mb-3">{title}</h2>
            <p className="text-gray-300 text-base">{description}</p>
          </div>

          <button
            className="bg-red-600 text-white font-bold text-lg py-3 px-6 rounded-full shadow-lg hover:bg-red-700 transition-transform transform scale-100 hover:scale-105 duration-300 absolute bottom-6 left-1/2 transform -translate-x-1/2 focus:outline-none"
            onClick={onClose}
          >
            Back to Gallery
          </button>
        </div>
      </div>
    </>
  );
}

export default Zoom;
