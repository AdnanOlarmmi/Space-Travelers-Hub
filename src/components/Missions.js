import React from 'react';
import OneMission from '../../components/OneMission/OneMission';
import styles from './mission.module.css';

const Mission = () => {
  const missions = [
    {
      id: 1,
      name: 'Thaicom',
      description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      id: 2,
      name: 'Telstar',
      description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      id: 3,
      name: 'Iridium NEXT',
      description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
  ];

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
            <OneMission name={item.name} description={item.description} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Mission;
