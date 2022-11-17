const getMission = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const Mission = await response.json();
  return Mission;
};

export default getMission;
