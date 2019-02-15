import React from 'react';
import './PotionScore.css';
import circle from './circle.png';

const PotionScore = () => {
	return(
		<div className='PotionScore'>
			<div className='score-image-box'>
				<h2 className='profile-heading-2'>
					{`Potions Unlocked:`}
				</h2>
				<img
					className='score-image'
					src={circle}
					alt='circle'
				/>
				<p className='score'>
					{`20/20`}
				</p>
			</div>
		</div>
	);
}

export default PotionScore;