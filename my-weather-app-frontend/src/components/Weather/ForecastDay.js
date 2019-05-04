import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
margin: 5px;
text-align: center
width: 200px;
background-color: rgba(255,255,255,0.05);
border-style: solid;
border-width: 5px;
border-color: rgba(255,255,255,0.3);
border-radius: 5px;
cursor: pointer;
display: block
`

const Weekday = styled.h4`
margin-bottom: 0px;
`

const Day = styled.p`
    font-size: 12px;
`



export default function ForecastDay({ day, onSelectDay }) {

    return (
        <Container onClick={() => onSelectDay(day)}>
            <Weekday>
                {day.weekDay}
            </Weekday>
            <Day>{day.day}</Day>
            {day.temp_max}º <br />
            {day.temp_min}º <br />
        </Container>
    );
}