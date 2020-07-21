import React from 'react';
import './App.css';
import axios from 'axios';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
axios.defaults.headers.common['Access-Control-Allow-Headers'] = "";

const instance = axios.create({
	baseURL: window.location.origin,
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json, text/plain, */*',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
	}
});

function debounce(func, wait) {
	var timeout = null;

	return function executedFunction(args) {
		var later = function () {
			timeout = null;
		};

		var callNow = timeout === null;

		clearTimeout(timeout);

		timeout = setTimeout(later, wait);

		if (callNow) func(args);
	};
};


function getWOEID(city) {
	return instance.get("/api/location/search?query=" + city);
}

function getWeather(WOEID) {
	return instance.get("/api/location/" + WOEID + "/");
}

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = { weather: null, loading: false };

		this.onInputChange = debounce((e) => {
			var city = e.target.value;

			if (city.length >= 4) {

				this.setState({ loading: true });

				getWOEID(city).then(response => {
					var data = response.data;
					if (data.length > 0) {
						var WOEID = data[0]["woeid"]
						getWeather(WOEID).then(response => {
							var weather = response.data;
							this.setState({
								weather: weather,
								loading: false
							});
						})
					}
				})
			}
		}, 3000);
	}

	render() {
		return (
			<div className='container'>
				<input type="text" placeholder="Enter the City" onChange={this.onInputChange} />

				{this.state.loading == null ? (<h4>Weather is loading </h4>) : <div>
					{
						this.state.weather !== null ? (<p className="bg-primary">
							{JSON.stringify(this.state.weather)}
						</p>) : null
					}
				</div>}
			</div>
		);
	}
}


export default App;