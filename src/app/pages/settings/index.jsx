import { useContext } from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import Title from '../../components/typography/Title';
import Checkbox from '../../components/ui/Checkbox';
import { AppContext } from '../../state/Context';
import { DARK_THEME_KEY } from '../../theme/themes/dark';
import { LIGHT_THEME_KEY } from '../../theme/themes/light';

const Settings = () => {
  const { state, setTheme } = useContext(AppContext);
  const { theme } = state;

  function handleOnChange(checked) {
    setTheme(checked ? DARK_THEME_KEY : LIGHT_THEME_KEY);
  }

  return (
    <PageWrapper>
      <Title>Settings</Title>
      <Checkbox label="Dark theme" checked={theme === DARK_THEME_KEY} onChange={handleOnChange} />
    </PageWrapper>
  );
};

export default Settings;
