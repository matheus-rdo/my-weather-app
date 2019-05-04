import React from 'react';


export default function ForecastDayDetailed({ day }) {
    if (!day) return null
    console.log(day)
    return (
        <div>
            <h4>{day.weekDay} - {day.day}</h4>
            <p>Temperatura máxima {day.temp_max}º</p>
            <p>Temperatura mínima {day.temp_min}º</p>
            <p>Umidade {day.humidity}%</p>

        </div>
    );
}
