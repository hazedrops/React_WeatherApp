import { useContext, useEffect, useState } from 'react';
import WeatherAppContext from "./context/WeatherAppContext";

function ChangeMode() {
  const { temp, mode, setTemp, setMode } = useContext(WeatherAppContext);
  const [celciTemp, setCelciTemp] = useState(0);
  const [farenTemp, setFarenTemp] = useState(0);

  const handleClick = () => {
    if(mode === "F") {
      setMode("C");
      processTempByMode(temp);
      setTemp(celciTemp);   
    } else {
      setMode("F");       
      setTemp(farenTemp);
    }
  }

  const processTempByMode = (tempStr) => {
    const intTemp = parseInt(tempStr);
    const longTemp = (intTemp - 32) * 5 / 9;
    const finalTemp = longTemp.toFixed();

    console.log("finalTemp: ", finalTemp);

    setCelciTemp(finalTemp);
    // if(mode === "C") {
    //   const intTemp = parseInt(tempStr);
    //   const longTemp = (intTemp - 32) * 5 / 9;
    //   const finalTemp = longTemp.toFixed();

    //   setCelciTemp(finalTemp);
    // }    
    // setFarenTemp(tempStr);  
  }

  // const setTempByMode = () => {
  //   if( mode === "C") {
  //     setTemp(celciTemp);    
  //     console.log(celciTemp);
  //   } else {
  //     setTemp(farenTemp);
  //     console.log(celciTemp);
  //   }
  // }

  useEffect(() => {
    // processTempByMode(temp);
    console.log("Temperatures are : ", celciTemp, farenTemp);
    // setTempByMode();  
  }, [mode]);

  return (
    <div className="mode">
      <span className="modeSelector" onClick={handleClick}>{`°${mode}`}</span>
    </div>
  )
}

export default ChangeMode
