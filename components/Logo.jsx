import React from "react";

export default function Logo() {
  return (
    <div>
      <div className="flex justify-center items-center gap-2">
        <img
          src="https://i.ibb.co/DPqqQJDv/logo.jpg" // Placeholder for Fresh Harvests logo icon
          alt="Fresh Harvests Logo"
          className="w-8 h-8 rounded-xl"
        />
        <h3 className="text-xl font-bold text-gray-800">Fresh Harvests</h3>
      </div>
    </div>
  );
}
