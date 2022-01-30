import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './store';
import { loadProductsAsync } from './reducers/catalogSlice';
import App from './App';
import './index.css';

function start(initialState) {
  store.dispatch(loadProductsAsync(initialState?.dealers));

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
}

window.app = { start };
