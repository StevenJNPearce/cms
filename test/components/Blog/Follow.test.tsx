import React from 'react';
import { shallow } from 'enzyme';
import Follow from '@components/Blog/Follow';

describe('<Follow />', () => {
  it('renders without crashing', () => {
    const c = shallow(<Follow />);
    expect(c.exists());
  });

  it('renders an div component', () => {
    const c = shallow(<Follow />);
    expect(c.find('div').length).toEqual(1);
  });
});
