import React from "react";
import "../styles/CalculatorScreen.css";

var CalculatorScreen = (props) => {
  return (
    <div className="calculator-screen">
      <div>{props.input.toString()}</div>
      <div>{props.result.toString()}</div>
    </div>
  );
};

export default CalculatorScreen;
