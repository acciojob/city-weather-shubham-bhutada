import React, {useState} from 'react'
import axios from 'axios';
let API_KEY = "2d98c7f654c903e6ffa4a4564be90447";
const FetchWeather = () => {
    const [city, setCity] = useState("")
    const [data, setData] = useState('');

  function getWeather(e) {
    e.preventDefault();
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(response => {
      console.log(response.data)
      setData(response.data)
      setCity('');
    })
    .catch(err => console.log(err))
  }  
  // axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
  //   .then(response => console.log(response.data))
  //   .catch(err => console.log(err))

  return (
    <div className='showWeather'>
        <form onSubmit={getWeather}>
            <input className='search' type='text' placeholder='Enter a city' value={city} onChange={e=>setCity(e.target.value)}/>
        </form>
        {
          data && (
            <div className='weather'>
              <h1>{data.name}</h1>
              <h1>{data.main.temp}°F</h1>
              <p>{data.weather[0].description}</p>
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="Weather Icon"
              />
            </div>
          )
        }
    </div>
  )
}

export default FetchWeather