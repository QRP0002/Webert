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

import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import Todo from "./pages/Todo";

const app = document.getElementById('app');
ReactDom.render(
	<Router history = {hashHistory}> 
		<Route path = "/" component = {Layout}>
			<IndexRoute component={Featured}> </IndexRoute>
			<Route path = "archives(/:article)" name="archives" component = {Archives}> </Route>
			<Route path = "settings" name="settings" component = {Settings}> </Route>
			<Route path ="todo" name="todo" component = {Todo}> </Route>
		</Route>
	</Router>, 
app);