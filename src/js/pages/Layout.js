import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import Ad from "../components/Ad";

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			title: "Ad One"
		};
	}

	changeTitle(title) {
		this.setState(title);
	}

  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };

    return (
      <div>

        <Nav location={location} />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
            	<h1>KillerNews.net</h1>
            	<div class="col-lg-12">
        	  		<div class="well text-center">
          				<Ad changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
        			</div>
      		   </div>
            	{this.props.children}
            </div>
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}