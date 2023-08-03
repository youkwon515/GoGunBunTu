import * as S from './styled';
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <S.Footer>
            <Link to="/"><S.iconBtn><span class="material-symbols-outlined"> home </span></S.iconBtn></Link>
            <Link to="/abti"><S.iconBtn><span class="material-symbols-outlined"> saved_search </span></S.iconBtn></Link>
            <Link to="/todoList"><S.iconBtn><span class="material-symbols-outlined"> event_list </span></S.iconBtn></Link>
            <Link to="/testSite"><S.iconBtn><span class="material-symbols-outlined"> travel_explore </span></S.iconBtn></Link>
        </S.Footer>
    )
}