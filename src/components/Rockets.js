import React from 'react';

const Rockets = () => (
    <div className="rockets">
        <h1>Rockets</h1>
        <div className="tables flex-row">
        <table>
            <thead>Rocket</thead>
            <tbody>
                <tr>Falcon 1</tr>
                <tr>Falcon 9</tr>
                <tr>Falcon Heavy</tr>
                <tr>Starship</tr>
            </tbody>
        </table>
        <table>
            <tr>
                <thead>Description</thead>
                <tbody>
                    <tr>Engine: Merlin 1D</tr>
                    <tr>Engine: Merlin 1D+Vacuum</tr>
                    <tr>Engine: Merlin 1D+Vacuum</tr>
                    <tr>Engine: Raptor</tr>
                </tbody>
            </tr>
        </table>
        <table>
            <tr>
                <thead>Status</thead>
                <tbody>
                    <tr>Active</tr>
                    <tr>Active</tr>
                    <tr>Active</tr>
                    <tr>Active</tr>
                </tbody>
            </tr>
        </table>
        </div>
    </div>
)

export default Rockets;