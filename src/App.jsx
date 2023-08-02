import React from "react"
import { useMediaQuery } from "react-responsive"
import Desktop from "./components/Desktop";
import Mobile from "./components/Mobile";
import { useState } from "react";
function App() {
  const [submit, setSubmit] = useState(false);
  const [resultCategory, setResultCategory] = useState('');
  const [categoryNumber, setCategoryNumber] = useState(0);
  const [result, setResult] = useState([]);
  const [next, setNext] = useState(0);
  const [number, setNumber] = useState(0);
  const [borderWidth, setBorderWidth] = useState(0);

  const handleNext = () => {
    let nextPage = next + 1;
    let numSet = number + 3;
    handleSetBorderWidth();
    setNumber(numSet);
    setNext(nextPage);
  }

  const handlePoint = (point) => {
    setResult([...result, point]);
  }

  const handleResultSet = (result, resultNum) => {
    setResultCategory(result);
    setCategoryNumber(resultNum)
  }

  const handleSetBorderWidth = () => {
    let width = borderWidth;
    width += 15;
    if (width > 100) {
      width -= (width - 100);
    }
    setBorderWidth(width);
  }

  const isPc = useMediaQuery({
    query : "(min-width:767px)"
  });

  const isMobile = useMediaQuery({
    query : "(max-width:767px)"
  });
  

  return (
  <>
    
    {isPc && <Desktop setBorderWidth={handleSetBorderWidth} borderWidth={borderWidth} categoryNumber={categoryNumber} handlePoint={handlePoint} handleNext={handleNext} number={number} next={next} submit={submit} setSubmit={setSubmit} resultCategory={resultCategory} handleResultSet={handleResultSet} result={result} setResult={setResult}/>}
    {isMobile && <Mobile setBorderWidth={handleSetBorderWidth} borderWidth={borderWidth} categoryNumber={categoryNumber} handlePoint={handlePoint} handleNext={handleNext} number={number} next={next} submit={submit} setSubmit={setSubmit} resultCategory={resultCategory} handleResultSet={handleResultSet}  result={result} setResult={setResult}/>}
  </>
  );
}

export default App;