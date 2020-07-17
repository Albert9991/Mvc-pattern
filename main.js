import{config} from './Config/config.js';

document.getElementById('button').addEventListener('click',() =>{
    config['GET_WEATHER']()
})