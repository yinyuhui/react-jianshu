import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Globalstyle } from './style';

const APP = (
    <div>
        <Globalstyle />
        <App>
            
        </App>
    </div>
)

ReactDOM.render(APP, document.getElementById('root'));