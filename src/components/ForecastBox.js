import sun from '../images/sun.png';
import SubForecastBox from './SubForecastBox';

export default function ForecastBox(){
    return (
        <div id='forecastDiv'>
            <div id='mainForecastBox'>
                <div id='forecastIcon'>
                    <img src={sun} alt='sun icon'/>
                </div>
                <div id='forecastDetails'>
                    <p id='day'>Today</p>
                    <h1 id='location'>Mars</h1>
                    <p id='temperature'>Temperature: 17c</p>
                    <p id='mini-description'>Clear sky</p>
                </div>
            </div>
            <div id='subForecastDiv'>
                <SubForecastBox />
                <SubForecastBox />
                <SubForecastBox />
                <SubForecastBox />
            </div>
      </div>
    )
}