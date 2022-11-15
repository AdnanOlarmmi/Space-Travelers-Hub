import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketSlice';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();

  window.onload = () => {
    dispatch(fetchRockets());
  }

  const rockets = useSelector((state) => state.rocketReducer.rockets);

  return (
    <main className="rocket__container flex-column">
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          rocketInfo = {rocket}
        />
      ))}
    </main>
  );
};

export default Rockets;
