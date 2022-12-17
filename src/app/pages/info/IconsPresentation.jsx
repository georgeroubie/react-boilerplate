import { useState } from 'react';
import styled from 'styled-components';
import Icons, { iconList } from '../../components/icons/Icons';
import Subtitle from '../../components/typography/Subtitle';
import SelectInput from '../../components/ui/SelectInput';

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme: { spacing } }) => spacing.large};
`;

const IconsPresentation = () => {
  const [iconType, setIconType] = useState('Heart');

  const iconsOptions = Object.keys(iconList).map((type) => {
    return {
      value: type,
      label: type,
    };
  });

  return (
    <>
      <Subtitle>Available icons</Subtitle>
      <Controls>
        <SelectInput id="icon-type" selectedValue={iconType} options={iconsOptions} onChange={setIconType}>
          Icon type:
        </SelectInput>
        <Icons width="32px" height="32px" type={iconType} />
      </Controls>
    </>
  );
};

export default IconsPresentation;
