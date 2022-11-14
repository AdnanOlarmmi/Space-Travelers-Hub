import React from 'react';

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
        <li>Rocket</li>
        <li>Missions</li>
        <li>My Profile</li>
      </ul>
    </nav>
  </header>
);

export default Header;
