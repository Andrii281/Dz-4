import getWeather from './foo/getWeather.js'
import displayWeather from './foo/displayWeather.js'


const BASE = 'http://api.weatherstack.com/'
const KEY = '6d1796e37a464cac70fad78dbe9e9b39'

const weatherBlock = document.querySelector('.weatherBlock')

const weather = getWeather(BASE, KEY);

displayWeather(weather, weatherBlock);

