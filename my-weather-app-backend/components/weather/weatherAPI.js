var express = require('express');
var router = express.Router();
var openWeatherService = require('./openWeatherService')
var weatherDAL = require('./weatherDAL')

router.get('/find', async function (req, res, next) {
    const cityName = req.query.city
    try {
        const response = await openWeatherService.getCityWeather(cityName);
        res.send(response)
        weatherDAL.saveHistory(cityName)
    } catch (err) {
        next(err)
    }
});


module.exports = router;
