import React, {useState} from 'react';
import './styles/profile.css';
import Form from 'devextreme-react/form';

export default function Profile() {

	const employee = {
		ID: 7,
		Email: 'John@example.com',
		FirstName: 'John',
		LastName: 'Karani',
		Position: 'Dev'
	};

	return (
		<React.Fragment>


			<div className={'content-block dx-card responsive-paddings'}>
				<div>
					<h2 className={'content-block'}>Profile</h2>
				</div>
				<div>
					<Form
						id={'form'}
						defaultFormData={employee}
						labelLocation={'top'}
						// colCountByScreen={colCountByScreen}
					/>
				</div>
			</div>


		</React.Fragment>
	);
}

const colCountByScreen = {
	xs: 1,
	sm: 2,
	md: 3,
	lg: 4
};
