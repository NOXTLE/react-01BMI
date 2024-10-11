import React, { useState } from "react";
import "./App.css";

export const App = () => {
  const [heightft, setHeightft] = useState();
  const [heightin, setHeightin] = useState();
  const [weight, setweight] = useState();
  const [metric, setMetric] = useState();
  const [bmi, setBMI] = useState(0);

  function handleClick() {
    if (metric == "lbs") {
      const kgweight = weight / 2.205;

      const height = Number(heightft * 12) + Number(heightin);

      const h = height / 39.37;

      setBMI((kgweight / (h * h)).toFixed(2));
    } else {
      const height = Number(heightft * 12) + Number(heightin);

      const h = height / 39.37;

      setBMI((weight / (h * h)).toFixed(2));
      if (bmi >= 30) {
        document.getElementById("result").style.backgroundColor = "red";
      } else if (bmi <= 25 && bmi >= 17) {
        document.getElementById("result").style.backgroundColor = "springgreen";
      } else {
        document.getElementById("result").style.backgroundColor = "white";
      }
    }
  }
  return (
    <div id="page">
      <h1>BMI Calculator</h1>
      <div id="Card">
        <div id="weight">
          <h1>Weight:</h1>
          <div>
            <input
              placeholder="weight"
              onChange={(e) => setweight(Number(e.target.value))}
            ></input>
            <select onChange={(e) => setMetric(e.target.value)}>
              <option value="kg">Kg</option>
              <option value="lbs">Lbs</option>
            </select>
          </div>
        </div>

        <div id="height">
          <h1>Height</h1>
          <div>
            <input
              placeholder="ft"
              onChange={(e) => setHeightft(e.target.value)}
            ></input>
            <input
              placeholder="inch"
              onChange={(e) => setHeightin(e.target.value)}
            ></input>
          </div>
        </div>
        <button id="btn" onClick={handleClick}>
          Calculate
        </button>
        <hr style={{ marginTop: "50px" }}></hr>
        {bmi > 0 ? <div id="result">{bmi}</div> : <></>}
      </div>
    </div>
  );
};
