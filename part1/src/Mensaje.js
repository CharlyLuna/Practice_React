import React from "react";

function Mensaje({ message, styleColor }) {
  return <h1 style={{ color: { styleColor } }}>{message}</h1>;
}

export default Mensaje;
