import React from 'react';

const MyProfile = () => (
  <main className="myprofile">
    <h1>My Profile</h1>
    <div className="tables flex-row">
      <table>
        <tbody>
          <thead>My Missions</thead>
          <tr>Telstar</tr>
          <tr>SES</tr>
          <tr>AsisSat</tr>
          <tr>ABS</tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <thead>My Rockets</thead>
          <tr>Falcon 1</tr>
          <tr>Falcon 9</tr>
          <tr>Falcon Heavy</tr>
          <tr>Starship</tr>
        </tbody>
      </table>
    </div>
  </main>
);

export default MyProfile;
