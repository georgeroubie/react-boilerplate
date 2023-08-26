/* eslint-disable react-refresh/only-export-components */
import AngleDown from '@components/icons/AngleDown';
import AngleLeft from '@components/icons/AngleLeft';
import AngleRight from '@components/icons/AngleRight';
import AngleUp from '@components/icons/AngleUp';
import Bell from '@components/icons/Bell';
import Check from '@components/icons/Check';
import Comments from '@components/icons/Comments';
import Envelope from '@components/icons/Envelope';
import Gear from '@components/icons/Gear';
import Heart from '@components/icons/Heart';
import Home from '@components/icons/Home';
import Info from '@components/icons/Info';
import Magnifier from '@components/icons/Magnifier';
import Minus from '@components/icons/Minus';
import Play from '@components/icons/Play';
import Plus from '@components/icons/Plus';
import Spinner from '@components/icons/Spinner';
import Times from '@components/icons/Times';
import Trash from '@components/icons/Trash';
import User from '@components/icons/User';
import { ReactElement } from 'react';

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
