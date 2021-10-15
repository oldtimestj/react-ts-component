/*
 * @Description: 
 * @version: 
 * @Author: tjwang
 * @Date: 2021-10-11 08:42:32
 * @LastEditors: tjwang
 * @LastEditTime: 2021-10-13 08:58:11
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
