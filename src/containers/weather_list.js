import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {
    renderWeather(cityData) {
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);

        return (
           <tr key={cityData.city.name}>
               <td>{cityData.city.name}</td>
               <td>
                   <Sparklines height={120} width={150} data={temps}>
                       <SparklinesLine color="red" />
                   </Sparklines>
               </td>
               <td>
                   <Sparklines height={120} width={150} data={pressure}>
                       <SparklinesLine color="green" />
                   </Sparklines>
               </td>
               <td>
                   <Sparklines height={120} width={150} data={humidity}>
                       <SparklinesLine color="blue" />
                   </Sparklines>
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