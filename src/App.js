import React from 'react';
import Count from './Components/Count'
import Test from './Components/Test'

import { Provider } from 'react-redux'
import store from './store/index'

const App = () => {

  return (
    <Provider store={store} >
      <div className="container">
        <h2 className="mb-5">React Redux Crush Course</h2>
        <Count />
        <Test />
      </div>
    </Provider>
  );
};

export default App;