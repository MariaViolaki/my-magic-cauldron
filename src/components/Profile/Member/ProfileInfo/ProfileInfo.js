import React from 'react';
import './ProfileInfo.css';

const ProfileInfo = ({name, username, email}) => {
	return(
		<div className='ProfileInfo'>
			<h2 className='profile-heading-2'>
				{`Profile Information:`}
			</h2>
			<div>
				<h4 className='info-heading'>	
					{`Name`}
				</h4>
				<button className='button info-button'>
					{`Change`}
				</button>
				<p className='info-text'>	
					{name}
				</p>
			</div>
			<div>
				<h4 className='info-heading'>	
					{`Username`}
				</h4>
				<button className='button info-button'>
					{`Change`}
				</button>
				<p className='info-text'>	
					{username}
				</p>
			</div>
			<div>
				<h4 className='info-heading'>	
					{`Email`}
				</h4>
				<button className='button info-button'>
					{`Change`}
				</button>
				<p className='info-text'>	
					{email}
				</p>
			</div>
			<div>
				<h4 className='info-heading'>	
					{`Password`}
				</h4>
				<button className='button info-button'>
					{`Change`}
				</button>
				<p className='info-text'>	
					{`**********`}
				</p>
			</div>
		</div>
	);
}

export default ProfileInfo;