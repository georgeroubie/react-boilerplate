import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './../../../../assets/images/react.svg';
import styles from './Logo.module.scss';

const Logo = (): React.ReactElement => {
  const navigate = useNavigate();

  return <img className={styles.image} src={logo} alt="logo" onClick={() => navigate('/')} />;
};

export default Logo;
