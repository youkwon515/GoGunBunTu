import Title from "../Title"

export default function Result({type = 'pc', Rresult, result, certificateList, jobList}) {

    return (
        <div className={type + '-result'}>
            <Title type={type}/>
            <div className={type + '-result-category-box'}>
                <h2>{result + " 유형"}</h2>
            </div>
            <div className={type + '-result-contents-box'}>
                <p className={type + '-result-main-text'}>추천 자격증</p>
                <span>{certificateList.join(', ')}</span>
                <p className={type + '-result-main-text'}>유망 직업</p>
                <span>{jobList.join(', ')}</span>
            </div>
            <button className={type + '-router-button'}>투두리스트로 &#62;</button> 
        </div>
    )
}