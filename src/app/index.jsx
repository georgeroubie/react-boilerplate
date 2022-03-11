import Menu from './routing/Menu';
import Routing from './routing/Routing';
import { AppProvider } from './state/Context';
import Theme from './theme/Theme';

const App = () => (
  <AppProvider>
    <Theme>
      <Menu />
      <Routing />
    </Theme>
  </AppProvider>
);

export default App;
