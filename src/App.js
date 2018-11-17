import React from "react";
import Info from "./components/info";
import Form from "./components/form"
import Weather from "./components/Weather"

const API_KEY = "32b14e59fd8ace4b46c72b4f58acda8e"

class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined,
        pressure: undefined

    }

gettingWeather = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;

    if (city) {
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();

        var sunset = data.sys.sunset;
        var date = new Date();
        date.setTime(sunset);
        var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

        this.setState({
            temp: data.main.temp,
            city: data.name,
            country: data.sys.country,
            sunrise: data.sys.sunrise,
            pressure: data.main.pressure,
            sunset: sunset_date,
            error: ""
        });
    }
}

  render (){
    return (
      <div>
       <Info />
       <Form weatherMethod={this.gettingWeather} />
       <Weather

       temp={this.state.temp}
       city={this.state.city}
       country={this.state.country}
       sunrise={this.state.sunrise}
       sunset={this.state.sunset}
       pressure={this.state.pressure}
       error={this.state.error}



       />
      </div>
    );
  }
}

export default App;