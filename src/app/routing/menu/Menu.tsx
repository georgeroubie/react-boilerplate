import { NavLink } from 'react-router-dom';
import Logo from '../../components/ui/logo';
import styles from './Menu.module.scss';

const menuItems = [
  { path: '/', label: 'Home' },
  { path: '/info', label: 'Info' },
  { path: '/settings', label: 'Settings' },
];

const Menu = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      {menuItems.map(({ path, label }) => (
        <NavLink className={({ isActive }) => (isActive ? styles.active : '')} key={path} to={path} end>
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Menu;
