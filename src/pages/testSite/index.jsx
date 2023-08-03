import Header from "../../components/Header";
import Main from "../../components/Main";
import Map from "../../components/Map";
import { CheckSituation } from "../../utils/checkSituation";
import data from '../../data/testSiteData.json';
import { useState } from "react";
import icon from '../../assets/helmet.png';
import Title from "../../components/Title";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
function TestSitePage() {
    const [value, setValue] = useState('');
    const [testSite, setTestSite] = useState('');
    const [latitude, setLatitude] = useState(33.450701);
    const [longitude, setLongitude] = useState(126.570667);
    const [testSiteList, setLongitudeList] = useState([]);
    
    const Data = data.map;

    let is = CheckSituation();
    
    const handleChange = (e) => {
        let TextValue = e.target.value;
        setValue(TextValue);
    }

    const submit = () => {
        let resultData = Data.filter(e => e["자격증"].includes(value));
        let firstData = resultData[0];
        if (firstData) {
            setTestSite(firstData['시험장']);
            setLatitude(firstData["위도"]);
            setLongitude(firstData["경도"]);
            setLongitudeList(resultData);
        }
    }

    const handleSubmit = (e) => {
        try {
            let key = e.keyCode;
            if (key === 13) {
                submit();
            }
        } catch(e) {
            console.log(e)
        }
    }

    const handleButtonSubmit = () => {
        submit();
    }

    return (
        <>
            <Header type={is} borderWidth={100}/>
            <Main>
                <div className={is + "-box"}>
                    <Title type={is} title="시험장 검색" icon={icon} contents="자격증에 맞는 시험장을 찾으세요!"/>
                    <div className={is + "-input-create"}>
                        <input placeholder="자격증을 검색해 보세요." value={value} onChange={handleChange} onKeyDown={handleSubmit}/>
                        {is === "pc" ?<button onClick={handleButtonSubmit}>&#62;</button> : ""}
                    </div>
                    <Map is={is} latitude={latitude} longitude={longitude} testSite={testSite} testSiteList={testSiteList}/>
                    {is === "pc" ? <div className={is + "-router-box flex-center-center"}>
                        <Link to="/"><button className={is + "-router-button"}>홈 &#62;</button></Link>
                        <Link to="/abti"><button className={is + "-router-button"}>군비티아이 &#62;</button></Link>
                        <Link to="/todoList"><button className={is + "-router-button"}>투두리스트 &#62;</button></Link>
                    </div>
                    :
                    ""
                    }
                </div>
                {is !== "pc" ? <Footer /> : ""}
            </Main>
        </>
    )
}

export default TestSitePage;