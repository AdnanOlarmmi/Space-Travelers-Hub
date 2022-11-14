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
            <tr>
                <thead>Description</thead>
                <tbody>
                    <tr>SpaceX will launch the Telstar 19 VANTAGE satellite for Telesat</tr>
                    <tr>SES-16 is a geostationary communications satellite that will provide video, data and broadband communications services to North America, the Middle East, Africa and Europe.</tr>
                    <tr>AsiaSat 9 is a geostationary communications satellite that will provide video, data and broadband communications services to Asia and the Pacific region.</tr>
                    <tr>ABS-3A is a geostationary communications satellite that will provide video, data and broadband communications services to Asia and the Pacific region.</tr>
                </tbody>
            </tr>
        </table>
        <table>
            <tr>
                <thead>Status</thead>
                <tbody>
                    <tr>Active Member</tr>
                    <tr>NOT A MEMBER</tr>
                    <tr>Active Member</tr>
                    <tr>NOT A MEMBER</tr>
                </tbody>
            </tr>
        </table>
        </div>
    </main>
)

export default Missions;
