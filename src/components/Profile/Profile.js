import React from 'react';
import Member from './Member/Member';
import SignUp from './SignUp/SignUp';
import LogIn from './LogIn/LogIn';
import './Profile.css';

import {
	SIGNUP,	LOGIN, MEMBER
} from '../../redux/constants';

const Profile = ({ access }) => {

	const renderAccessComponent = () => {
		switch(access) {
			case LOGIN:
				return <LogIn />;
			case MEMBER:
				return <Member />;
			case SIGNUP:
			default:
				return <SignUp />;
		}
	}

	return(
		<div className='Profile'>
			{renderAccessComponent()}			
		</div>
	);
}

export default Profile;