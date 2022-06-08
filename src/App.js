import './App.css';
import NavigationComponent from "./components/NavigationComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import RequestsLogComponent from "./components/RequestsLogComponent";
import ProfileComponent from "./components/ProfileComponent";
import ChangePasswordComponent from "./components/ChangePasswordComponent";
import ErrorPage from "./components/ErrorPage";
import LoginComponent from "./components/LoginComponent";
import React from "react";


function App() {
	return (
		<Router>
			<div>
				<HeaderComponent/>

				<div className="container">
					<Routes>
						<Route path="/login" element={<LoginComponent/>}/>
						<Route path="*" element={<ErrorPage/>}/>

						<Route path="*" element={<ErrorPage/>}/>
						<Route path="/" element={<RequestsLogComponent/>}/>
						<Route path="/atm-logs" element={<RequestsLogComponent/>}/>
						<Route path="/members-portal-logs" element={<RequestsLogComponent/>}/>
						<Route path="/my-profile" element={<ProfileComponent/>}/>
						<Route path="/reset-password" element={<ChangePasswordComponent/>}/>


					</Routes>
				</div>
				<FooterComponent/>

			</div>
		</Router>


	);
}

export default App;
