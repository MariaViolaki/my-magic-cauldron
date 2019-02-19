import React from 'react';
import './Footer.css';

import {
	ROUTE_PROFILE, MEMBER
} from '../../redux/constants';

const Footer = ({ route, access }) => {
	return(
	(route === ROUTE_PROFILE && access !== MEMBER)
	? 
		(<footer className='Footer nav-footer sticky'>
			<p className='footer-text'>
				{'© 2019 | My Magic Cauldron'}
			</p>
		</footer>)
	: 
		(<footer className='Footer nav-footer'>
			<p className='footer-text'>
				{'© 2019 | My Magic Cauldron'}
			</p>
		</footer>)
	);
}

export default Footer;