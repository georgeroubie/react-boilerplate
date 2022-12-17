import { useState } from 'react';
import Icons, { iconList } from '../../components/icons/Icons';
import Subtitle from '../../components/typography/Subtitle';

const IconsPresentation = () => {
  const [iconType, setIconType] = useState('AngleDown');

  return (
    <>
      <Subtitle>Available icons</Subtitle>
      <label htmlFor="icon-type">Icon type:</label>
      <select name="icon-type" id="icon-type" value={iconType} onChange={({ target }) => setIconType(target.value)}>
        {Object.keys(iconList).map((type, index) => (
          <option value={type} key={`${type}_${index}`}>
            {type}
          </option>
        ))}
      </select>
      <br /> <br />
      <Icons width="40px" height="40px" type={iconType} />
    </>
  );
};

export default IconsPresentation;
