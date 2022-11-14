import React from 'react';

const Missions = () => (
  <main className="missions">
    <h1>Missions</h1>
    <div className="tables flex-row">
      <table>
        <thead>Mission</thead>
        <tbody>
          <tr>Telstar</tr>
          <tr>SES</tr>
          <tr>AsisSat</tr>
          <tr>ABS</tr>
        </tbody>
      </table>
      <table>
        <thead>Description</thead>
        <tbody>
          <tr>SpaceX will launch the Telstar </tr>
          <tr>SES-16 is a geostationary communications </tr>
          <tr>AsiaSat 9 is a geostationary communications satellite </tr>
          <tr>ABS-3A is a geostationary communications satellite</tr>
        </tbody>
      </table>
      <table>
        <thead>Status</thead>
        <tbody>
          <tr>Active Member</tr>
          <tr>NOT A MEMBER</tr>
          <tr>Active Member</tr>
          <tr>NOT A MEMBER</tr>
        </tbody>
      </table>
    </div>
  </main>
);

export default Missions;
