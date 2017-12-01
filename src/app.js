import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PortfolioApp from './components/PortfolioApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render((
  <BrowserRouter>
    <PortfolioApp />
  </BrowserRouter>
), document.getElementById('app'));
