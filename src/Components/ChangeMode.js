import { useContext } from 'react';
import WeatherAppContext from "../context/WeatherAppContext";

function ChangeMode() {
  const { weatherInfo, temp, mode, setTemp, setMode, celciTemp, celciTempInfo, setCelciTemp, setFahrenTemp, setCelciTempInfo} = useContext(WeatherAppContext);   

  const handleClick = () => {
    const returnTemp = 0;

    if(mode === "F") {
      setMode("C");

      setCelciTemp(processTempByMode(temp));

      setCelciTempInfo({
        ...celciTempInfo,
        feelsLike: processTempByMode(weatherInfo.main.feels_like),
        tempHigh: processTempByMode(weatherInfo.main.temp_max),
        tempLow: processTempByMode(weatherInfo.main.temp_min)
      });
    } else {
      setMode("F");      
      
      setFahrenTemp(temp);
    }
  }

  const processTempByMode = (tempStr) => {
    console.log("tempStr is ", tempStr);
    const intTemp = parseInt(tempStr);
    const longTemp = (intTemp - 32) * 5 / 9;
    const finalTemp = longTemp.toFixed();

    return finalTemp;
  }

  return (
    <div className="mode">
      <span className="modeSelector" onClick={handleClick}>{`°${mode}`}</span>
    </div>
  )
}

export default ChangeMode;
