import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { setAnimation } from '../../theme/styles/helpers';
import logo from './../../../assets/img/logo.svg';

const Image = styled.img`
  width: 60px;
  cursor: pointer;
  ${setAnimation('spin infinite 20s linear')};
`;

const Logo = () => {
  const navigate = useNavigate();

  return <Image src={logo} alt="logo" onClick={() => navigate('/')} />;
};

export default Logo;
