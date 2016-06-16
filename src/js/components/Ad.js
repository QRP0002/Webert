import React from "react";
import Adverts from "../components/Adverts"

export default class Ad extends React.Component {
	constructor() {
		super();
		this.state = {
			title: "Ad One"
		};
	}

	render() {
		const arrayAd = ["test1", "test2"];

		for(var i = 0; i < arrayAd.length; i++) {
			setTimeout(() => {
			this.setState({title: arrayAd[i]});
			}, 4000);

			return (
			<div> 
				<Adverts title={this.state.title}/>
			</div>
			);
		}
		
	}
}