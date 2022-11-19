import React from 'react';
import render from './Rockets.test';
import Missions from '../components/Rockets';

describe('MyRocketss', () => {
  it('render My Rockets Components', () => {
    render(<Missions />);
    expect(Missions).toMatchSnapshot();
  });
});
