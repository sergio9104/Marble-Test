import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Root from 'Root';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
);

serviceWorker.unregister();
