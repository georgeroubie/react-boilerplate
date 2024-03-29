import { ReactElement } from 'react';
import BaseIcon from './BaseIcon';

type Props = {
  className?: string;
  width?: string;
  height?: string;
};

const AngleDownIcon = ({ className, width, height }: Props): ReactElement => (
  <BaseIcon className={className} width={width} height={height} viewBox="0 0 320 512">
    <path
      fill="currentColor"
      d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z"
    />
  </BaseIcon>
);

export default AngleDownIcon;
