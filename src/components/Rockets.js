import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from '../redux/configureStore';
import { fetchRockets } from '../redux/rockets/rocketSlice';
import Rocket from './Rocket';


const Rockets = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchRockets())
    }, []);
    
    const rockets = useSelector( (state)=> state.rocketReducer.rockets);
    

    return (<main className='rocket__container flex-column'>
        {rockets.map(rocket=> <Rocket key={rocket.id} description={rocket.description} name={rocket.name} image={rocket.image} status={rocket.status}/>)}
        </main>
  )};

export default Rockets;
