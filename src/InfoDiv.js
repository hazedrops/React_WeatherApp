import { useContext, useState } from "react";
import WeatherAppContext from "./context/WeatherAppContext";

function InfoDiv() {
  const { weatherInfo, date, city } = useContext(WeatherAppContext);
  const [weatherDesc, setWeatherDesc] = useState("");
  const [weatherImgUrl, setWeatherImgUrl] = useState("");

  const handleWeatherInfo = () => {
    setWeatherDesc(weatherInfo.weather[0].main);

    const imgUrl = showWeatherImage(weatherDesc);
    setWeatherImgUrl(imgUrl);
  }

  const showWeatherImage = (weatherDesc) => {
    const category = categorize(weatherDesc);
    let url='';

    switch(category) {
      case 'partly':
        url = '../WeatherApp/img/partly.webp';
        break;
      case 'sun':
        url = '../WeatherApp/img/sun.webp';
        break;
      case 'rain':
        url = '../WeatherApp/img/rain.webp';
        break;
      case 'wind':
        url = '../WeatherApp/img/wind.webp';
        break;
      default:
        url = '../WeatherApp/img/cloud.webp';
        break;
    }

    return url;
  }

  const categorize = (str) => {
    const string = str.toLowerCase();

    if(string.includes('sun') && string.includes('partly')) {
      return 'partly';
    } else if (string.includes('sun') || string.includes('clear')) {
      return 'sun';
    } else if (string.includes('cloud')){
      return 'cloud';
    } else if (string.includes('rain')){
      return 'rain';  
    } else if (string.includes('wind')) {
      return 'wind';
    }
  }

  handleWeatherInfo();
  console.log("WeatherDesc:", weatherDesc);

  return (
    <>
      <div className="localInfoDiv">
        <div className="dateDiv">
          <span className="dateSpan">{date}</span>
        </div>
        <div className="cityDiv">{city}</div>
      </div> 
      <div className="weatherInfoDiv">
        <div className="weatherDisplay">
          <img src={weatherImgUrl} alt="" className="weatherImg" />
          <div className="temperatureDiv">{}</div>
        </div>
        <div className="weatherDetail"></div>
      </div> 
    </>
  )
}

export default InfoDiv
