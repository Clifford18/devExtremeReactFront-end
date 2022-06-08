import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import './styles/NavigationStyles.css';
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

 const LayoutComponent = (props) => {


	return (
		<div>
			<HeaderComponent/>
			<div className="container">
				<div className="left-content">
					{/*<div>*/}
					{/*	<Link to="dashboard/">ATM Bridge Logs</Link>*/}
					{/*</div>*/}
					{/*<div>*/}
					{/*	<Link to="dashboard/atm-logs">ATM Bridge Logs</Link>*/}
					{/*</div>*/}
					{/*<div>*/}
					{/*	<Link to="dashboard/members-portal-logs">Members Portal Logs </Link>*/}
					{/*</div>*/}
					{/*<div>*/}
					{/*	<Link to="dashboard/my-profile">My Profile</Link>*/}
					{/*</div>*/}
					{/*<div>*/}
					{/*	<Link to="dashboard/reset-password">Reset Password</Link>*/}
					{/*</div>*/}
					{/*<div>*/}
					{/*	<Link to="/login">Login page</Link>*/}
					{/*</div>*/}
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





