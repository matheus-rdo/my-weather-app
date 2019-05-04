const { WeatherHistory } = require('../../models')

const saveHistory = cityName => {
    WeatherHistory.create({ city: cityName })
}

module.exports = {
    saveHistory
}