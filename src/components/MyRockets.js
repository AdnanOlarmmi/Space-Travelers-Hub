import React from "react";
import { useSelector } from 'react-redux';

const MyRockets = () => {
    const rockets = useSelector((state) => state.rocketReducer.rockets);

    let rsvdRocket = rockets.filter((rocket) => rocket.reserved === true);
    return (
  <table className="myrocktes">
   <thead>My Rockets</thead>
    <tbody>
        {rsvdRocket.map((rocket)=><tr>{rocket.name}</tr>)} 
    </tbody>   
  </table>
)};

export default MyRockets;