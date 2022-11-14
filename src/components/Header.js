import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="flex-row">
    <div className="flex-row-center">
      <img className="icon" src="https://cdn-icons-png.flaticon.com/512/3212/3212608.png" alt="Space Travelers Hub Logo" />
      <h5>
        Space Travelers&apos; Hub
      </h5>
    </div>
    <nav>
      <ul className="nav flex-row">
        <Link to='/'>
        <li className='nav__rockets'>Rockets</li>
        </Link>
        <Link to='/missions'>
        <li>Missions</li>
        </Link>
        <Link to='/myprofile'>
        <li className='nav__profile'>My Profile</li>
        </Link>  
      </ul>
    </nav>
  </header>
);

export default Header;
