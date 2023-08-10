import { ReactElement } from 'react';
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

export enum IconListItem {
  AngleDown = 'AngleDown',
  AngleLeft = 'AngleLeft',
  AngleRight = 'AngleRight',
  AngleUp = 'AngleUp',
  Bell = 'Bell',
  Check = 'Check',
  Comments = 'Comments',
  Envelope = 'Envelope',
  Gear = 'Gear',
  Heart = 'Heart',
  Home = 'Home',
  Info = 'Info',
  Magnifier = 'Magnifier',
  Minus = 'Minus',
  Play = 'Play',
  Plus = 'Plus',
  Spinner = 'Spinner',
  Times = 'Times',
  Trash = 'Trash',
  User = 'User',
}

type Props = {
  className?: string;
  type: IconListItem;
  width?: string;
  height?: string;
};

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

const Icons = ({ type, ...iconProps }: Props): ReactElement | null => {
  if (iconList[type]) {
    const Component = iconList[type];
    return <Component {...iconProps} />;
  }
  return null;
};

export default Icons;
