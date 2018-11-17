import React from "react";
import Info from "./components/info";
import Form from "./components/form"
import Weather from "./components/Weather"

const API_KEY = "32b14e59fd8ace4b46c72b4f58acda8e"

class App extends React.Component {

gettingWeather = async () => {
   const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=${API_KEY}&units=metric`);
   const data = await api_url.json();
   console.log(data);
  }

  render (){
    return (
      <div>
       <Info />
       <Form />
       <Weather />
      </div>
    );
  }
}

export default App;