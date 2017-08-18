import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDsnk6mrxOtcxGCsdBHDsvFqEEvH2tE2pE',
      authDomain: 'manager-4487d.firebaseapp.com',
      databaseURL: 'https://manager-4487d.firebaseio.com',
      projectId: 'manager-4487d',
      storageBucket: 'manager-4487d.appspot.com',
      messagingSenderId: '29510709547'
    };

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App;
