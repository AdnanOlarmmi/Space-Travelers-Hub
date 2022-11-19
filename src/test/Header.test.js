import Header from '../components/Header';

describe('Header', () => {
  it('render Header Components', () => {
    expect(Header).toMatchSnapshot();
  });
});
