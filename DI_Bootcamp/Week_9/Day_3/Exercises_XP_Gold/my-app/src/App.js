import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Login from './components/Login';
import Logout from './components/Logout';
import AuthStatus from './components/AuthStatus';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>User Authentication</h1>
        <AuthStatus />
        <Login />
        <Logout />
      </div>
    </Provider>
  );
}

export default App;
