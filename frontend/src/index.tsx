import React from 'react';
import ReactDOM from 'react-dom';

import 'assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.css';

import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import App from 'App';

ReactDOM.render(
  <React.StrictMode>
    <NavBar/>      
    <App />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);