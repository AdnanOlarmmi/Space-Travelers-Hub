import React from 'react';
import render from './Rockets.test';
import MyMissions from '../components/MyMissions';

describe('MyMissions', () => {
  it('render My Missions Components', () => {
    render(<MyMissions />);
    expect(MyMissions).toMatchSnapshot();
  });
});
