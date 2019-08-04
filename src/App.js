import React, { Fragment } from 'react';

// Import Plugins
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import Pages
import Main from './pages/main';

const App = () => (
  <Fragment>
    <ToastContainer autoClose={3000} />
    <Main />
  </Fragment>
);

export default App;
