import React from 'react';
import './WelcomeMessage.css';

const WelcomeMessage = () => {
	return(
		<section className='WelcomeMessage message-section'>
			<h3 className='heading'>
				I found My Magic Cauldron! What should I do?
			</h3>
			<p className='paragraph'>
				Welcome to <strong>My Magic Cauldron</strong>, the place where you can create magic potions! 
				But don't worry. We're here to help!
			</p>
			<h3 className='heading'>
				Sounds interesting! Where do I start?
			</h3>
			<p className='paragraph'>
				Just click on the <strong>Game</strong> link on top. 
				From there, you can start trying out potion recipes!
			</p>
			<h3 className='heading'>
				I'm confused! Can you give me more info about the game?
			</h3>
			<p className='paragraph'>
				You can play both as a guest and as a member.
				Just select a type of element, a flower, and a crystal, 
				and say <strong>'Abracadabra!'</strong> to make the potion.
				We have provided information about each ingredient's symbolism
				but, if you want to know a little more about the potions you can make,
				you can sign up and gain access to your own grimoire :)
			</p>
		</section>
	);
}

export default WelcomeMessage;