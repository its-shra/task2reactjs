import React from "react";
import "../styles/CalculatorButtons.css";

var CalculatorButtons = (props) => {
  const btnValues = [
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    ["0", ".", "="],
  ];
  const lastBtns = ["C", "/", "*", "-", "+"];
  return (
    <div className="calculator-buttons">
      <table className="table1">
        {btnValues.map((row) => {
          return (
            <tr>
              {row.map((col) => {
                return <td><button onClick={col === "=" ? () => props.onCalculate() : () => props.onClick(col)}>{col}</button></td>;
              })}
            </tr>
          );
        })}
      </table>
      <table className="table2">
        {lastBtns.map((e) => {
          return (
            <tr>
              <td><button onClick={e === "C" ? () => props.onClear() : () => props.onClick(e)}>{e}</button></td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default CalculatorButtons;
