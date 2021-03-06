import { useContext } from 'react';
import WeatherAppContext from "../context/WeatherAppContext";
import InfoDiv from './InfoDiv';

function Main() {
  const { weatherInfo } = useContext(WeatherAppContext);

  console.log("In the main: ", weatherInfo);

  return (
    <main>
      <div className="main-container">
        {!weatherInfo
          ? (
          <div className="front-message">
            <p>Enter a City Name<br /> or a Zip Code<br /> in the search bar</p>
          </div>
           ) :
          <InfoDiv />
        }
      </div>
    </main>
  ) 
}

export default Main
