import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mission from './Mission';
import { fetchMissions } from '../redux/missions/missionSlice';
import styles from '../App.module.css';

const Missions = () => {
  const { missions } = useSelector((state) => ({ ...state.missionReducer }));
  const dispatch = useDispatch();

  if (missions.length === 0) {
    dispatch(fetchMissions());
  }

  return (
    <table className={styles.mission_table_wrapper}>
      <thead>
        <tr className={styles.mission_table_row}>
          <th className={styles.mission_table_head}>Mission</th>
          <th className={styles.mission_table_head}>Description</th>
          <th className={styles.mission_table_head}>Status</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((item) => (
          <tr className={styles.mission_table_rows} key={item.id}>
            <Mission
              name={item.name}
              description={item.description}
              id={item.id}
              status={item.status}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Missions;
