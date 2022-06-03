import React from 'react';
import 'devextreme/data/odata/store';
import DataGrid, {
	Column,
	Pager,
	Paging,
	FilterRow,
	Lookup
} from 'devextreme-react/data-grid';

export default function Task() {
	return (
		<React.Fragment>
			<h2 className={'content-block'}>Tasks</h2>

			<DataGrid
				id = "gridContainer"
				className={'dx-card wide-card'}
				dataSource={dataSource}
				showBorders={true}
				focusedRowEnabled={true}
				defaultFocusedRowIndex={0}
				columnAutoWidth={true}
				columnHidingEnabled={true}
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
		</React.Fragment>
	);
}

const dataSource = {
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
