import React from "react";



const Precio = ({ divNombre, titulos, personas, idSpan, precioFinal }) => {
  return (
    <>
      <div className={divNombre}>
        <div>
          <h2>{titulos}</h2>
          <p>{personas}</p>
        </div>
        <h3>
          $<span id={idSpan}>{precioFinal}</span>
        </h3>
      </div>
    </>
  );
};

export default Precio;
