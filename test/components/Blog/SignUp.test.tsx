import React from 'react';
import { shallow } from 'enzyme';
import SignUp from '@components/Blog/SignUp';

describe('<SignUp />', () => {
  it('renders without crashing', () => {
    const c = shallow(<SignUp />);
    expect(c.exists());
  });

  it('renders a root component', () => {
    const c = shallow(<SignUp />);
    expect(c.find('#root').length).toEqual(1);
  });
});
