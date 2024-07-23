import sun from '../images/sun.png';

export default function SubForecastBox(){
    return (
        <div className='sub-forecast-box'>
            <h5>Wednesday</h5>
            <img src={sun} alt='sun icon'/>
            <h5>20c</h5>
        </div>
    )
}