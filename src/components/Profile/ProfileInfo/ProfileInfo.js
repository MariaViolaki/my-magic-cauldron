import React from 'react';
import './ProfileInfo.css';

const ProfileInfo = () => {
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
					{`Laito`}
				</p>
			</div>
			<div>
				<h4 className='info-heading'>	
					{`Surname`}
				</h4>
				<button className='button info-button'>
					{`Change`}
				</button>
				<p className='info-text'>	
					{`Sakamaki`}
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
					{`laitosakamaki`}
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
					{`laitosakamaki@anime.com`}
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