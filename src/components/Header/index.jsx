import logo from '../../assets/logo.png';

export default function Header({type = "pc"}) {
    return (
        <header className={type + "-header"}>
            <img src={logo} alt='logo'/>
        </header>

    )
}