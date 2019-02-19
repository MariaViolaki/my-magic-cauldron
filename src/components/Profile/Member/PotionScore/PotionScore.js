import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PotionScore.css';
import circle from './circle.png';

const mapStateToProps = (state) => {
	return {
		potions: state.requestUser.potionNumber
	};
}

class PotionScore extends Component {
	render() {
		const { potions } = this.props;

		return(
			<div className='PotionScore'>
				<div className='score-image-box'>
					<h2 className='profile-heading'>
						{`Potions Unlocked:`}
					</h2>
					<img
						className='score-image'
						src={circle}
						alt='circle'
					/>
					<p className='score'>
						{`${potions}/20`}
					</p>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps)(PotionScore);