import React from "react";

export const ColorfulMessage = (props) => {
  const contentStyle = {
    color: props.color,
    fontSize: "18px",
  };

  return <p style={contentStyle}>{props.children}</p>;
};
