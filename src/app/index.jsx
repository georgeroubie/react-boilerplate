import Menu from './routing/Menu';
import Routing from './routing/Routing';
import { AppProvider } from './state/Context';

const App = () => (
  <AppProvider>
    <Menu />
    <Routing />
  </AppProvider>
);

export default App;
