import React from "react";
import "./container.css";

const Container = ({ children, width }) => {
  return (
    <div
      style={{
        width: `${width}%`,
        maxHeight: "600px",
        overflow: "auto",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "2rem",
      }}
      className="mobile-container"
    >
      {children}
    </div>
  );
};

export default Container;
