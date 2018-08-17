import React from 'react';
import { shallow, mount } from 'enzyme';
import ProgressBar from '@components/Blog/ProgressBar';

describe('<ProgressBar />', () => {
  it('renders without crashing', () => {
    const c = shallow(<ProgressBar />);
    expect(c.exists());
  });

  it('renders progress div', () => {
    const c = shallow(<ProgressBar />);
    expect(c.find('#progress').length).toEqual(1);
  });
  
  it('scrolls without crashing', () => {
    const c = shallow(<ProgressBar />);
    const instance = c.instance();
    instance.onScroll();
  });

  it('unmounts without crashing', () => {
    const c = shallow(<ProgressBar />);
    c.unmount();
  });
});
