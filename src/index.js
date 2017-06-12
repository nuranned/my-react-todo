import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Router routes={routes} history={browserHistory}/>
 document.getElementById('root')
);
registerServiceWorker();
