import React from 'react';
import { useSelector } from 'react-redux';


const MyProfile = () => {
    const rockets = useSelector((state) => state.rocketReducer.rockets);

    let rsvdRocket = rockets.filter((rocket) => rocket.reserved === true);
    return (
  <main className="myprofile">
   <h2>My profile</h2>
        <ul>
           {rsvdRocket.map((rocket)=><li>{rocket.name}</li>)} 
        </ul>
        
  </main>
)};

export default MyProfile;
