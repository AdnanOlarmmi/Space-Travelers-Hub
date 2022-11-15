import React from 'react';

const Rocket = (props) => {

    return(
    <section className='rocket flex-row'>
        <img src='' alt= 'a'
         className='rocket__img' />
        <div className='rocket__info flex-column'>
            <h4 className='rocket__heading'>nn</h4>
            <p className='rocket__description'><span className='hide'>Reserved</span>lad</p>
            <button className='rocket__reserve' onClick={onClick}>Reserve Rocket</button>
        </div>
    </section>
)}

export default Rocket;