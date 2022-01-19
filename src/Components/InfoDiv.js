import { useContext, useState, useEffect } from "react";
import WeatherAppContext from "../context/WeatherAppContext";

function InfoDiv() {
  const { weatherInfo, date, city, temp, setTemp, mode, celciTemp, celciTempInfo} = useContext(WeatherAppContext);

  const [weatherDesc, setWeatherDesc] = useState("");
  const [weatherImg, setWeatherImg] = useState("");

  const handleWeatherInfo = () => {
    setWeatherDesc(weatherInfo.weather[0].main);
    setTemp(weatherInfo.main.temp.toFixed());

    const imgString = showWeatherImage(weatherDesc);

    setWeatherImg(imgString);
    console.log(weatherImg);
  }

  const showWeatherImage = (weatherDesc) => {
    const category = categorize(weatherDesc);
    let weatherImg;

    switch(category) {
      case 'partly':
        weatherImg = 'partly';
        break;
      case 'sun':
        weatherImg = 'sun';
        break;
      case 'rain':
        weatherImg = 'rain';
        break;
      case 'wind':
        weatherImg = 'wind';
        break;
      default:
        weatherImg = 'cloud';
        break;
    }

    return weatherImg;
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

  useEffect(() => {
    handleWeatherInfo();
  }, [city]);

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
          <img src={`./img/${weatherImg}.webp`} alt={weatherDesc} className="weatherImg" />
          <div className="temperatureDiv">{mode === 'F' ? `${temp}°` : `${celciTemp}°` }</div>
        </div>
        <div className="weatherDetail">
          <div className="feelsLike">
            {mode === 'F' ?
              `Feels Like: ${(+weatherInfo.main.feels_like).toFixed()}°`:
              `Feels Like: ${(+celciTempInfo.feelsLike).toFixed()}°`
            }
          </div>
          <div className="tempHighLow">            
            <span className="tempTextSpan">Temp High / Low:</span>            
            {mode === 'F' ?
              <span className="tempDegreeSpan">{(+weatherInfo.main.temp_max).toFixed()}° / {(+weatherInfo.main.temp_min).toFixed()}°</span> :
              <span className="tempDegreeSpan">{(+celciTempInfo.tempHigh).toFixed()}° / {(+celciTempInfo.tempLow).toFixed()}°</span>
            }
          </div>
            
          <div className="wind">Wind: {weatherInfo.wind.speed} mp/h</div>
          
          <div className="humidity">Humidity: {weatherInfo.main.humidity}</div>
        </div>
      </div> 
    </>
  )
}

export default InfoDiv
