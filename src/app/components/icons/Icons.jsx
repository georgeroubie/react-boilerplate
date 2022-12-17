import PropTypes from 'prop-types';
import AngleDown from './AngleDown';
import AngleLeft from './AngleLeft';
import AngleRight from './AngleRight';
import AngleUp from './AngleUp';
import Bell from './Bell';
import Check from './Check';
import Comments from './Comments';
import Envelope from './Envelope';
import Gear from './Gear';
import Heart from './Heart';
import Home from './Home';
import Info from './Info';
import Magnifier from './Magnifier';
import Minus from './Minus';
import Play from './Play';
import Plus from './Plus';
import Spinner from './Spinner';
import Times from './Times';
import Trash from './Trash';
import User from './User';

export const iconList = {
  AngleDown,
  AngleLeft,
  AngleRight,
  AngleUp,
  Bell,
  Check,
  Comments,
  Envelope,
  Gear,
  Heart,
  Home,
  Info,
  Magnifier,
  Minus,
  Play,
  Plus,
  Spinner,
  Times,
  Trash,
  User,
};

const Icons = ({ type, ...iconProps }) => {
  if (iconList[type]) {
    const Component = iconList[type];
    return <Component {...iconProps} />;
  }
  return null;
};

Icons.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

Icons.defaultProps = {
  className: '',
  width: '100%',
  height: '100%',
};

export default Icons;
