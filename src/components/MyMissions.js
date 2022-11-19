import React from 'react';
import { useSelector } from 'react-redux';

const MyMissions = () => {
  const missions = useSelector((state) => state.missionReducer.missions);

  const filterMissions = missions.filter((mission) => mission.status === true);
  return (
    <table className="mymissions">
      <thead>
        <th>My Missions</th>
      </thead>
      <tbody>
        {filterMissions.map((mission) => <tr key={mission.id}>{mission.name}</tr>)}
      </tbody>
    </table>
  );
};

export default MyMissions;
