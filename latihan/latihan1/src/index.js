import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HelloDunia from './container/StateFullComponent';
import HelloWorld from './components/HelloComponent';
import reportWebVitals from './reportWebVitals';
// stateless functional component


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <HelloWorld />
  <HelloDunia />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
