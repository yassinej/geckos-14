import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import AppRouter from './components/AppRouter';
import registerServiceWorker from './services/registerServiceWorker';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
