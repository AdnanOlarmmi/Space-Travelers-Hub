import React from 'react';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rocketSlice';

const Rocket = (props) => {
  const { rocketInfo } = props;
  const {
    id, name, description, image, reserved,
} = rocketInfo;
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(reserveRocket(id));
  };

  return (
    <section className="rocket flex-row">
      <img src={image} alt={name} className="rocket__img" />
      <div className="rocket__info flex-column">
        <h4 className="rocket__heading">{name}</h4>
        <p className="rocket__description">
          {reserved && <span>Reserved</span>}
          {description}
        </p>
        <button type="button" className={`rocket__reserve ${reserved && 'rocket__cancel'}`} onClick={onClick}>{reserved ? 'Cancel Reservation' : 'Reserve'}</button>
      </div>
    </section>
  );
};

export default Rocket;
