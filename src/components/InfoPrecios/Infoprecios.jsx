import React from "react";
import Precio from "../Estructura/Precios/Precio";



const Infoprecios = () => {
  return (
    <>
      <div className="result-wrapper">
        <div className="result-txt">
          <Precio
            divNombre={"text-amount"}
            titulos={"Tip Amount"}
            personas={"/ person"}
            idSpan={"tip-amount"}
            precioFinal={0}
          />
          <Precio
            divNombre={"total-amount"}
            titulos={"Total"}
            personas={"/ person"}
            idSpan={"total"}
            precioFinal={0}
          />
          
        </div>
        <button type="button" id="reset-button" className="reset-button">
          RESET
        </button>
      </div>
    </>
  );
};

export default Infoprecios;
