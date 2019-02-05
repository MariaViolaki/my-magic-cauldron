import React from 'react';
import './Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PotionScore from './PotionScore/PotionScore';
import Grimoire from './Grimoire/Grimoire';

const Profile = () => {
	return(
		<div className='Profile'>
			<h1 className='heading profile-heading'>
				{`Laito Sakamaki`}
			</h1>
			<div className='info-box message-section'>
				<ProfileInfo />
				<PotionScore />
			</div>
			<Grimoire />
		</div>
	);
}

export default Profile;