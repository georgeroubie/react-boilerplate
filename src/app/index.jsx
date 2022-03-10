import Menu from './routing/Menu';
import Routing from './routing/Routing';
import { AppProvider } from './state/Cntext';

const App = () => (
  <AppProvider>
    <Menu />
    <Routing />
  </AppProvider>
);

export default App;
