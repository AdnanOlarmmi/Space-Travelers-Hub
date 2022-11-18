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
        <tr>
          {filterMissions.map((mission) => <tr key={mission.id}>{mission.name}</tr>)}
        </tr>
      </tbody>
    </table>
  );
};

export default MyMissions;
