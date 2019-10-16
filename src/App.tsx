// @flow

import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from 'src/store';
import TestNavigator from '@/Test/navigators/TestNavigator';

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <TestNavigator />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
