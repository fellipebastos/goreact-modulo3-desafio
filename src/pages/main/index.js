import React from 'react';
import { Provider } from 'react-redux';

import store from '../../store';

// Global Styles
import GlobalStyle from '../../styles/global';

// Import Components
import UserList from '../../components/UserList';
import Modal from '../../components/Modal';
import Map from '../../components/Map';

const Main = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Modal />
    <UserList />
    <Map />
  </Provider>
);

export default Main;
