import logo from '../../assets/logo.png';

export default function Header({type = "pc", borderWidth}) {
    document.documentElement.style.setProperty(
        '--borderWidth', 
        borderWidth + "%"
    );
    
    return (
        <header className={type + "-header"}>
            <div className="logoBox">
                <img src={logo} alt='logo'/>
            </div>
            <div className='borderWidth-box'>
                <div className='borderWidth'></div>
            </div>
        </header>

    )
}