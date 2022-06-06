import React from 'react';
import ScrollView from 'devextreme-react/scroll-view';
import service from './scrolldata';
import './ScrollViewStyles.css'
import RequestsLogComponent from "../components/RequestsLogComponent";

export default class ScrollViewApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showScrollBarMode: 'always',
			scrollByContent: true,
			scrollByThumb: true,
			content: service.getContent(),
		};
		this.getInstance = this.getInstance.bind(this);
		this.scrollbarModelValueChanged = this.scrollbarModelValueChanged.bind(this);
		this.scrollByContentValueChanged = this.scrollByContentValueChanged.bind(this);
		this.scrollByThumbValueChanged = this.scrollByThumbValueChanged.bind(this);
	}

	render() {
		const {
			showScrollBarMode, scrollByThumb, scrollByContent,
		} = this.state;
		return (
			<div id="scrollview-demo">
				<ScrollView id="scrollview" ref={this.getInstance}
							scrollByContent={scrollByContent}
							showScrollbar={showScrollBarMode}
							scrollByThumb={scrollByThumb}>
					<div className="text-content">
						<RequestsLogComponent/>
					</div>
				</ScrollView>

			</div>
		);
	}

	getInstance(ref) {
		this.scrollView = ref.instance;
	}

	scrollbarModelValueChanged(args) {
		this.setState({
			showScrollBarMode: args.value,
		});
	}

	scrollByContentValueChanged(args) {
		this.setState({
			scrollByContent: args.value,
		});
	}

	scrollByThumbValueChanged(args) {
		this.setState({
			scrollByThumb: args.value,
		});
	}



}
