import { useMediaQuery } from "react-responsive"

export function CheckSituation() {
    const isPc = useMediaQuery({
        query : "(min-width:767px)"
    });

    const isMobile = useMediaQuery({
        query : "(max-width:767px)"
    });

    let is = isPc ? "pc" : "mobile";

    return is;
}