import React from 'react';
import ReactDOM from 'react-dom/client';
// import { NdelWorld } from './EndWorld';

import './main.css'
import { CounterApp } from './CounterApp'
//import { Practice } from './practice';
//import { func } from 'prop-types';

 

// function EndWorl() {

//  return (<h1>EL verdader N del world</h1>);

// }


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode> 
     < CounterApp /> 
    </React.StrictMode>
)