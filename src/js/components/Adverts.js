import React from "react";

export default class Adverts extends React.Component {
	render() {
		const title = this.props.title;
		return (
			<h4> { title } </h4>
		);
	}
}