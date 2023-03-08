import { useState } from 'react';
import Screen from './Components/Screen';
import PlaceForm from './Components/PlaceForm';
import './App.css';

const api = {
  key :  "00c9827b7711403ebf0152309230603",
  base : "https://api.weatherapi.com/v1/"
}


function App() {
  
  
  let classString = "";
  const [weather,setWeather]=useState('');
  const[display,setDisplay] = useState(false)
  const[title,setTitle] = useState("Weather!")
  const[day,setDay] = useState()
  let hour_str;
  let hour;
  async function finalPlaceHandler(name)
  {
    const response =  await fetch(`${api.base}current.json?key=${api.key}&q=${name}&aqi=no`)
    const data = await response.json()
    setWeather(data)
    setDisplay(true)
    setTitle(data.current.condition.text)
   hour_str = data.location.localtime.slice(11,13)
    console.log(hour_str)
    if(hour_str[1]===':')
    hour_str = hour_str.slice(0)
    hour = parseInt(hour_str);
    console.log(hour)
    if (hour >= 4 && hour <= 11) setDay("morning");
    if (hour >= 12 && hour <= 16) setDay('afternoon')
    if (hour >= 17 && hour <= 20) setDay('evening');
    if (hour >= 21 || hour <= 3) setDay("night");
    console.log(classString)
  }
  return (
    <div className="App">
      <div className={`card ${day}`}>
      <h2>{title}</h2>
    
      <PlaceForm onFindPlace = {finalPlaceHandler}/>   
      {display? <Screen item = {weather}  day={day}/> : <p></p>} 
      </div>
    </div>
  );
}

export default App;
