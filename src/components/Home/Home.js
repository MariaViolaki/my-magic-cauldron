import React from 'react';
import Showcase from './Showcase/Showcase';
import WelcomeMessage from './WelcomeMessage/WelcomeMessage';
import './Home.css';

const Home = () => {
	return (
		<main className='Home'>
			<Showcase />
			<WelcomeMessage />
		</main>
	);
}

export default Home;