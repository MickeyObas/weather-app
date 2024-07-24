export default function CityInput({onChange, onClick}){
    return (
        <div id='cityContainer'>
            <input 
            name='city'
            id='cityInput'
            placeholder='Enter a city...'
            onChange={onChange}
            />
            <button
            onClick={onClick}
            >Get Forecast</button>
        </div>
    )
}