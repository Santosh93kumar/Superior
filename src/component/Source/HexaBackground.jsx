import React from "react";

function HexagonBackground({ size = "w-20 h-20" }) {
  return (
    <div
      className={`${size} border-2 border-zinc-500 hover:bg-zinc-600 transition-colors duration-300`}
      style={{
        clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
        backgroundColor: "transparent",
      }}
    ></div>
  );
}

export default HexagonBackground;
