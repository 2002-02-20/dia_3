import React, { useState } from "react";

const Estructura = ({ idPorcentage, valueBtn, textBtn, clicked }) => {
  


  return (
    <>
      <li
        className="selected"
        id={idPorcentage}
        onClick={() => {
          clicked();
        }}
      >
        <button
          type="button"
          className="percentage-button"
          value={valueBtn}
          onClick={() => {
            clicked();
          }}
        >
          {textBtn}
        </button>
      </li>
    </>
  );
};

export default Estructura;
