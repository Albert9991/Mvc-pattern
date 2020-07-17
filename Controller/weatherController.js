class WeatherController{
    constructor(weatherOperation){
        this.weatherOperation = weatherOperation
    }

    getWeather = () =>{
        console.log('weather')
    }
}

export default WeatherController;
