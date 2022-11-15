import React from 'react';

const Rocket = (props) => {
    const {description, name, image, status} = props;

  

    return(
    <section className='rocket flex-row'>
        <img src={image} alt={name} className='rocket__img' />
        <div className='rocket__info flex-column'>
            <h4 className='rocket__heading'>{name}</h4>
            <p className='rocket__description'><span className='hide'>Reserved</span>{description}</p>
            <button className='rocket__reserve'>Reserve Rocket</button>
        </div>
    </section>
)}

export default Rocket;