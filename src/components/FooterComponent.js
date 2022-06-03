import './styles/FooterStyles.css'
import React, {Component} from 'react';

class FooterComponent extends Component {
	render() {
		return (
			<div>
				<footer className = "footer">
					<span className="text-muted">All Rights Reserved 2022 @Clifford18 </span>
				</footer>
			</div>
		);
	}
}

export default FooterComponent;