import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function start(initialState) {
  ReactDOM.render(
    <React.StrictMode>
      <App initialState={initialState} />
    </React.StrictMode>,
    document.getElementById('root'),
  );
}

window.app = { start };
