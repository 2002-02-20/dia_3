import React, { useState } from "react";
import Estructura from "../Estructura";
import Infoprecios from "../../InfoPrecios/Infoprecios";

const Informacion = () => {
  const [billAmount, setBillAmount] = useState(0);

  const [numPersonas, setNumPersonas] = useState(1);
  const [tipPorcentage, setTipPorcent] = useState(0);
  const [customTip, setCustomTip] = useState('');

  const costoComida = (e) => {
    setBillAmount(parseFloat(e.target.value) || 0);
  };

  
  const valueBotones = (value) => {
    setTipPorcent(value)

  };

  const totalPersonas =(e) => {
    setNumPersonas(parseFloat(e.target.value) || 0);
  }
  
  const numCustom =(e) => {
    setCustomTip(parseFloat(e.target.value) || 0);
  }


 const tipAmount = (billAmount * tipPorcentage) / 100 / numPersonas

 const total = (billAmount / numPersonas) + tipAmount

  console.log(tipAmount.toFixed(2));
  console.log(total.toFixed(2), 'total');


  return (
    <>
      <div className="data-wrapper">
        <h1>Bill</h1>
        <label htmlFor="input-bill">
          <input
            className="input-bill"
            id="input-bill"
            type="number"
            min="0"
            value={billAmount}
            onChange={costoComida}
          />
        </label>
        <h2>Select Tip %</h2>

        <ul>
          <Estructura
            idPorcentage={"percentage-5"}
            valueBtn={"5"}
            textBtn={"5%"}
            clicked={() => valueBotones(5)}
          />

          <Estructura
            idPorcentage={"percentage-10"}
            valueBtn={10}
            textBtn={"10%"}
            clicked={() => valueBotones(10)}
          />

          <Estructura
            idPorcentage={"percentage-15"}
            valueBtn={15}
            textBtn={"15%"}
            clicked={() => valueBotones(15)}
          />
          <Estructura
            idPorcentage={"percentage-25"}
            valueBtn={25}
            textBtn={"25%"}
            clicked={() => valueBotones(25)}
          />
          <Estructura
            idPorcentage={"percentage-50"}
            valueBtn={50}
            textBtn={"50%"}
            clicked={() => valueBotones(50)}
          />
          <li>
            <input
              type="number"
              placeholder="Custom"
              id="custom-percentage-button"
              className="percentage-button-custom"
             
            />
          </li>
        </ul>
        <span id="people-error-message" className="error-people"></span>
        <h2>Number of People</h2>
        <label htmlFor="input-people">
          <input
            id="input-people"
            className="input-people"
            type="number"
            min="1"
            value={numPersonas}
            onChange={totalPersonas}
          />
        </label>
      </div>
      
    </>
  );
};
export default Informacion;
