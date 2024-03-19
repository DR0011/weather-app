import React, { useState } from 'react'
import axios from 'axios'
const Weather = () => {
    const [city,setCity] = useState("");
    const handleCityName = (event)=>{
        setCity(event.target.value)
    }
    const [weather,setWeather] = useState({temp:'',cloud:'',wind:'',pressure:''});
    const handleWeather = async()=>{
      const data = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=6557810176c36fac5f0db536711a6c52`)
       setWeather({
          "temp":(data.data.list[0].main['temp'] - 273.15).toFixed(0,2),
          "cloud":data.data.list[0].weather[0].main,
          "wind": data.data.list[0].wind.speed,
          "pressure": data.data.list[0].main['pressure']
       })
    }
  return (
    <section className="vh-100" style={{backgroundImage : 'url(/BG.png)', backgroundRepeat:'round'}}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-4">
          <div className='row'>
            <div className='col-9'>
            <input type='text' value={city} onChange={handleCityName} className='form-controls' placeholder='Enter City Name'/>
            </div>
            <div className='col-3'>
            <button className='btn' onClick={handleWeather} style={{border:'1px solid #485f764f'}}>submit</button>
            </div>
          </div>
            <div className="cards mt-3" style={{color: "#4B515D", borderradius: "35px"}}>
              <div className="card-body p-4">

                <div className="d-flex">
                  <h6 className="flex-grow-1">{city}</h6>
                  <h6>{new Date().toLocaleTimeString() + ""}</h6>
                </div>

                <div className="d-flex flex-column text-center mt-5 mb-4">
                  <h6 className="display-4 mb-0 font-weight-bold" style={{color: "#1C2331"}}> {weather.temp} °C </h6>
                  <span className="small" style={{color: "#868B94"}}>{weather.cloud}</span>
                </div>

                <div className="d-flex align-items-center">
                  <div className="flex-grow-1" style={{fontsize: "1rem"}}>
                    <div><i className="fas fa-wind fa-fw" style={{color: "#868B94"}}></i> <span className="ms-1"> {weather.wind} km/h
                      </span></div>
                    <div><i className="fas fa-tint fa-fw" style={{color: "#868B94"}}></i> <span className="ms-1"> {weather.pressure} pa </span>
                    </div>
                    <div><i className="fas fa-sun fa-fw" style={{color: "#868B94"}}></i> <span className="ms-1"> 0.2h </span>
                    </div>
                  </div>
                  <div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp" width="100px" alt='weather'/>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
</section>
  )
}

export default Weather