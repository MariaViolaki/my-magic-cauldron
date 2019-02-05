import React from 'react';
import './WelcomeMessage.css';
import hat from './hat.png';

const WelcomeMessage = () => {
	return(
		<section className='WelcomeMessage message-section'>
			<h3 className='heading'>
				{`I found My White Canvas! What should I do?`}
			</h3>
			<p className='paragraph'>
				{`Welcome to "My White Canvas", the place where you can create your own landscape! But don't worry. We're here to help!`}
			</p>	
			<div className='secondary-message'>
				<div>
					<h3 className='heading'>
						{`Sounds interesting! Where do I start?`}
					</h3>
					<p className='paragraph'>
						{`Just click on the "Game" link on top. From there, you can start creating your new landscape!`}
					</p>
					<h3 className='heading'>
						{`I'm confused! How do I use the tools you gave me?`}
					</h3>
					<p className='paragraph'>
						{`(Enter Instructions Here)`}
					</p>
				</div>
				<div className='welcome-image-box'>
					<img
						className='welcome-image'
						src={hat}
						alt='witch hat'
					/>
				</div>
			</div>
		</section>
	);
}

export default WelcomeMessage;