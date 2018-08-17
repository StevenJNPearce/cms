import React from 'react';
import { shallow } from 'enzyme';
import Subscribe from '@components/Blog/Subscribe';

describe('<Subscribe />', () => {
  it('renders without crashing', () => {
    const c = shallow(<Subscribe />);
    expect(c.exists());
  });

  it('renders a root component', () => {
    const c = shallow(<Subscribe />);
    expect(c.find('#root').length).toEqual(1);
  });
});
