import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionValuse,
  appendValue,
  backValue,
  calculate,
  clearValue,
} from "../redux/Calculator.slice";

const Calculator = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.calculator.value);
  const btns = useSelector((state) => state.calculator.btns);
  console.log(btns);

  const handleButtonClick = (buttonValue) => {
    dispatch(appendValue(buttonValue));
  };

  const actionHandler = (action) => {
    dispatch(actionValuse(action));
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <input
            type="text"
            value={value}
            readOnly
            className="border p-2 w-64 text-right rounded mb-4"
          />
          <div className="grid grid-cols-4 gap-2">
            <button
              onClick={() => dispatch(backValue())}
              className="col-span-4 bg-gray-500 text-white p-2 rounded"
            >
              Back
            </button>

            {["7", "8", "9", "/"].map((btn) => (
              <button
                key={btn}
                onClick={() => handleButtonClick(btn)}
                className="bg-blue-500 text-white p-2 rounded"
              >
                {btn}
              </button>
            ))}
            {["4", "5", "6", "*"].map((btn) => (
              <button
                key={btn}
                onClick={() => handleButtonClick(btn)}
                className="bg-blue-500 text-white p-2 rounded"
              >
                {btn}
              </button>
            ))}
            {["1", "2", "3", "-"].map((btn) => (
              <button
                key={btn}
                onClick={() => handleButtonClick(btn)}
                className="bg-blue-500 text-white p-2 rounded"
              >
                {btn}
              </button>
            ))}
            {["0", ".", "=", "+"].map((btn) => (
              <button
                key={btn}
                onClick={() =>
                  btn === "=" ? dispatch(calculate()) : handleButtonClick(btn)
                }
                className="bg-blue-500 text-white p-2 rounded"
              >
                {btn}
              </button>
            ))}
            <button
              onClick={() => dispatch(clearValue())}
              className="col-span-4 bg-red-500 text-white p-2 rounded"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-screen">
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <input
            type="text"
            value={value}
            readOnly
            className="border p-2 w-64 text-right rounded mb-4"
          />
          <div className="grid grid-cols-4 gap-2">
            {btns.map((btn) => (
              <button
                key={btn}
                onClick={() => actionHandler(btn)}
                className="bg-blue-500 text-white p-2 rounded"
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
