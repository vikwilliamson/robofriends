import React from 'react';
import ReactDOM from 'react-dom/client';

//===Components===
import App from './containers/App';

//===Styles===
import './styles/index.css';
import 'tachyons';

//===Utilities===
import reportWebVitals from './utilities/reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
