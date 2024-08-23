import React from "react";

function Card({
  img = "https://via.placeholder.com/400x200",
  title = "Dummy Picture",
  description = "This is a single card component. It can be duplicated to create a gallery effect. By Muhammad Hasan Alam",
  onPress,
}) {
  return (
    <div
      onClick={onPress}
      className="max-w-xs w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
    >
      <div className="p-4">
        <img
          className="w-full h-48 object-cover rounded-t-lg"
          src={img}
          alt="Card Image"
        />
      </div>

      <div className="p-4">
        <h2 className="text-white text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default Card;
