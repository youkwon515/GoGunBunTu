export default function Title({type = 'pc', title, icon, contents}) {
    return (
        <div className={type + '-title-box'}>
            <div className='flex'>
                <h2 className={type + '-title'}>{title}</h2>
                {icon && <img src={icon} alt="icon" />}
            </div>
            <p>{contents}</p>
        </div>
    )
}