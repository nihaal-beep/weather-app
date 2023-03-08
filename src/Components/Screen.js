import "./screen.css"

function Screen(props)
{
    let ltime = props.item.location.localtime.slice(11);

    return(
        
        <div>
            <p className="loc">{props.item.location.name}</p>
            <p className="loc date">{ltime}, {props.day}</p>
            <div className="card-lower">
            <p className="temp">{props.item.current.temp_c}°C</p>
            <p className="temp">{props.item.current.temp_f}°F</p>
            <p>{ltime}</p>
            <p>humidity = {props.item.current.humidity}</p>
            </div>
        </div>
    )
}

export default Screen;