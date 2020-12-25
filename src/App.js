import React from 'react';
import Navigator from './navigation/navigator';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import './App.css';

function App() {
  return (
    <Provider store={store} className="App">
      <Navigator/>
    </Provider>
  );
}

export default App;
