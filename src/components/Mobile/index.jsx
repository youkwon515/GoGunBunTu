import Header from "../Header";
import Main from "../Main";

export default function Mobile({setBorderWidth, borderWidth, categoryNumber, handlePoint, handleNext, number, next, submit, setSubmit, resultCategory, handleResultSet, result, setResult}) {
    let type = 'mobile';
    return (
        <>
            <Header type={type} borderWidth={borderWidth}/>
            <Main type={type} setBorderWidth={setBorderWidth} categoryNumber={categoryNumber} handlePoint={handlePoint} handleNext={handleNext} number={number} next={next} submit={submit} setSubmit={setSubmit} resultCategory={resultCategory} handleResultSet={handleResultSet} result={result} setResult={setResult}/>
        </>
    )
}