import React, { useState, useEffect } from "react";
const GalleryCard = (props) => {
  const [color, setColor] = useState("red");
  useEffect(() => {
    setTimeout(() => {
      setColor(props.color);
    }, 2000);
  }, []);
  return (
    <div style={{ border: "1px solid red" }}>
      <h1 style={{ color: color }}>{props.title}</h1>
      <button onClick={() => setColor("green")}>Update</button>
    </div>
  );
};
export default GalleryCard;
