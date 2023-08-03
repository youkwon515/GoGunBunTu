import { Link } from "react-router-dom";
import { CheckSituation } from "../../utils/checkSituation";
import * as S from './styled';
import bg from '../../assets/mainBanner.png'
import Header from "../../components/Header";
import Main from "../../components/Main";
function MainPage() {
    
    let is = CheckSituation();

    return (
        <Main>
        {
            is === "pc" ? (
                <>
                    <Header type={is} borderWidth={0}/>
                    <S.Background src={bg} alt="background" />
                    <S.Text>
                        <h1>군인들의 자기계발을 위한<br/>TODO LIST</h1>
                        <p>For more effective self-development!</p>
                    </S.Text>
                    <div className={is + "-router-box main-btn-box"}>
                        <Link to="/abti"><button className={is + "-router-button"}>군비티아이 &#62;</button></Link>
                        <Link to="/todoList"><button className={is + "-router-button"}>투두리스트 &#62;</button></Link>
                        <Link to="/testSite"><button className={is + "-router-button"}>시험장 검색 &#62;</button></Link>
                    </div>
                </>
            ) : (
                <h2>모바일</h2>
            )
        }
        </Main>
    )
}

export default MainPage;