import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import './styles/NavigationStyles.css';
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import {Link} from "react-router-dom";

 const LayoutComponent = (props) => {


	return (
		<div>
			<HeaderComponent/>
			<div className="container">
				<div className="left-content">
					<div>
						<Link to="/atm-logs">ATM Bridge Logs</Link>
					</div>
					<div>
						<Link to="/members-portal-logs">Members Portal Logs </Link>
					</div>
					<div>
						<Link to="/my-profile">My Profile</Link>
					</div>
					<div>
						<Link to="/reset-password">Reset Password</Link>
					</div>
					<div>
						<Link to="/login">Login page</Link>
					</div>
				</div>
				<div className="right-content" >
					{props.children}

				</div>
			</div>
			<FooterComponent/>
		</div>
	);
};

 export default LayoutComponent;





