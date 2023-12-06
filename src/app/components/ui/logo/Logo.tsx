import logo from '@images/react.svg';
import { ROUTES } from '@routes/routes';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Logo.module.scss';

const Logo = (): ReactElement => {
  const navigate = useNavigate();

  return <img className={styles.image} src={logo} alt="logo" onClick={() => navigate(ROUTES.HOME)} />;
};

export default Logo;
