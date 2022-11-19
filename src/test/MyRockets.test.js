import React from 'react';
import render from './Rockets.test';
import MyRockets from '../components/MyRockets';

describe('MyRocketss', () => {
  it('render My Rockets Components', () => {
    render(<MyRockets />);
    expect(MyRockets).toMatchSnapshot();
  });
});
