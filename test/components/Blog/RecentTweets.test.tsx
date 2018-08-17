import React from 'react';
import { shallow, mount } from 'enzyme';
import RecentTweets from '@components/Blog/RecentTweets';
import { Timeline } from 'react-twitter-widgets'

describe('<RecentTweets />', () => {
  const dataSource = {
    sourceType: 'timeline',
    screenName: 'marketprotocol'
  };

  const options = {
    username: 'MARKETProtocol',
    height: 400,
    chrome: ['nofooter', 'noheader', 'noborders'],
  }

  it('renders without crashing', () => {
    const c = shallow(<RecentTweets />);
    expect(c.exists());
  });

  it('renders a root component', () => {
    const c = shallow(<RecentTweets />);
    expect(c.find('#root').length).toEqual(1);
  });
  
  it('renders a recent a timeline', () => {
    const c = mount(<RecentTweets />);
    const t = mount(<Timeline dataSource={dataSource} options={options} />)
    expect(t.exists())
  });

  it('renders a recent a timeline', () => {
    const c = mount(<RecentTweets />);
    const t = mount(<Timeline dataSource={dataSource} options={options} />)
    expect(t.exists());
    expect(t.props().dataSource.screenName).to.equal('marketprotocol');
    expect(t.props().options.height).to.equal(400);
  });
});
