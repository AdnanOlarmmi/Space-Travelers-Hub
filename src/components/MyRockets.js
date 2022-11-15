import React from "react";
import { useSelector } from 'react-redux';

const MyRockets = () => {
    const rockets = useSelector((state) => state.rocketReducer.rockets);

    let rsvdRocket = rockets.filter((rocket) => rocket.reserved === true);
    return (
  <section className="myrocktes">
   <h3>My Rockets</h3>
    <ul>
        {rsvdRocket.map((rocket)=><li>{rocket.name}</li>)} 
    </ul>   
  </section>
)};

export default MyRockets;