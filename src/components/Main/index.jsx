import Abti from "../Abti";
import { useState } from "react";
export default function Main({type = "pc"}) {
    const [next, setNext] = useState(0);
    const handleNext = () => {
        let nextPage = next + 1;
        setNext(nextPage);
    }

    return (
        <main>
            <Abti type={type} page={next} handleNext={handleNext}/>
        </main>
    );
}