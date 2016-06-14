import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
	navigate() {
		console.log(this.props);
		this.props.history.push(null, "/");
	}

	render() {
		return (
			<div>
			<h1>KillerNews.net</h1>
			{this.props.children}
			<Link to="archives"> <button class="btn btn-success" onClick={this.navigate.bind(this)}> Archives </button></Link>
			<Link to="settings"> <button class="btn btn-success" onClick={this.navigate.bind(this)}> Settings </button></Link>
			<Link to="featured"> <button class="btn btn-success" onClick={this.navigate.bind(this)}> Featured </button></Link>
			</div>
		)
	}
}