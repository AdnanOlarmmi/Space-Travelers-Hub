import React from 'react';
import {
  BrowserRouter as Router,
  Routes,

} from 'react-router-dom';
import Header from './Header';

const App = () => (
  <Router>
    <Header />
    <Routes />
  </Router>
);

export default App;
