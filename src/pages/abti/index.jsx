import React from "react"

import { CheckSituation } from "../../utils/checkSituation";

import Header from "../../components/Header";
import Main from "../../components/Main";

import Abti from "../../components/Abti";
import Result from "../../components/Result";

import data from '../../data/QuestionList.json';

import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
function AbtiPage() {
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

  let is = CheckSituation();

  const queryList = [];
  const certificateList = [];
  const jobList = [];

  const maxResult = [];

  let category = '';
  let categoryNum = 0;

  const ExerciseQ = data.Exercise.query;
  const ReadingQ = data.Reading.query;
  const LinguisticsQ = data.Linguistics.query;
  const FinanceQ = data.Finance.query;
  const ComputerQ = data.Computer.query;
  const MusicQ = data.Music.query;
  const TeachQ = data.Teach.query;

  const Ecertificate = data.Exercise.certificate;
  const Rcertificate = data.Reading.certificate;
  const Lcertificate = data.Linguistics.certificate;
  const Fcertificate = data.Finance.certificate;
  const Ccertificate = data.Computer.certificate;
  const Mcertificate = data.Music.certificate;
  const Tcertificate = data.Teach.certificate;

  const Ejob = data.Exercise.job;
  const Rjob = data.Reading.job;
  const Ljob = data.Linguistics.job;
  const Fjob = data.Finance.job;
  const Cjob = data.Computer.job;
  const Mjob = data.Music.job;
  const Tjob = data.Teach.job;


  queryList.push(ExerciseQ, ReadingQ, LinguisticsQ, FinanceQ, ComputerQ, MusicQ, TeachQ);
  certificateList.push(Ecertificate, Rcertificate, Lcertificate, Fcertificate, Ccertificate, Mcertificate, Tcertificate);
  jobList.push(Ejob, Rjob, Ljob, Fjob, Cjob, Mjob, Tjob);

  useEffect(() => {
    if (submit) {
      setBorderWidth();

      const max = Math.max(...result);
      
      for (let i = 0; i < result.length; i++) {
          if (max === result[i]) {maxResult.push(i);}
      }

      const random_recommend = Math.floor(Math.random() * maxResult.length);
      let recommend = maxResult[random_recommend];

      let count1 = result.filter(element => 3 === element).length;
      let count2 = result.filter(element => 0 === element).length;
      
      if (recommend === 0) {
          category = '운동';
      } else if (recommend === 1) {
          category = '독서';
      } else if (recommend === 2) {
          category = '어학';
      } else if (recommend === 3) {
          category = '금융';
      } else if (recommend === 4) {
          category = '컴퓨터';
      } else if (recommend === 5) {
          category = '음악';
      } else if (recommend === 6) {
          category = '교육';
      }

      categoryNum = recommend;
      

      if (count1 === 7) {
          category = '만능';
      } else if (count2 === 7) {
          category = '재능이 없다..';
      }

      handleResultSet(category, categoryNum);
  }

  }, [submit])

  const handleSubmit = () => {
    setSubmit(true)
  }

  return (
  <>
    <Header type={is} borderWidth={borderWidth}/>
    <Main>
      {submit || <Abti type={is} queryList={queryList} num={number} page={next} handleSubmit={handleSubmit} handlePoint={handlePoint} handleNext={handleNext}/>}
      {submit && <Result type={is} Rresult={result} result={resultCategory} certificateList={certificateList[categoryNumber]} jobList={jobList[categoryNumber]}/>}
    </Main>
    {is !== "pc" ? <Footer /> : ""}
  </>
  );
}

export default AbtiPage;