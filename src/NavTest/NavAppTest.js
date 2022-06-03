import React from 'react';

import TreeView from 'devextreme-react/tree-view';
import {REQUESTLOGSTYPES} from './NavDataTest.js';
import DataGrid, {Column, FilterRow, Lookup, Pager, Paging} from "devextreme-react/data-grid";
import './NavTestStyles.css';

export default class NavAppTest extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			requestData: REQUESTLOGSTYPES[0].items[0],
			optionsData: REQUESTLOGSTYPES[0].items[0].options,
			requestGridDataSource: requestDataSource
		};

		this.handleTreeViewSelectionChange = this.handleTreeViewSelectionChange.bind(this);
	}

	render() {
		const {requestData} = this.state;
		const {requestGridDataSource} = this.state;
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

					<DataGrid
						id="gridContainer"
						className={'dx-card wide-card'}
						dataSource={requestGridDataSource}
						showBorders={true}
						focusedRowEnabled={true}
						defaultFocusedRowIndex={0}
						columnAutoWidth={true}
						columnHidingEnabled={true}
						onItemSelectionChanged={this.handleTreeViewSelectionChange}
					>
						<Paging defaultPageSize={10}/>
						<Pager showPageSizeSelector={true} showInfo={true}/>
						<FilterRow visible={true}/>


						<Column dataField={'Task_ID'} width={60} hidingPriority={2}/>
						<Column
							dataField={'Task_Subject'}
							width={290}
							caption={'Subject'}
							hidingPriority={8}
						/>
						<Column
							dataField={'Task_Status'}
							caption={'Status'}
							width={100}
							hidingPriority={6}
						/>
						<Column
							dataField={'Task_Priority'}
							caption={'Priority'}
							width={100}
							hidingPriority={5}
						>
							<Lookup
								dataSource={priorities}
								valueExpr={'value'}
								displayExpr={'name'}
							/>
						</Column>
						<Column
							dataField={'ResponsibleEmployee.Employee_Full_Name'}
							caption={'Assigned To'}
							allowSorting={false}
							width={150}
							hidingPriority={7}
						/>
						<Column
							dataField={'Task_Start_Date'}
							caption={'Start Date'}
							dataType={'date'}
							width={100}
							hidingPriority={3}
						/>
						<Column
							dataField={'Task_Due_Date'}
							caption={'Due Date'}
							dataType={'date'}
							width={100}
							hidingPriority={4}
						/>
						<Column
							dataField={'Task_Priority'}
							caption={'Priority'}
							name={'Priority'}
							width={100}
							hidingPriority={1}
						/>
						<Column
							dataField={'Task_Completion'}
							caption={'Completion'}
							width={100}
							hidingPriority={0}
						/>
					</DataGrid>
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

const requestDataSource = {
	store: {
		type: 'odata',
		key: 'Task_ID',
		url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks'
	},
	expand: 'ResponsibleEmployee',
	select: [
		'Task_ID',
		'Task_Subject',
		'Task_Start_Date',
		'Task_Due_Date',
		'Task_Status',
		'Task_Priority',
		'Task_Completion',
		'ResponsibleEmployee/Employee_Full_Name'
	]
};

const priorities = [
	{name: 'High', value: 4},
	{name: 'Urgent', value: 3},
	{name: 'Normal', value: 2},
	{name: 'Low', value: 1}
];


