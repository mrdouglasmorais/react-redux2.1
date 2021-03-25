import { Provider } from 'react-redux';

import store from './store';

import AboutUs from './components/AboutUs';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <>
    <Provider store={store}>
      <Home />
      <AboutUs />
    </Provider>
    </>
  );
}

export default App;