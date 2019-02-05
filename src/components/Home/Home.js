import React from 'react';
import './Home.css';
import Showcase from './Showcase/Showcase';
import WelcomeMessage from './WelcomeMessage/WelcomeMessage';

const Home = () => {
	return (
		<main className='Home'>
			<Showcase />
			<WelcomeMessage />
		</main>
	);
}

export default Home;