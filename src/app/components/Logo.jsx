import React from 'react';
import logo from './../../assets/img/logo.svg';
import styled from 'styled-components';

const Image = styled.img`
	height: 40vmin;
	pointer-events: none;

	@media (prefers-reduced-motion: no-preference) {
		animation: spin infinite 20s linear;
	}
`;

const Logo = () => {
	return <Image src={logo} alt="logo" />;
};

export default Logo;
