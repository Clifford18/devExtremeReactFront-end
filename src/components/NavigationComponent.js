import React from 'react';
import 'devextreme/data/odata/store';
import 'devextreme/dist/css/dx.light.css';
import TreeView from 'devextreme-react/tree-view';
import {REQUESTLOGSTYPES} from './NavigationData.js';
import DataGrid, {Column, FilterRow, Lookup, Pager, Paging} from "devextreme-react/data-grid";
import './styles/NavigationStyles.css';
import ScrollViewApp from "../scrollview/ScrollViewApp";
import ChangePasswordComponent from "./ChangePasswordComponent";

export default class NavigationComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			requestData: REQUESTLOGSTYPES[0].items[0],
			optionsData: REQUESTLOGSTYPES[0].items[0].options,
		};

		this.handleTreeViewSelectionChange = this.handleTreeViewSelectionChange.bind(this);
	}

	render() {


		const {requestData} = this.state;

		return (
			<div className="container">
				<div className="left-content">
					<TreeView
						dataSource={REQUESTLOGSTYPES}
						selectionMode="single"
						selectByClick={true}
						onItemSelectionChanged={this.handleTreeViewSelectionChange}
					/>
				</div>
				<div className="right-content">
					<div className="title-container">
						<div>
							<div className="request-data-type">{requestData.title}</div>
							<div>{requestData.description}</div>
						</div>
					</div>
					<ChangePasswordComponent/>
					{/*<ScrollViewApp/>*/}

				</div>
			</div>
		);
	}

	handleTreeViewSelectionChange(e) {
		const requestData = e.itemData;
		// const requestGridDataSource
		if (requestData.options) {
			this.setState({
				requestData: e.itemData,
				optionsData: requestData.options,
				requestGridDataSource: e.itemData

			});
		}
	}

}



