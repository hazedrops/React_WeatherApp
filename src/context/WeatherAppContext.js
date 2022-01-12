import {  createContext, useState, useEffect } from 'react';

const WeatherAppContext = createContext();

export const WeatherAppProvider = ({ children }) => {
  const [isTyped, setIsTyped] = useState(false);
  const [inputValue, setInputValue] = useState("");  
  const [weatherInfo, setWeatherInfo] = useState("");  
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    setIsTyped(true);

    setInputValue(e.target.value);
  }

  const handleClear = () => {
    // console.log("Clear button clicked!!");
    setInputValue("");
    setIsTyped(false);
  }

  const handleSearch = (e) => {
    e.preventDefault();

    console.log("Search button clicked!!");

    fetchWeatherInfo(inputValue);

    // getDate();

    setInputValue("");
  }  

  const fetchWeatherInfo = async (query) => {
    if (query === "") {
      return;
    }

    const response = await retrieveLatLong(query); 
    console.log("Response after LatLong Here: ", response);
    setWeatherInfo(response);
  }

  const retrieveLatLong = async (searchTerm) => {
    const geoCodeData = getGeoCodeData(searchTerm);
    const geoCodes = await requestData(geoCodeData);

    if(!geoCodes.results.length) {
      console.log("No result found!!!");
    }

    const tempData = geoCodes.results[0].locations[0];

    let resultArray = [];

    const lat = tempData.latLng.lat;
    const long = tempData.latLng.lng;

    const weatherSearchString = retrieveWeatherInfo(lat, long);
    const weatherInfo = await requestWeatherData(weatherSearchString);

    return weatherInfo;
  };

  // Encodes URI
  const getGeoCodeData = (searchTerm) => {
    const rawSearchString = `http://www.mapquestapi.com/geocoding/v1/address?key=Pzhrs2ylWGmTmpobTAkxGdGaVrdCIfhU&location=${searchTerm}`;

    const searchString = encodeURI(rawSearchString);
    
    return searchString;
  }

  const requestData = async (searchString) => {
    try {
      const response = await fetch(searchString);
      const data = await response.json();

      console.log("data: ", data);

      return data;
    } catch (err) {
      console.error(err);
    }
  }

  const requestWeatherData = async (searchString) => {
    try {
      const response = await fetch(searchString);
      const data = await response.json();

      return data;
    } catch (err) {
      console.error(err);
    }
  }

  const retrieveWeatherInfo = (lat, long) => {
    const rawSearchString = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=90bd2e2238cfe623292dac7d2a084e2a`;

    const searchString = encodeURI(rawSearchString);
    
    return searchString;
  }

  const getDate = () => {
    const dt = weatherInfo.dt;
    console.log("dt in getDate:", dt);
    const tempDate = new Date(+dt * 1000);
    const date = tempDate.toDateString();
    
    setDate(date)
    console.log(date);
  }

  const getCity = () => {
    const city = weatherInfo.name;
    
    setCity(city)
    // console.log(date);
  }

  useEffect(() => {
    getDate();
    getCity();
  }, [weatherInfo]);

  return (
    <WeatherAppContext.Provider 
        value={{
          isTyped,
          inputValue,
          weatherInfo,
          date,
          city,
          setWeatherInfo,
          handleChange,
          handleClear,
          handleSearch,
          fetchWeatherInfo,
          getDate,
          getCity,
          retrieveLatLong,
          getGeoCodeData,
          requestData,
          requestWeatherData,
          retrieveWeatherInfo
        }}
    >
      { children }
    </WeatherAppContext.Provider>
  )
}

export default WeatherAppContext;
