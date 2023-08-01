import icon from '../../assets/armor_icon.png';
import questionData from '../../data/QuestionList.json';

export default function Abti({type = "pc", number, page, handleNext}) {
    const queryList = [];
    const ExerciseQ = questionData.Exercise.query;
    const ReadingQ = questionData.Reading.query;
    const LinguisticsQ = questionData.Linguistics.query;
    const FinanceQ = questionData.Finance.query;
    const ComputerQ = questionData.Computer.query;
    const MusicQ = questionData.Music.query;

    queryList.push(ExerciseQ, ReadingQ, LinguisticsQ, FinanceQ,
        ComputerQ, MusicQ);


    return (
        <div className={type + '-abti'}>
            <div className={type + '-abti-title-box'}>
                <div className='flex'>
                    <h2 className={type + '-abti-title'}>군비티아이</h2>
                    <img src={icon} alt="icon" />
                </div>
                <p>군비티아이를 통해 적절한 자기계발을 추천 해드립니다.</p>
            </div>
            {queryList[page].map((query) => {
                number += 1;
                return (
                    <div className={type + '-abti-question-box'} key={number}>
                        <div className={type + '-abti-question'}>Q{number + 1}. {query}</div>
                        <div className={type + '-abti-checkbox'}>
                            <div>
                                <input type='radio' name={'abti' + number} id={'abti-yes' + number}/>
                                <label className='abti-yes-label' htmlFor={'abti-yes' + number}></label>
                                <label className='abti-yes-label' htmlFor={'abti-yes' + number}>동의</label>
                            </div>
                            <div>
                                <input type='radio' name={'abti' + number} id={'abti-no' + number}/>
                                <label className='abti-no-label' htmlFor={'abti-no' + number}></label>
                                <label className='abti-no-label' htmlFor={'abti-no' + number}>비동의</label>
                            </div>
                        </div>
                    </div>
                );
            })}
            
            
            <button className={type + '-abti-button'} onClick={handleNext}>다음&#62;</button>
        </div>
    )
}