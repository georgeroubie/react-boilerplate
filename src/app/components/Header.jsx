import React from 'react';
import styled from 'styled-components';
import Info from './Info';
import LearnMore from './LearnMore';
import Logo from './Logo';

const Head = styled.header`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`;

const Header = () => {
	return (
		<Head>
			<Logo />
			<Info />
			<LearnMore />
		</Head>
	);
};

export default Header;
