import React from 'react';
import MyRockets from './MyRockets';
import MyMissions from './MyMissions';

const MyProfile = () => (
  <table className="flex-row tables">
    <MyRockets />
    <MyMissions />
  </table>
);

export default MyProfile;
