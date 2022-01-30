import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
	color: #61dafb;
`;

const LearnMore = () => {
	return (
		<Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
			Learn React
		</Link>
	);
};

export default LearnMore;
