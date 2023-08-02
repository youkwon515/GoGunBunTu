import Abti from "../Abti";
import Result from "../Result";
import data from '../../data/QuestionList.json';

export default function Main({type, setBorderWidth, categoryNumber, handlePoint, handleNext, number, next, submit, setSubmit, resultCategory, handleResultSet, result}) {
    
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

    if (submit) {
        setBorderWidth();
        const max = Math.max(...result);
        console.log(result)
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
        }
        
        categoryNum = recommend;
        

        if (count1 === 7) {
            category = '만능';
        } else if (count2 === 7) {
            category = '재능이 없다..';
        }

        handleResultSet(category, categoryNum);
    }

    return (
        <main>
            {submit || <Abti type={type} queryList={queryList} num={number} page={next} handleSubmit={setSubmit} handlePoint={handlePoint} handleNext={handleNext}/>}
            {submit && <Result type={type} Rresult={result} result={resultCategory} certificateList={certificateList[categoryNumber]} jobList={jobList[categoryNumber]}/>}
        </main>
    );
}