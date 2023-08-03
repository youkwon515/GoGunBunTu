import Title from "../Title"
import { Link } from "react-router-dom"
export default function Result({type, Rresult, result, certificateList, jobList}) {
    
    return (
        <div className={type + '-box'}>
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
            <div className={type + "-router-box flex-center-center"}>
                <Link to="/"><button className={type + '-router-button'}>홈 &#62;</button></Link>
                <Link to="/todoList"><button className={type + '-router-button'}>투두리스트 &#62;</button></Link>
                <Link to="/testSite"><button className={type + '-router-button'}>시험장 검색 &#62;</button></Link>
            </div>
        </div>
    )
}