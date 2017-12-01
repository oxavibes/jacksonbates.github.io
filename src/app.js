import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import PortfolioApp from './components/PortfolioApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render((
  <HashRouter>
    <PortfolioApp />
  </HashRouter>
), document.getElementById('app'));
