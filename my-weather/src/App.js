import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function getWOEID(city) {
	return axios.get("https://www.metaweather.com/api/location/search/?query=" + city);
}

function getWeather(WOEID){
	return axios.get("https://www.metaweather.com/api/location/" + WOEID);
}

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = { weather: null };
	}



	render() {

	

		return (
			<div className='container'>
				<input type="text" placeholder="Enter the City" />

			</div>

		);
	}
}


export default App;
