import Abti from "../Abti";
import Result from "../Result";
import { useState } from "react";
import data from '../../data/QuestionList.json';

export default function Main({type = "pc"}) {
    const [next, setNext] = useState(0);
    const [number, setNumber] = useState(0);
    const [result, setResult] = useState([]);
    const [submit, setSubmit] = useState(false);
    const queryList = [];
    const certificateList = [];
    const jobList = [];

    const maxResult = [];
    let category = '';
    let categoryNum = 0;

    const handlePoint = (point) => {
        setResult([...result, point]);
    }

    const handleNext = () => {
        let nextPage = next + 1;
        let numSet = number + 3;
        setNumber(numSet);
        setNext(nextPage);
    }

    const ExerciseQ = data.Exercise.query;
    const ReadingQ = data.Reading.query;
    const LinguisticsQ = data.Linguistics.query;
    const FinanceQ = data.Finance.query;
    const ComputerQ = data.Computer.query;
    const MusicQ = data.Music.query;
    const BonusQ = data.Bonus.query;

    const Ecertificate = data.Exercise.certificate;
    const Rcertificate = data.Reading.certificate;
    const Lcertificate = data.Linguistics.certificate;
    const Fcertificate = data.Finance.certificate;
    const Ccertificate = data.Computer.certificate;
    const Mcertificate = data.Music.certificate;

    const Ejob = data.Exercise.job;
    const Rjob = data.Reading.job;
    const Ljob = data.Linguistics.job;
    const Fjob = data.Finance.job;
    const Cjob = data.Computer.job;
    const Mjob = data.Music.job;

    queryList.push(ExerciseQ, ReadingQ, LinguisticsQ, FinanceQ, ComputerQ, MusicQ, BonusQ);
    certificateList.push(Ecertificate, Rcertificate, Lcertificate, Fcertificate, Ccertificate, Mcertificate);
    jobList.push(Ejob, Rjob, Ljob, Fjob, Cjob, Mjob);

    if (submit) {
        const max = Math.max(...result);

        for (let i = 0; i < result.length; i++) {
            if (max === result[i]) maxResult.push(i);
        }

        maxResult.forEach(e => {
            if (e === 0) {
                category = '운동';
                categoryNum = e;
            } else if (e === 1) {
                category = '독서';
                categoryNum = e;
            } else if (e === 2) {
                category = '어학';
                categoryNum = e;
            } else if (e === 3) {
                category = '금융';
                categoryNum = e;
            } else if (e === 4) {
                category = '컴퓨터';
                categoryNum = e;
            } else if (e === 5) {
                category = '음악';
                categoryNum = e;
            }
        });                    

        if (maxResult.length === 7) {
            category = '만능'; 
        }

       

    }

    return (
        <main>
            {submit || <Abti type={type} queryList={queryList} num={number} page={next} handleSubmit={setSubmit} handlePoint={handlePoint} handleNext={handleNext}/>}
            {submit && <Result type={type} result={category} certificateList={certificateList[categoryNum]} jobList={jobList[categoryNum]}/>}
        </main>
    );
}