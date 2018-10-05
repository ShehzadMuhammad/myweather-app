import React, {Component} from 'react';
class Weather extends Component{
    render(){
        return(
            <div className="weather-info">

            <div class="container">
              <div class="row">
                <div class="col-sm">
                {
             
                    this.props.icon1 && <p className="weatherInfo">
                        <span className="weatherValue"> <img src= {this.props.icon1} alt="icon" /> </span>
                        </p>

                }

                {
                    this.props.description1 && <p className="weatherInfo">Conditions:  
                        <span className="weatherValue">  {this.props.description1}</span>
                    </p>
                }

                {
                    this.props.date1 && <p className="weatherInfo">Date:  
                        <span className="weatherValue">  {this.props.date1}</span>
                    </p>
                }

                {
                    this.props.country && this.props.city && this.props.region && <p className="weatherInfo">Location: 
                        <span className="weatherValue">  {this.props.city}, {this.props.region}, {this.props.country}</span>                    
                    </p> 
                }
                
                {
                    this.props.temperature1 && <p className="weatherInfo">Temperature: 
                        <span className="weatherValue">  {this.props.temperature1} °C</span>
                    </p>
                }

                {
                    this.props.humidity1 && <p className="weatherInfo">Humidity: 
                        <span className="weatherValue">  {this.props.humidity1}</span>
                    </p>
                }

                {
                    this.props.minTemp1 && <p className="weatherInfo">Min Temperature:  
                        <span className="weatherValue">  {this.props.minTemp1} °C</span>
                    </p>
                }

                {
                    this.props.maxTemp1 && <p className="weatherInfo">Max Temperature:  
                        <span className="weatherValue">  {this.props.maxTemp1} °C</span>
                    </p>
                }

                {
                    this.props.error && <p className="weatherError">{this.props.error}</p>
                }
                </div>

                <div class="col-sm">
               {
             
                    this.props.icon2 && <p className="weatherInfo">
                        <span className="weatherValue"> <img src= {this.props.icon2} alt="icon" /> </span>
                        </p>

                }

                {
                    this.props.description2 && <p className="weatherInfo">Conditions:  
                        <span className="weatherValue">  {this.props.description2}</span>
                    </p>
                }

                {
                    this.props.date2 && <p className="weatherInfo">Date:  
                        <span className="weatherValue">  {this.props.date2}</span>
                    </p>
                }

                                {
                    this.props.country && this.props.city && this.props.region && <p className="weatherInfo">Location: 
                        <span className="weatherValue">  {this.props.city}, {this.props.region}, {this.props.country}</span>                    
                    </p> 
                }
                
                {
                    this.props.temperature2 && <p className="weatherInfo">Temperature: 
                        <span className="weatherValue">  {this.props.temperature2} °C</span>
                    </p>
                }

                {
                    this.props.humidity2 && <p className="weatherInfo">Humidity: 
                        <span className="weatherValue">  {this.props.humidity2}</span>
                    </p>
                }

                {
                    this.props.minTemp2 && <p className="weatherInfo">Min Temperature:  
                        <span className="weatherValue">  {this.props.minTemp2} °C</span>
                    </p>
                }

                {
                    this.props.maxTemp2 && <p className="weatherInfo">Max Temperature:  
                        <span className="weatherValue">  {this.props.maxTemp2} °C</span>
                    </p>
                }

                {
                    this.props.error && <p className="weatherError">{this.props.error}</p>
                }
                </div>
                <div class="col-sm">
                 {
             
                    this.props.icon3 && <p className="weatherInfo">
                        <span className="weatherValue"> <img src= {this.props.icon3} alt="icon" /> </span>
                        </p>

                }

                {
                    this.props.description3 && <p className="weatherInfo">Conditions:  
                        <span className="weatherValue">  {this.props.description3}</span>
                    </p>
                }

                {
                    this.props.date3 && <p className="weatherInfo">Date:  
                        <span className="weatherValue">  {this.props.date3}</span>
                    </p>
                }

                {
                    this.props.country && this.props.city && this.props.region && <p className="weatherInfo">Location: 
                        <span className="weatherValue">  {this.props.city}, {this.props.region}, {this.props.country}</span>                    
                    </p> 
                }
                
                {
                    this.props.temperature3 && <p className="weatherInfo">Temperature: 
                        <span className="weatherValue">  {this.props.temperature3} °C</span>
                    </p>
                }

                {
                    this.props.humidity3 && <p className="weatherInfo">Humidity: 
                        <span className="weatherValue">  {this.props.humidity3}</span>
                    </p>
                }

                {
                    this.props.minTemp3 && <p className="weatherInfo">Min Temperature:  
                        <span className="weatherValue">  {this.props.minTemp3} °C</span>
                    </p>
                }

                {
                    this.props.maxTemp3 && <p className="weatherInfo">Max Temperature:  
                        <span className="weatherValue">  {this.props.maxTemp3} °C</span>
                    </p>
                }

                {
                    this.props.error && <p className="weatherError">{this.props.error}</p>
                }
                </div>

                </div>
            </div>

            <div class="row">
               <div class="col-sm">
                 {
             
                    this.props.icon4 && <p className="weatherInfo">
                        <span className="weatherValue"> <img src= {this.props.icon4} alt="icon" /> </span>
                        </p>

                }

                {
                    this.props.description4 && <p className="weatherInfo">Conditions:  
                        <span className="weatherValue">  {this.props.description4}</span>
                    </p>
                }

                {
                    this.props.date4 && <p className="weatherInfo">Date:  
                        <span className="weatherValue">  {this.props.date4}</span>
                    </p>
                }

                {
                    this.props.country && this.props.city && this.props.region && <p className="weatherInfo">Location: 
                        <span className="weatherValue">  {this.props.city}, {this.props.region}, {this.props.country}</span>                    
                    </p> 
                }
                
                {
                    this.props.temperature4 && <p className="weatherInfo">Temperature: 
                        <span className="weatherValue">  {this.props.temperature4} °C</span>
                    </p>
                }

                {
                    this.props.humidity4 && <p className="weatherInfo">Humidity: 
                        <span className="weatherValue">  {this.props.humidity4}</span>
                    </p>
                }

                {
                    this.props.minTemp4 && <p className="weatherInfo">Min Temperature:  
                        <span className="weatherValue">  {this.props.minTemp4} °C</span>
                    </p>
                }

                {
                    this.props.maxTemp4 && <p className="weatherInfo">Max Temperature:  
                        <span className="weatherValue">  {this.props.maxTemp4} °C</span>
                    </p>
                }

                {
                    this.props.error && <p className="weatherError">{this.props.error}</p>
                }
                </div>
                
                <div class="col-sm">
                 {
             
                    this.props.icon5 && <p className="weatherInfo">
                        <span className="weatherValue"> <img src= {this.props.icon5} alt="icon" /> </span>
                        </p>

                }

                {
                    this.props.description5 && <p className="weatherInfo">Conditions:  
                        <span className="weatherValue">  {this.props.description5}</span>
                    </p>
                }

                {
                    this.props.date5 && <p className="weatherInfo">Date:  
                        <span className="weatherValue">  {this.props.date5}</span>
                    </p>
                }

                {
                    this.props.country && this.props.city && this.props.region && <p className="weatherInfo">Location: 
                        <span className="weatherValue">  {this.props.city}, {this.props.region}, {this.props.country}</span>                    
                    </p> 
                }
                
                {
                    this.props.temperature5 && <p className="weatherInfo">Temperature: 
                        <span className="weatherValue">  {this.props.temperature5} °C</span>
                    </p>
                }

                {
                    this.props.humidity5 && <p className="weatherInfo">Humidity: 
                        <span className="weatherValue">  {this.props.humidity5}</span>
                    </p>
                }

                {
                    this.props.minTemp5 && <p className="weatherInfo">Min Temperature:  
                        <span className="weatherValue">  {this.props.minTemp5} °C</span>
                    </p>
                }

                {
                    this.props.maxTemp5 && <p className="weatherInfo">Max Temperature:  
                        <span className="weatherValue">  {this.props.maxTemp5} °C</span>
                    </p>
                }

                {
                    this.props.error && <p className="weatherError">{this.props.error}</p>
                }
                </div>

            </div>

        </div>


        )
    }
}

export default Weather;