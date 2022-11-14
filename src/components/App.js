import React from 'react';
import {
  BrowserRouter as Router,
  Routes, Route,

} from 'react-router-dom';
import Header from './Header';
import Rockets from './Rockets';
import Missions from './Missions';
import MyProfile from './MyProfile';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/myprofile" element={<MyProfile />} />
    </Routes>
  </Router>
);

export default App;
