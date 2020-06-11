import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./reduxs/configureStore"

import App from './App';

ReactDOM.render(<App store={configureStore()} />, document.getElementById('root'));
