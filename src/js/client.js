import React from "react";
import ReactDom from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
/*
	Above code can just we writen as:

	import Router from "react-router";
	import Route from "react-router";
	import IndexRoute from "react-router";
	import hashHistory from "react-router";
*/

//import Bootstrap from "./vendor/bootstrap-without-jquery";

import Layout from "./pages/Layout";

const app = document.getElementById('app');
ReactDom.render(
	<Router history = {hashHistory}> 
		<Route path = "/" component = {Layout}>
		</Route>
	</Router>, 
app);