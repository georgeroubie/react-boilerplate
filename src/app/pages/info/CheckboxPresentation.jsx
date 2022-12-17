import { useMemo, useState } from 'react';
import styled from 'styled-components';
import Subtitle from '../../components/typography/Subtitle';
import _Checkbox from '../../components/ui/Checkbox';

const Checkbox = styled(_Checkbox)`
  margin-bottom: ${({ theme: { spacing } }) => spacing.normal};
`;

const CheckboxPresentation = () => {
  const [checked, setChecked] = useState(false);

  const label = useMemo(() => {
    if (checked) {
      return 'I am checked';
    }
    return 'I am not checked';
  }, [checked]);

  return (
    <>
      <Subtitle>Checkbox component</Subtitle>
      <Checkbox label={label} checked={checked} onChange={setChecked} />
      <Checkbox label="I am disabled and not checked" checked={false} disabled />
      <Checkbox label="I am disabled and checked" checked disabled />
    </>
  );
};

export default CheckboxPresentation;
