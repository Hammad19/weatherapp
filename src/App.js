import { useState, useEffect } from "react";
import "./App.css";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import dateFormat, { masks } from "dateformat";

function App() {
  const API_KEY = "b0f30c34c0710574e8807f14cc430335";
  const city = "karachi";

  const data = {
    coord: {
      lon: 67.0822,
      lat: 24.9056,
    },
    weather: [
      {
        id: 802,
        main: "Clouds",
        description: "scattered clouds",
        icon: "03d",
      },
    ],
    base: "stations",
    main: {
      temp: 306.05,
      feels_like: 308.96,
      temp_min: 306.05,
      temp_max: 306.05,
      pressure: 1008,
      humidity: 49,
    },
    visibility: 6000,
    wind: {
      speed: 6.17,
      deg: 250,
    },
    clouds: {
      all: 40,
    },
    dt: 1664267301,
    sys: {
      type: 1,
      id: 7576,
      country: "PK",
      sunrise: 1664241717,
      sunset: 1664285014,
    },
    timezone: 18000,
    id: 1174872,
    name: "Karachi",
    cod: 200,
  };

  const [coord, setcoord] = useState(data.coord);
  const [todaysweather, settodaysweather] = useState(data.main);
  const [windspeed, setWindspeed] = useState(data.wind.speed);
  const [citytitle, setCityTitle] = useState("berlin");
  const [sys, setSys] = useState(data.sys);
  const [datetime, setDateTime] = useState(data.dt);
  const [weather, setWeather] = useState(data.weather);
  const [loading, setloading] = useState(false);
  const [list, setlist] = useState(false);
  const [dailyweatherlist, setdailyweatherlist] = useState(false);


  const fetchhourlydata = async() =>
  {
    let url = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${coord.lat}&lon=${coord.lon}&cnt=${5}&appid=${API_KEY}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    setlist(parsedData.list)
    
    
    
  }

  const fetchdailydata = async() =>
  {
    let url = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${coord.lat}&lon=${coord.lon}&cnt=${35}&appid=${API_KEY}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    for (let i = 0; i < 36;i++) {
      setdailyweatherlist(parsedData.list)
      i=i+6;
    }

    console.log(dailyweatherlist);


    
    
  }
  // console.log(todaysweather);
  const updatenews = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${citytitle}&units=${"metric"}&appid=${API_KEY}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setcoord(parsedData.coord);
    settodaysweather(parsedData.main);
    setWindspeed(parsedData.wind.speed);
    setCityTitle(parsedData.name);
    setSys(parsedData.sys);
    setDateTime(parsedData.dt);
    setWeather(parsedData.weather);
    await fetchhourlydata();
    await fetchdailydata();
    setloading(true);

    // document.title = `${capitalizedFirsLetter(props.category)} - NewsMania`;
  };

  const formatdate = (selection, time) => {
    let d = new Date(time * 1000);

    if (selection === "sunrise" || selection === "sunset" || selection === "hourly") {
      return dateFormat(d, "h:MM: TT");
    } else {
      return dateFormat(d, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    }
  };

  useEffect(() => {
    updatenews();
  }, []);

  return (
    loading && (
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
        <TopButtons updatenews={updatenews} setCityTitle={setCityTitle} />
        <Inputs updatenews={updatenews} setCityTitle={setCityTitle} />
        <TimeAndLocation
          time={formatdate("time", datetime)}
          countrytitle={sys.country}
          citytitle={citytitle}
          coord={coord}
        />
        <TemperatureAndDetails
          description={weather[0].description}
          iconurl={`http://www.openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          sunrise={formatdate("sunrise", sys.sunrise)}
          sunset={formatdate("sunset", sys.sunset)}
          windspeed={windspeed}
          todaysweather={todaysweather}
        />
        <Forecast formatdate = {formatdate} list = {list} title="hourly forecast " />
        <Forecast formatdate = {formatdate} list = {list} title="daily forecast " />
      </div>
    )
  );
}

export default App;
