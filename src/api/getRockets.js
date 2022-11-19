const getRockets = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const rockets = await response.json();
  return rockets;
};

export default getRockets;
