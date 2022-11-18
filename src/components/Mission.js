import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveMission } from '../redux/missions/missionSlice'
import styles from '../App.module.css';

const Mission = (props) => {
  const { name, description, id, status } = props;

  const dispatch = useDispatch();

  return (
    <>
      <td className={styles.nameData}>{ name }</td>
      <td className={styles.onemission_description}>{ description }</td>
      <td className={styles.notmember}>
        {(status && (<span >Member</span>))}
        {(!status && (<span >Not A Member</span>))}
        </td>
      <td className={styles.joinmission}>
        {(!status && (<button onClick={() => dispatch(reserveMission(id))} type="button">Join Mission</button>))}
        {(status && (<button onClick={() => dispatch(reserveMission(id))} type="button">Cancel Mission</button>))}
      </td>
    </>
  );
};

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Mission;
