const getMissions = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const Missions = await response.json();
  return Missions;
};

export default getMission;