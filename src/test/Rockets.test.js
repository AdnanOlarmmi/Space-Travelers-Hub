import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rockets from '../components/Rockets';

const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('Rockets', () => {
  it('render My Rockets Components', () => {
    render(<Rockets />);
    expect(Rockets).toMatchSnapshot();
  });
});

export default render;
