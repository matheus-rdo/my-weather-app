require('dotenv').config()
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var weatherAPI = require('./components/weather/weatherAPI');
var AppError = require('./utils/appError')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Modules API's
app.use('/weather', weatherAPI);

const errorHandler = (err, req, res, next) => {
    if (err instanceof AppError) {
        const response = {code: err.httpCode, message: err.description}
        return res.status(err.httpCode).send(response);
    }
    res.sendStatus(500);
}
app.use(errorHandler)

module.exports = app;
