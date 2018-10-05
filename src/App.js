import React, { Component } from 'react';
import Titles from './components/Titles';
import Forms from './components/Forms';
import Weather  from './components/Weather';


const Api_Key = "e51357f0da55452d8d3194947180410";

class App extends Component {

  state = {
    temperature1: undefined,
    city: undefined,
    region: undefined,
    country: undefined,
    humidity1: undefined,
    description1: undefined,
    icon1: undefined,
    maxTemp1: undefined,
    minTemp1: undefined,
    date1: undefined,
    error: undefined,


    temperature2: undefined,
    humidity2: undefined,
    description2: undefined,
    icon2: undefined,
    maxTemp2: undefined,
    minTemp2: undefined,
    date2: undefined,

    temperature3: undefined,
    humidity3: undefined,
    description3: undefined,
    icon3: undefined,
    maxTemp3: undefined,
    minTemp3: undefined,
    date3: undefined,

    temperature4: undefined,
    humidity4: undefined,
    description4: undefined,
    icon4: undefined,
    maxTemp4: undefined,
    minTemp4: undefined,
    date4: undefined,

    temperature5: undefined,
    humidity5: undefined,
    description5: undefined,
    icon5: undefined,
    maxTemp5: undefined,
    minTemp5: undefined,
    date5: undefined,



  }


  getWeather = async (e) => {

  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  e.preventDefault();


  const api_call = await fetch(` https://api.apixu.com/v1/forecast.json?key=${Api_Key}&q=${city}, ${country}&days=5`);
  
  const response = await api_call.json();
    
    if(city &&  country){
    this.setState({
      temperature1: response.forecast.forecastday[0].day.avgtemp_c,
      city: response.location.name,
      country: response.location.country,
      region: response.location.region,
      humidity1: response.forecast.forecastday[0].day.avghumidity,
      description1: response.forecast.forecastday[0].day.condition.text,
      maxTemp1: response.forecast.forecastday[0].day.maxtemp_c,
      minTemp1: response.forecast.forecastday[0].day.mintemp_c,
      date1: response.forecast.forecastday[0].date,
      icon1: response.forecast.forecastday[0].day.condition.icon,


      temperature2: response.forecast.forecastday[1].day.avgtemp_c,
      humidity2: response.forecast.forecastday[1].day.avghumidity,
      description2: response.forecast.forecastday[1].day.condition.text,
      maxTemp2: response.forecast.forecastday[1].day.maxtemp_c,
      minTemp2: response.forecast.forecastday[1].day.mintemp_c,
      date2: response.forecast.forecastday[1].date,
      icon2: response.forecast.forecastday[1].day.condition.icon,

      temperature3: response.forecast.forecastday[2].day.avgtemp_c,
      humidity3: response.forecast.forecastday[2].day.avghumidity,
      description3: response.forecast.forecastday[2].day.condition.text,
      maxTemp3: response.forecast.forecastday[2].day.maxtemp_c,
      minTemp3: response.forecast.forecastday[2].day.mintemp_c,
      date3: response.forecast.forecastday[2].date,
      icon3: response.forecast.forecastday[2].day.condition.icon,

      temperature4: response.forecast.forecastday[3].day.avgtemp_c,
      humidity4: response.forecast.forecastday[3].day.avghumidity,
      description4: response.forecast.forecastday[3].day.condition.text,
      maxTemp4: response.forecast.forecastday[3].day.maxtemp_c,
      minTemp4: response.forecast.forecastday[3].day.mintemp_c,
      date4: response.forecast.forecastday[3].date,
      icon4: response.forecast.forecastday[3].day.condition.icon,

      temperature5: response.forecast.forecastday[4].day.avgtemp_c,
      humidity5: response.forecast.forecastday[4].day.avghumidity,
      description5: response.forecast.forecastday[4].day.condition.text,
      maxTemp5: response.forecast.forecastday[4].day.maxtemp_c,
      minTemp5: response.forecast.forecastday[4].day.mintemp_c,
      date5: response.forecast.forecastday[4].date,
      icon5: response.forecast.forecastday[4].day.condition.icon,
      error: ""
    })
  }
  else {
    this.setState({
      error: "Please enter the values..."
    })
  }
  console.log(response);
}




   render(){
    return(

        <div align="center">
        <div class="container">
          <div class="row">
             <div class="col">
              <Titles align />
               </div>
              </div>

          <div class="row">
            <div class="col">
                <Forms loadWeather={this.getWeather} />
                <Weather
                  temperature1={this.state.temperature1}
                  city={this.state.city}
                  region={this.state.region}
                  country={this.state.country}
                  humidity1={this.state.humidity1}
                  description1={this.state.description1}
                  maxTemp1={this.state.maxTemp1}
                  minTemp1={this.state.minTemp1}
                  date1={this.state.date1}
                  icon1={this.state.icon1}


                  temperature2={this.state.temperature2}
                  humidity2={this.state.humidity2}
                  description2={this.state.description2}
                  maxTemp2={this.state.maxTemp2}
                  minTemp2={this.state.minTemp2}
                  date2={this.state.date2}
                  icon2={this.state.icon2}

                  temperature3={this.state.temperature3}
                  humidity3={this.state.humidity3}
                  description3={this.state.description3}
                  maxTemp3={this.state.maxTemp3}
                  minTemp3={this.state.minTemp3}
                  date3={this.state.date3}
                  icon3={this.state.icon3}


                  temperature4={this.state.temperature4}
                  humidity4={this.state.humidity4}
                  description4={this.state.description4}
                  maxTemp4={this.state.maxTemp4}
                  minTemp4={this.state.minTemp4}
                  date4={this.state.date4}
                  icon4={this.state.icon4}

                  temperature5={this.state.temperature5}
                  humidity5={this.state.humidity5}
                  description5={this.state.description5}
                  maxTemp5={this.state.maxTemp5}
                  minTemp5={this.state.minTemp5}
                  date5={this.state.date5}
                  icon5={this.state.icon5}
                  error={this.state.error}/>
                  </div>
                </div>
            </div>
        </div>
   )
  }
}
export default App;