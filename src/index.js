import React from 'react';
import ReactDOM from 'react-dom';
import MainWithRedux from './MainMejorado';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(<Provider store = {store}>
  <MainWithRedux/>
  </Provider>, document.getElementById('root'));