import React from "react";
import Avatar from "./Avatar";
import Bio from "./Bio";
import Board from "./Board";

export default function Container() {
  const containerStyle = {
    textAlign: "center",
    justify: "center",
    boxSizing: "border-box",
    marginLeft: "30px",
    marginTop: "40px",
    width: "500px",
    height: "600px",
    border: "5px solid black",
  };

  return (
    <div style={containerStyle}>
      <Avatar />
      <Bio />
      <Board />
    </div>
  );
}
