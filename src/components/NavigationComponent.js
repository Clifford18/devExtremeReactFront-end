import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import './styles/NavigationStyles.css';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import RequestsLogComponent from "./RequestsLogComponent";
import ChangePasswordComponent from "./ChangePasswordComponent";
import ProfileComponent from "./ProfileComponent";
import ErrorPage from "./ErrorPage";
import LoginComponent from "./LoginComponent";

export default class NavigationComponent extends React.Component {

	render() {


		return (
			<Router>
				<div className="container">
					<div className="left-content">
						<div>
							<Link to="/">ATM Bridge Logs</Link>
						</div>
						<div>
							<Link to="/atm-logs">ATM Bridge Logs</Link>
						</div>
						<div>
							<Link to="/members-portal-logs" >Members Portal Logs </Link>
						</div>
						<div>
							<Link to="/my-profile" >My Profile</Link>
						</div>
						<div>
							<Link to="/reset-password" >Reset Password</Link>
						</div>
					</div>
					<div className="right-content">
						<Routes>
							<Route path="/" element={<RequestsLogComponent />} />
							<Route path="/atm-logs" element={<RequestsLogComponent />} />
							<Route path="/members-portal-logs" element={<RequestsLogComponent />} />
							<Route path="/my-profile" element={<ProfileComponent />} />
							<Route path="/reset-password" element={<ChangePasswordComponent />} />

							<Route path="*" element={<ErrorPage/>} />

							<Route path="/login" element={<LoginComponent/>} />

						</Routes>


					</div>
				</div>
			</Router>

		);
	}


}



