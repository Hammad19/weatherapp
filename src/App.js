import { useState,useEffect } from 'react';
import './App.css';
import Forecast from './components/Forecast';
import Inputs from './components/Inputs';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';
import dateFormat, { masks } from "dateformat";

function App() {

  const API_KEY = "962e6551a20e3ac680e631385d7e68d4";
  const city = 'karachi'
  

  const data = 
  {
    "coord": {
        "lon": 67.0822,
        "lat": 24.9056
    },
    "weather": [
        {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 306.05,
        "feels_like": 308.96,
        "temp_min": 306.05,
        "temp_max": 306.05,
        "pressure": 1008,
        "humidity": 49
    },
    "visibility": 6000,
    "wind": {
        "speed": 6.17,
        "deg": 250
    },
    "clouds": {
        "all": 40
    },
    "dt": 1664267301,
    "sys": {
        "type": 1,
        "id": 7576,
        "country": "PK",
        "sunrise": 1664241717,
        "sunset": 1664285014
    },
    "timezone": 18000,
    "id": 1174872,
    "name": "Karachi",
    "cod": 200
}
  
  const [coord, setcoord] = useState(data.coord);
  const [todaysweather, settodaysweather] = useState(data.main);
  const [windspeed,setWindspeed] = useState(data.wind.speed);
  const [citytitle,setCityTitle] = useState();
  const [sys,setSys] = useState(data.sys);
  const [datetime,setDateTime] = useState(data.dt)
  const [weather,setWeather] = useState(data.weather);
  


  // console.log(todaysweather);
  const updatenews = async () => {
   
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    let data = await fetch(url);
    let parsedData = await data.json(); 
    setcoord(parsedData.coord)
    settodaysweather(parsedData.main)
    setWindspeed(parsedData.wind.speed)
    setCityTitle(parsedData.name)
    setSys(parsedData.sys)
    setDateTime(parsedData.dt)
    setWeather(parsedData.weather)
    console.log(parsedData.weather[0].icon)

   
    
    // document.title = `${capitalizedFirsLetter(props.category)} - NewsMania`;
  };

  const formatdate = (selection,time) =>

  {

    let d = new Date(time *1000)

    if (selection === "sunrise" || selection === "sunset")
    {
        return dateFormat(d, "h:MM: TT")
    }
    else{
      return dateFormat(d, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    }
  }

  useEffect(() => {
    updatenews();
    
  }, []);

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
    <TopButtons/>
    <Inputs setcitytitle = {setCityTitle}/>
    <TimeAndLocation time ={formatdate("time",datetime)} countrytitle ={sys.country} citytitle = {citytitle} coord = {coord}/>
    <TemperatureAndDetails iconurl = {`http://www.openweathermap.org/img/wn/${weather[0].icon}@2x.png`} sunrise = {formatdate("sunrise",sys.sunrise)} sunset = {formatdate("sunset",sys.sunset)} windspeed = {windspeed} todaysweather = {todaysweather}/>
    <Forecast title = 'hourly forecast '/>
    <Forecast title = 'daily forecast '/>
    </div>


  );
}

export default App;
