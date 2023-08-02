import Title from "../Title"

export default function Result({type = 'pc', Rresult, result, certificateList, jobList}) {
    
    console.log(Rresult)

    return (
        <div className={type + '-result'}>
            <Title type={type}/>
            <div className={type + '-result-category-box'}>
                <h2>{result + " 유형"}</h2>
            </div>
            <div className={type + '-result-contents-box'}>
                <p className={type + '-result-certificateList-box'}>추천 자격증</p>
                <p>{certificateList}</p>
                <p className={type + '-result-jobList-box'}>유망 직업</p>
                <p>{jobList}</p>
            </div>
        </div>
    )
}