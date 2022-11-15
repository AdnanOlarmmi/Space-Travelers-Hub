import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const onClick = (e) => {
        let currentRoute = e.target.className;
        let parentNode = e.target.parentNode.parentNode.childNodes;
        for(let i=0; i<parentNode.length; i++) {
            if(parentNode[i].childNodes[0].className===currentRoute) {
                parentNode[i].childNodes[0].classList.add('currentRoute');
            } else {
                parentNode[i].childNodes[0].classList.remove('currentRoute');
            }
        }
    }
    
    return(
<header className="flex-row">
<div className="flex-row-center">
    <img className="icon" src="https://cdn-icons-png.flaticon.com/512/3212/3212608.png" alt="Space Travelers Hub Logo" />
    <h1>
    Space Travelers&apos; Hub
    </h1>
</div>
<nav>
    <ul onClick={onClick} className="nav flex-row">
        <li >
            <Link to="/ " className="nav__rockets">Rockets</Link>
        </li>
        <li>
            <Link to="/missions" className="nav__missions" id='rocket-nav'>Missions</Link>
        </li>
        <li>
            <Link to="/myprofile" className="nav__profile">My Profile</Link>
        </li>
    </ul>
</nav>
</header>
)};

export default Header;
