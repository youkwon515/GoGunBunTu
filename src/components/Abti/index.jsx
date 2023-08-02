import Title from "../Title";

export default function Abti({type = "pc", queryList, num, page, handleSubmit, handlePoint, handleNext}) {
    let result = {
        "yes1" : null,
        "yes2" : null,
        "yes3" : null
    };
    let point = 0;

    const handleSelect = (e) => {
        let htmlFor = e.target.htmlFor;
        if (htmlFor.includes('yes')) {
            let yesSelete = htmlFor.split('abti-')[1];
            result[yesSelete] = true;
        } else {
            let noSelete = htmlFor.split('abti-no')[1];
            result["yes" + noSelete] = false;
        }
    };

    const pointChecker = () => {
        if (result["yes1"] === true) {
            point += 1;
        }

        if(result["yes2"] === true) {
            point += 1;
        }

        if(result["yes3"] === true) {
            point += 1;
        }

        handlePoint(point);
    }

    const handleChecker1 = () => {
        if (result["yes1"] !== null && result["yes2"] !== null && result["yes3"] !== null) {
            pointChecker();
            handleNext();
        } else {
            alert('항목을 체크해주세요');
        }
    }

    const handleChecker2 = () => {
        if (result["yes1"] !== null && result["yes2"] !== null && result["yes3"] !== null) {
            pointChecker();
            handleSubmit(true);
        } else {
            alert('항목을 체크해주세요');
        }
    }

    let number = num;

    return (
        <div className={type + '-abti'}>
            <Title type={type} />
            {queryList[page].map((query, idx) => {
                number += 1;
                idx += 1;
                return (
                    <div className={type + '-abti-question-box'} key={number}>
                        <div className={type + '-abti-question'}>Q{number}. {query}</div>
                        <div className={type + '-abti-checkbox'}>
                            <div>
                                <input type='radio' name={'abti' + idx} id={'abti-yes' + idx}/>
                                <label className='abti-yes-label' onClick={handleSelect} htmlFor={'abti-yes' + idx}></label>
                                <label className='abti-yes-label' onClick={handleSelect} htmlFor={'abti-yes' + idx}>동의</label>
                            </div>
                            <div>
                                <input type='radio' name={'abti' + idx} id={'abti-no' + idx}/>
                                <label className='abti-no-label' onClick={handleSelect} htmlFor={'abti-no' + idx}></label>
                                <label className='abti-no-label' onClick={handleSelect} htmlFor={'abti-no' + idx}>비동의</label>
                            </div>
                        </div>
                    </div>
                );
            })}

            {page === 6 ? <button className={type + '-abti-button'} onClick={handleChecker2}>결과&#62;</button> : <button className={type + '-abti-button'} onClick={handleChecker1}>다음&#62;</button>}
        </div>
    )
}