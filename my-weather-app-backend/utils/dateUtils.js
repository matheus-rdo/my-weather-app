const moment = require('moment');

const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado'
]

const getWeekDay = date => {
    const dateMoment = moment(date, 'DD/MM')
    const weekIdx = dateMoment.weekday() 
    return weekDays[weekIdx]
}

module.exports = {
    getWeekDay
}