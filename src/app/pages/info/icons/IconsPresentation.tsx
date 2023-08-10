import Icons, { IconListItem } from '@components/icons/Icons';
import Subtitle from '@components/typography/subtitle';
import SelectInput from '@components/ui/select-input';
import { ReactElement, useState } from 'react';
import styles from './IconsPresentation.module.scss';

const IconsPresentation = (): ReactElement => {
  const [iconType, setIconType] = useState<IconListItem>(IconListItem.Heart);

  const iconsOptions = Object.keys(IconListItem).map((type) => {
    return {
      value: type,
      label: type,
    };
  });

  return (
    <>
      <Subtitle>Available icons</Subtitle>
      <div className={styles.controls}>
        <SelectInput id="icon-type" selectedValue={iconType} options={iconsOptions} onChange={setIconType}>
          Icon type:
        </SelectInput>
        <Icons width="32px" height="32px" type={iconType} />
      </div>
    </>
  );
};

export default IconsPresentation;