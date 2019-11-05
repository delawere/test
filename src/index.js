import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';
import { WebsocketMockAdapter } from './core/emmiter';

const mocks = new WebsocketMockAdapter(console.log, 3000)
console.log(mocks.getUsers())

ReactDOM.render(<App/>, document.getElementById('root'));
