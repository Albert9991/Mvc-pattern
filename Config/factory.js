import * as Controller from '../Controller/index.js'
import * as Operation from '../Operation/index.js'
import * as Api from '../API/index'


const weatherApi = new Api.WeatherApi();
const weatherOperation = new Operation.WeatherOperation(weatherApi)
const weatherController = new Controller.Weathercontroller(weatherOperation)

export{
    weatherController
}