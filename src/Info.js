import './Info.css';

function Info({ item}) {
    return(
    <div className='box'>
        <div className='image'>{item.image}</div>
        <h3 className='title'>{item.name}</h3>
        <p className='infomation'>{item.desc}</p>
    </div>   
    )
}
export default Info;