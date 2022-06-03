import React, {Component} from 'react';
import Toolbar, {Item} from "devextreme-react/toolbar";
import notify from 'devextreme/ui/notify';
import 'devextreme/ui/select_box';

function renderLabel() {
	return <div className="toolbar-label"><b>SKY REQUEST LOGS APP</b></div>;
}

export default class HeaderComponent extends Component {
	render() {
		return (
			<React.Fragment>
				<div>
					<header>
						<nav className="navbar nav-expand-md navbar-dark bg-dark">
							<Toolbar>
								<Item location="center"
									  locateInMenu="never"
									  render={renderLabel}/>

								<Item locateInMenu="always"
									  widget="dxButton"
									  options={logoutButton}/>

							</Toolbar>
						</nav>

					</header>
				</div>

			</React.Fragment>

		);
	}
}


const logoutButton = {
	text: 'Logout',
	onClick: () => {
		notify('Succefully logged out!');
	}
};

