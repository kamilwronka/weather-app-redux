import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
    renderWeather(cityData) {
        const kelvin = 273.15;
        const temps = cityData.list.map(weather => weather.main.temp - kelvin);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);

        return (
           <tr key={cityData.city.name}>
               <td>{cityData.city.name}</td>
               <td>
                   <Chart data={temps} color="orange" />
               </td>
               <td>
                   <Chart data={pressure} color="green" />
               </td>
               <td>
                   <Chart data={humidity} color="blue" />
               </td>
           </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather }; // {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);