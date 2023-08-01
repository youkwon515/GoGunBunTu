import icon from '../../assets/armor_icon.png';

export default function Title({type = 'pc'}) {
    return (
        <div className={type + '-title-box'}>
            <div className='flex'>
                <h2 className={type + '-title'}>군비티아이</h2>
                <img src={icon} alt="icon" />
            </div>
            <p>군비티아이를 통해 적절한 자기계발을 추천 해드립니다.</p>
        </div>
    )
}