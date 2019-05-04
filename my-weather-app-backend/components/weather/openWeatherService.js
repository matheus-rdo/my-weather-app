const axios = require("axios");
const apiKey = process.env.OPEN_WEATHER_API_KEY
const AppError = require('../../utils/appError')

const getCityWeather = async cityName => {

    if (!cityName) throw new AppError('Por favor informe o nome da cidade', 400)

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},br&appid=${apiKey}`
    try {
        const response = await axios.get(url);
        const data = response.data
        return data
    } catch (error) {
        const { cod, message } = error.response.data
        throw new AppError(message, cod)
    }

}

module.exports = {
    getCityWeather
}