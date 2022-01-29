import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { loadProductsAsync } from './reducers/catalogSlice';

function start(initialState) {
  store.dispatch(loadProductsAsync(initialState.dealers));

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
}

window.app = { start };
