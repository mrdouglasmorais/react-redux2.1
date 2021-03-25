import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import store from './store';

import AboutUs from './components/AboutUs';
import Home from './components/Home';

import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <>
    <Provider store={store}>
      <Home />
      <AboutUs />
      <ToastContainer />
    </Provider>
    </>
  );
}

export default App;