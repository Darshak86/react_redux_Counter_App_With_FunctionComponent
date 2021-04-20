import React from 'react';
import CounterApp from './src/CounterApp';
import {Provider} from 'react-redux';
import {store} from '../App/redux/store/store';

const App = (props) => {
  return (
    <Provider store={store}>
      <CounterApp />
    </Provider>
  );
};

export default App;
