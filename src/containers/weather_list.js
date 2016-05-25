import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

export default class WeatherList extends Component {

    constructor(props) {
        super(props);

        this.renderWeather = this.renderWeather.bind(this);
    }

    renderWeather(cityData) {

        const temps = cityData.list.map(weather=> weather.main.temp);
        const pressures = cityData.list.map(weather=> weather.main.pressure);
        const humidities = cityData.list.map(weather=> weather.main.humidity);

        return <tr key={cityData.city.name}>
            <td>{cityData.city.name}</td>
            <td>
                <Chart data={temps} color="red"/>
            </td>
            <td>
                <Chart data={pressures} color="blue"/>
            </td>
            <td>
                <Chart data={humidities} color="green"/>
            </td>
        </tr>
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temp. (k)</th>
                    <th>Press. (hPa)</th>
                    <th>Hum. (%)</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}

                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);
