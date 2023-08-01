import Title from "../Title"

export default function Result({type = 'pc', result, certificateList, jobList}) {
    
    

    return (
        <div className={type + '-result'}>
            <Title type={type}/>
            <h2>{result + " 유형"}</h2>
            <p>{certificateList}</p>
            <p>{jobList}</p>
        </div>
    )
}