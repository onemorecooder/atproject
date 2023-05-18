import React, { useState, useEffect } from "react";

const ColorChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");

  useEffect(() => {
    const handleBackgroundChange = () => {
      setBackgroundColor((prevColor) =>
        prevColor === "white" ? "black" : "white"
      );
    };

    window.addEventListener("click", handleBackgroundChange);

    return () => {
      window.removeEventListener("click", handleBackgroundChange);
    };
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: backgroundColor,
        transition: "background-color 0.5s ease",
      }}
    ></div>
  );
};

export default ColorChanger;
