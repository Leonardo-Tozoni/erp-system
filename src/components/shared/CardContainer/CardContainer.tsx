import React from "react";

interface CardContainerProps {
  children: React.ReactNode;
}

export default function CardContainer({ children }: CardContainerProps) {
  return (
    <div
      style={{
        width: "85vw",
        height: "91vh",
        margin: "40px auto",
        border: "1px solid #e0e0e0",
        borderRadius: "20px",
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        padding: "32px",
        boxSizing: "border-box",
        overflow: "auto",
      }}
    >
      {children}
    </div>
  );
}