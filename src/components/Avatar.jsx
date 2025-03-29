import React from "react";

const Avatar = ({ name, size = "w-12 h-12", textSize = "text-lg" }) => {
  // Extract initials from the name
  const getInitials = (name) => {
    const words = name.trim().split(" ");
    return words.length > 1 ? `${words[0][0]}${words[1][0]}` : words[0][0]; // Handle single-word names
  };

  // Generate a consistent color from the name
  const getColor = (name) => {
    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-teal-500",
    ];
    const index =
      name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
      colors.length;
    return colors[index];
  };

  return (
    <div
      className={`flex items-center justify-center rounded-full text-white font-bold uppercase ${size} ${getColor(
        name
      )}`}
    >
      <span className={`${textSize}`}>{getInitials(name)}</span>
    </div>
  );
};

export default Avatar;
