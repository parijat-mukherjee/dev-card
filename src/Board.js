import React from "react";
import Sticker from "./Sticker";

export default function Board() {
  const boardStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 0.5fr)",
    gridGap: "1px",
    textAlign: "center",
  };

  return (
    <div style={boardStyle}>
      <div>
        <Sticker color="red" />
      </div>
      <div>
        <Sticker color="green" />
      </div>
      <div>
        <Sticker color="yellow" />
      </div>
      <div>
        <Sticker color="magenta" />
      </div>
    </div>
  );
}
