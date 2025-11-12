import { useState, useEffect, useRef } from 'react'

function Calculator() {
  const expressionRef=useRef();
  const [expression, setExpression] = useState([]); // Stores partial expression pieces
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState(0);
  const [sign, setSign] = useState("");
  const [result, setResult] = useState(""); // ✅ new state to display result

  const addToExpression = (value) => {
    if (value === "Clear") {
      setExpression([]);
      setFirst("");
      setSecond(0);
      setSign("");
      setResult("");
      return;
    }

    if (first === "" && (value === "+" || value === "/" || value === "*" || value === "-")) {
      alert("Cannot start with an operator");
      return;
    }

    if (value === "+" || value === "/" || value === "*" || value === "-") {
      setExpression((prevExp) => [...prevExp, first, value]);
      setFirst("");
    } else if (value === "=") {
      handleEqual();
    } else {
      setFirst((prev) => prev + value);
    }
  };

  // ✅ Function to handle "=" click
  const handleEqual = () => {
    if (first === "" && expression.length === 0) return;

    // Combine expression + current input
    const finalExpression = [...expression, first].join(" ");
    try {
      // ⚠️ Use eval carefully in controlled environments only
      const evalResult = eval(finalExpression);
      setResult(evalResult);
      setExpression([]);
      setFirst(evalResult.toString());
    } catch (error) {
      alert("Invalid Expression");
      setResult("");
    }
  };

    useEffect(() => {
      expressionRef.current.scrollLeft = expressionRef.current.scrollWidth;
  }, [expression]);

  return (
    <>
      <div className="bg-black px-5 pb-5">&nbsp;
        <div className="mt-[60px] text-black border-t-0">
          <div className="calculator max-w-md mx-auto bg-[#7cc8d9] border-4 border-[#391801] rounded-4xl p-2">
            <div className=" bg-[#caebe4] py-5 px-2 border-4 border-[#E2FBFF] rounded-4xl border-t-4 border-r-4 border-b-0 border-l-0">
              <div className=" bg-[#caebe4] py-5 px-2 border-4 border-[#E2FBFF] rounded-4xl border-t-0 border-r-0 border-b-4 border-l-4">
                <div className="result border-4 border-[#391801]">
                  <div className=" bg-[#c5d4d7] font-mono text-5xl py-1 px-2 border-4 border-[#4a818c] text-right overflow-x-scroll" ref={expressionRef}>
                    {/* {expression} */}
                    <p className="text-sm text-gray-500">{[...expression, first].join(" ")}</p>
        <h1 className="text-2xl font-bold">{(result !== "" ? result : first) || "0"}</h1>
                  </div>
                </div>
                <div className="buttons py-1  px-2 mt-5">
                  <div className="bg-[#FADDA1] hover:bg-[#fadca1d2] flex justify-center items-center border-4 border-[#391801] rounded-2xl text-xl cursor-pointer mb-2" onClick={() => addToExpression("Clear")}>Clear</div>
                  <div className="grid grid-cols-4 grid-rows-4 gap-2">
                    <div className="bg-[#FADDA1] hover:bg-[#fadca1d2] flex justify-center items-center aspect-square border-4 border-[#391801] rounded-2xl text-4xl cursor-pointer" onClick={() => addToExpression("7")}>7</div>
                    <div className="bg-[#FADDA1] hover:bg-[#fadca1d2] flex justify-center items-center aspect-square border-4 border-[#391801] rounded-2xl text-4xl cursor-pointer" onClick={() => addToExpression("8")}>8</div>
                    <div className="bg-[#FADDA1] hover:bg-[#fadca1d2] flex justify-center items-center aspect-square border-4 border-[#391801] rounded-2xl text-4xl cursor-pointer" onClick={() => addToExpression("9")}>9</div>
                    <div className="bg-[#FADDA1] hover:bg-[#fadca1d2] flex justify-center items-center aspect-square border-4 border-[#391801] rounded-2xl text-4xl cursor-pointer" onClick={() => addToExpression("/")}>/</div>
                    <div className="bg-[#FADDA1] hover:bg-[#fadca1d2] flex justify-center items-center aspect-square border-4 border-[#391801] rounded-2xl text-4xl cursor-pointer" onClick={() => addToExpression("4")}>4</div>
                    <div className="bg-[#FADDA1] hover:bg-[#fadca1d2] flex justify-center items-center aspect-square border-4 border-[#391801] rounded-2xl text-4xl cursor-pointer" onClick={() => addToExpression("5")}>5</div>
                    <div className="bg-[#FADDA1] hover:bg-[#fadca1d2] flex justify-center items-center aspect-square border-4 border-[#391801] rounded-2xl text-4xl cursor-pointer" onClick={() => addToExpression("6")}>6</div>
                    <div className="bg-[#FADDA1] hover:bg-[#fadca1d2] flex justify-center items-center aspect-square border-4 border-[#391801] rounded-2xl text-4xl cursor-pointer" onClick={() => addToExpression("*")}>*</div>
                    <div className="bg-[#FADDA1] hover:bg-[#fadca1d2] flex justify-center items-center aspect-square border-4 border-[#391801] rounded-2xl text-4xl cursor-pointer" onClick={() => addToExpression("1")}>1</div>
                    <div className="bg-[#FADDA1] hover:bg-[#fadca1d2] flex justify-center items-center aspect-square border-4 border-[#391801] rounded-2xl text-4xl cursor-pointer" onClick={() => addToExpression("2")}>2</div>
                    <div className="bg-[#FADDA1] hover:bg-[#fadca1d2] flex justify-center items-center aspect-square border-4 border-[#391801] rounded-2xl text-4xl cursor-pointer" onClick={() => addToExpression("3")}>3</div>
                    <div className="bg-[#FADDA1] hover:bg-[#fadca1d2] flex justify-center items-center aspect-square border-4 border-[#391801] rounded-2xl text-4xl cursor-pointer" onClick={() => addToExpression("-")}>-</div>
                    <div className="bg-[#FADDA1] hover:bg-[#fadca1d2] flex justify-center items-center aspect-square border-4 border-[#391801] rounded-2xl text-4xl cursor-pointer" onClick={() => addToExpression("0")}>0</div>
                    <div className="bg-[#FADDA1] hover:bg-[#fadca1d2] flex justify-center items-center aspect-square border-4 border-[#391801] rounded-2xl text-4xl cursor-pointer" onClick={() => addToExpression(".")}>.</div>
                    <div className="bg-[#FADDA1] hover:bg-[#fadca1d2] flex justify-center items-center aspect-square border-4 border-[#391801] rounded-2xl text-4xl cursor-pointer" onClick={() => addToExpression("=")}>=</div>
                    <div className="bg-[#FADDA1] hover:bg-[#fadca1d2] flex justify-center items-center aspect-square border-4 border-[#391801] rounded-2xl text-4xl cursor-pointer" onClick={() => addToExpression("+")}>+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Calculator
