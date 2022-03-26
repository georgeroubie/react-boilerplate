import { useContext } from 'react';
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';
import { AppContext } from '../state/Context';
import { DARK_THEME_KEY } from '../theme/themes/dark';
import { LIGHT_THEME_KEY } from '../theme/themes/light';

const Selection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Checkbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const Label = styled.label`
  cursor: pointer;
`;

const Settings = () => {
  const { state, setTheme } = useContext(AppContext);
  const { theme } = state;
  const id = 'theme_selection';

  const handleOnChange = ({ target }) => {
    setTheme(target.checked ? DARK_THEME_KEY : LIGHT_THEME_KEY);
  };

  return (
    <PageWrapper>
      <h1>Settings</h1>
      <Selection>
        <Checkbox type="checkbox" id={id} name={id} checked={theme === DARK_THEME_KEY} onChange={handleOnChange} />
        <Label htmlFor={id}>Dark theme</Label>
      </Selection>
    </PageWrapper>
  );
};

export default Settings;
