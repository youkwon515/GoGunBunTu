import Header from "../Header";
import Main from "../Main";

export default function Mobile() {
    let type = 'mobile';
    return (
        <>
            <Header type={type}/>
            <Main type={type}/>
        </>
    )
}