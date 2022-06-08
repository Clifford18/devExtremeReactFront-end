import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";
import LoginComponent from "./LoginComponent";
import ErrorPage from "./ErrorPage";
import RequestsLogComponent from "./RequestsLogComponent";
import ProfileComponent from "./ProfileComponent";
import ChangePasswordComponent from "./ChangePasswordComponent";


export default function RouterComponent() {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/login" element={<LoginComponent/>}/>
					<Route path="*" element={<ErrorPage/>}/>

					<Route path="/" element={<RequestsLogComponent/>}/>
					<Route path="/atm-logs" element={<RequestsLogComponent/>}/>
					<Route path="/members-portal-logs" element={<RequestsLogComponent/>}/>
					<Route path="/my-profile" element={<ProfileComponent/>}/>
					<Route path="/reset-password" element={<ChangePasswordComponent/>}/>


				</Routes>
			</div>
		</Router>


	);
};
