import React from "react";
import LoginComponent from "./LoginComponent";
import ErrorPage from "./ErrorPage";
import RequestsLogComponent from "./RequestsLogComponent";
import ProfileComponent from "./ProfileComponent";
import ChangePasswordComponent from "./ChangePasswordComponent";
import LayoutComponent from "./LayoutComponent";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import RequireAuth from "./RequireAuth";


export default function RouterComponent() {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/login" element={<LoginComponent/>}/>

					{/*Protected routes*/}
					<Route path="/" element={<LayoutComponent><RequestsLogComponent/></LayoutComponent>}/>
					<Route path="/atm-logs" element={<LayoutComponent> <RequestsLogComponent/></LayoutComponent>}/>
					<Route path="/members-portal-logs" element={<LayoutComponent> <RequestsLogComponent/></LayoutComponent>}/>
					<Route path="/my-profile" element={<LayoutComponent> <ProfileComponent/></LayoutComponent>}/>
					<Route path="/reset-password" element={<LayoutComponent> <ChangePasswordComponent/></LayoutComponent>}/>

					{/*/!*Protected routes*!/*/}
					{/*<Route path="/" element={<RequireAuth> <LayoutComponent><RequestsLogComponent/></LayoutComponent></RequireAuth>}/>*/}
					{/*<Route path="/atm-logs" element={<RequireAuth> <LayoutComponent> <RequestsLogComponent/></LayoutComponent></RequireAuth>}/>*/}
					{/*<Route path="/members-portal-logs" element={<RequireAuth> <LayoutComponent> <RequestsLogComponent/></LayoutComponent></RequireAuth>}/>*/}
					{/*<Route path="/my-profile" element={<RequireAuth> <LayoutComponent> <ProfileComponent/></LayoutComponent></RequireAuth>}/>*/}
					{/*<Route path="/reset-password" element={<RequireAuth> <LayoutComponent> <ChangePasswordComponent/></LayoutComponent></RequireAuth>}/>*/}

					{/*Catch all Path*/}
					<Route path="*" element={<ErrorPage/>}/>

				</Routes>
			</div>
		</Router>
	);
};
