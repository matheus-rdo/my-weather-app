import React, { Component } from 'react';
import ForecastDay from './ForecastDay';
import styled from 'styled-components';
import ForecastDayDetailed from './ForecastDayDetailed';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
margin-top; 80px;
`;

export default class Forecast extends Component {


    state = {
        daySelected: null
    }

    componentWillReceiveProps({ forecast }) {
        if (forecast) {
            this.setState({ daySelected: forecast[0] })
        }
    }

    render() {
        const { forecast, city } = this.props
        if (!forecast) return null

        var days = forecast.map((day, index) => {
            return <ForecastDay key={index} day={day} onSelectDay={(daySelected) => this.setState({ daySelected })} />
        })

        return (
            <div>
                <h4>{city}</h4> <br />
                <ForecastDayDetailed day={this.state.daySelected} /> <br /> <br />
                <Container>
                    {[days]}
                </Container>
            </div>
        );
    }
}
