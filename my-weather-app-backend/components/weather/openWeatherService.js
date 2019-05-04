const axios = require("axios");
const apiKey = process.env.OPEN_WEATHER_API_KEY
const moment = require('moment');
const _ = require('lodash');
const dateUtils = require('../../utils/dateUtils')
const AppError = require('../../utils/appError')

const getCityWeather = async cityName => {

    if (!cityName) throw new AppError('Por favor informe o nome da cidade', 400)

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},br&appid=${apiKey}&units=metric`
    try {
        const response = await axios.get(url);
        const data = _transform(response.data)
        return data
    } catch (error) {
        const { cod, message } = error.response.data
        throw new AppError(message, cod)
    }
}

function _transform(data) {
    const grouped = _.groupBy(data.list, date)
    const weathersByDay = _.map(grouped, extractWeather)
    return weathersByDay
}

var date = d => {
    return moment(d.dt_txt).format('DD/MM');
}

var extractWeather = (days, day) => {
    const weathers = days.map(d => d.main)
    const { temp_max } = weathers.reduce((prev, current) => (prev.temp_max > current.temp_max) ? prev : current)
    const { temp_min } = weathers.reduce((prev, current) => (prev.temp_min < current.temp_min) ? prev : current)
    const weekDay = dateUtils.getWeekDay(day)
    const humidity = weathers
        .map(d => d.humidity)
        .reduce((a, b) => (a + b)) / weathers.length

    const dayWeather = {
        day,
        temp_max,
        temp_min,
        weekDay,
        humidity
    }

    return dayWeather
}


module.exports = {
    getCityWeather
}