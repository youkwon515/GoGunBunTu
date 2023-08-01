import Header from "../Header";
import Main from "../Main";

export default function Desktop() {
    let type = 'pc';
    return (
        <>
            <Header type={type}/>
            <Main type={type}/>
        </>
    )
}