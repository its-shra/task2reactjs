import React, { useState } from "react";
import CalculatorScreen from "./CalculatorScreen";
import CalculatorButtons from "./CalculatorButtons";
import "../styles/Calculator.css";

var Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (val) => {
    setInput(input + val);
  };

  const evaluate = () => {
    if (input === "") {
      alert("No expression!");
    } else {
      try {
        const result = eval(input);
        setResult(result.toString());
      } catch {
        alert("Enter valid expression");
        onClear();
      }
    }
  };

  const onClear = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="calculator">
      <CalculatorScreen input={input} result={result} />
      <CalculatorButtons
        onClick={handleInput}
        onCalculate={evaluate}
        onClear={onClear}
      />
    </div>
  );
};

export default Calculator;
