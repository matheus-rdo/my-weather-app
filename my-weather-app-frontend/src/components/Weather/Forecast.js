import React from 'react';
import ForecastDay from './ForecastDay';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
`;

export default function Forecast({ forecast, city }) {
    if (!forecast) return null

    var days = forecast.map((day, index) => {
        return <ForecastDay key={index} day={day} />
    })

    return (
        <div>
            <h4>{city}</h4>
            <Container>
                {[days]}
            </Container>
        </div>
    );
}
