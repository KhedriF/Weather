import React,{useState} from 'react';
import Weather from "./component/Weather";
import Form from "./component/Form";

function App() {
    const[country , setCountry]=useState('');
    const[city , setCity]=useState('');
    const[temp, setTemp]=useState('');
    const[img,setImg]=useState('');
    const[condition, setCondition]=useState('');
    const[time,setTime]=useState('');
    const[currenTime,setCurrenTime]=useState('');
    const[isDay,setIsDay]=useState(1);
    const[error,setError]=useState('');
    const[hasInfo,setHasInfo]=useState(false);
    const[isLoading , setIsLoading]=useState(false);

    const getWeather = async (city) => {
        try{
            setIsLoading(true);
            setHasInfo(false);
            const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=456c83525a21425ba5294854201612&q=${city}`);

            const data= await res.json();

            if(data.error){
                throw new Error('please try again');
            }
            console.log(data);
            setCountry(data.location.country);
            setCity(data.location.name);
            setTemp(data.current.temp_c);
            setImg(data.current.condition.icon);
            setCondition(data.current.condition.text);
            setTime(data.location.localtime);
            setCurrenTime(data.current.last_updated);
            setIsDay(data.current.is_day);
            setHasInfo(true);
            setIsLoading(false);
        }
        catch (e) {
            setIsLoading(false);
           setError(e.message);
           setTimeout(function () {
               setError('')

           }, 5000)
        }

    }



  return (
      <div className="app">
          <h1 className="skyblue"> Weather App</h1>
          <Form getWeather={getWeather} />
          {isLoading && <div className="loader"></div>}
          {error && <p className="error" >{error}</p>}

          {/*{hasInfo &&()}*/}

          {hasInfo &&(<Weather
              country={country}
              city={city}
              temp={temp}
              img={img}
              condition={condition}
              time={time}
              currenTime={currenTime}
              isDay={isDay}
              isLoading={isLoading}
          />)}

      </div>

  );
}

export default App;
