import React from "react";

export default function Sticker(props) {
  const stickerStyle = {
    boxSizing: "border-box",
    border: "2px solid black",
    borderRadius: "30px",
    width: "100px",
    height: "20px",
    backgroundColor: props.color,
  };

  return <div style={stickerStyle}>{props.text}</div>;
}
