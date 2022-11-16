import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionSlice';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(fetchMissions());
  }, []);

  const missions = useSelector((state) => state.missionReducer.missions);

  return (
    <main className="rocket__container flex-column">
      {missions.map((mission) => (
        <Missions
          key={mission.id}
          description={mission.description}
          name={mission.name}
          status={mission.status}
        />
      ))}
    </main>
  );
};

export default Missions;
