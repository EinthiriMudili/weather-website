import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function getWOEID(city) {
	return axios.get("api/location/search?query=" + city);
}

function getWeather(WOEID){
	return axios.get("api/location/" + WOEID + "/");
}

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = { weather: null };
	}



	render() {
		var weather = this.state.weather;
	

		return (
			<div className='container'>
				<input type="text" placeholder="Enter the City" onChange={(e) => {
					var city = e.target.value;
					getWOEID(city).then(response => {
						var data = response.data;
						if (data.length > 0) {
							var WOEID = data[0]["woeid"]
							getWeather(WOEID).then(response => {
								var weather = response.data;
								console.log(weather);
								this.setState({weather:weather});
							})
						}
					})
				}} />
				{this.state.weather == null ? (<h4>Weather is loading </h4>) :<div>
					<p class="bg-primary">Weather.</p>
					</div>}
			</div>

		);
	}
}


export default App;
