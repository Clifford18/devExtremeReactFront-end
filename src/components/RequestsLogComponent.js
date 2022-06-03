import React from 'react';
import DataGrid from 'devextreme-react/data-grid';
import {Column} from "devextreme-react/gantt";


const columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];

const JSON_URL = 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/data/customers.json';

export default class RequestsLogComponent extends React.Component {
	render() {
		return (
			<DataGrid
				dataSource={JSON_URL}
				defaultColumns={columns}
				showBorders={true}
			/>
		);
	}
}

	// const JSON_URL = 'http://localhost:9081/api/rest/request-logs';

// export default class RequestsLogComponent extends React.Component {
// 	render() {
// 		return (
// 			<DataGrid
// 				dataSource="http://localhost:9081/api/rest/request-logs/"
// 				// defaultColumns={columns}
// 				showBorders={true}
// 			>
// 				<Column dataField={'request_id'} width={90} hidingPriority={2}/>
// 				<Column
// 					dataField={'request_reference'}
// 					width={150}
// 					caption={'Request Reference'}
// 				/>
// 				<Column
// 					dataField={'request_method'}
// 					width={140}
// 					caption={'Request Method'}
// 				/>
//
// 				<Column
// 					dataField={'request_headers'}
// 					width={140}
// 					allowSorting={false}
// 					caption={'Request Headers'}
// 				/>
// 				<Column
// 					dataField={'request_body'}
// 					width={190}
// 					allowSorting={false}
// 					caption={'Request Body'}
// 				/>
// 				<Column
// 					dataField={'response_headers'}
// 					width={190}
// 					allowSorting={false}
// 					caption={'Response Headers'}
// 				/>
// 				<Column
// 					dataField={'response_body'}
// 					width={190}
// 					allowSorting={false}
// 					caption={'Response Body'}
// 				/>
// 				<Column
// 					dataField={'error_code'}
// 					width={100}
// 					caption={'Error Code'}
// 				/>
// 				<Column
// 					dataField={'date_created'}
// 					width={190}
// 					caption={'Date Created'}
// 					dataType={'date'}
//
// 				/>
// 				<Column
// 					dataField={'date_modified'}
// 					width={190}
// 					caption={'Date Modified'}
// 					dataType={'date'}
//
// 				/>
// 			</DataGrid>
//
// 		);
// 	}
// }



