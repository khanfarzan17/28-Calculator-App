import { useState } from "react";
import "./styles.css";
import { FaBackspace } from "react-icons/fa";
import { evaluate } from "mathjs";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const calculate = () => {
    try {
      setResult(evaluate(input));
      setInput("");
    } catch {
      setResult("Error");
    }
  };

  const deleteSingle = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="container">
      <div className="Display">
        <h1 className="heading-input">{input}</h1>
        <h1 className="heading-result">{result}</h1>
      </div>

      <div className="button">
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick("00")}>00</button>
        <button onClick={handleClear}>C</button>
        <button onClick={deleteSingle}>
          <FaBackspace />
        </button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("%")}>%</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
