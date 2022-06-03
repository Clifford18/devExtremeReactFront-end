import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import Task from "./components/Tasks";
import RequestsDataComponent, {RequestsDataTest} from "./components/RequestsDataComponent";
import NavApp from "./nav/NavApp";
import ScrollViewApp from "./scrollview/ScrollViewApp";
import {AxiosTest} from "./components/AxiosTest";
import NavAppTest from "./NavTest/NavAppTest";
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import JsonComponent from "./components/jsondata/JsonComponent";


function App() {
	return (
		<Router>
			<div>
				{/*<HeaderComponent/>*/}
				{/*<div className="container">*/}
					<NavAppTest/>

				{/*</div>*/}
				{/*<div className="container">*/}
				{/*	<ScrollViewApp/>*/}


				{/*</div>*/}
				{/*<div>*/}
				{/*	<RequestsDataComponent/>*/}
				{/*	<RequestsDataTest/>*/}
				{/*	<Task/>*/}
				{/*	<NavApp/>*/}
				{/*	<AxiosTest/>*/}
				{/*	<NavAppTest/>*/}
				{/*	<JsonComponent/>*/}
				{/*<CustomJsonComponent/>*/}
				{/*</div>*/}
				{/*<FooterComponent/>*/}


			</div>

		</Router>

	);
}

export default App;
