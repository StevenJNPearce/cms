import React from 'react';
import { mount } from 'enzyme';
import SocialLinks from '@components/SocialLinks';
import { Button } from 'antd';
import { Link } from 'react-static';

describe('<SocialLinks />', () => {
  it('renders without crashing', () => {
    const component = mount(<SocialLinks />);
    expect(component.find('SocialLinks').length).toEqual(1);
  });

  it('renders an icon link to four different social providers: telegram, twitter, medium, and github', () => {
    const component = mount(<SocialLinks />);
    expect(component.find(Button).length).toEqual(4);
    expect(component.find(Link).length).toEqual(4);
    expect(component.find('img').length).toEqual(4);
  });

  it('renders the telegram, twitter, medium, and github links for MARKETProtocol social profiles', () => {
    const component = mount(<SocialLinks />);
    expect(component.find(Link).length).toEqual(4);
    expect(
      component
        .find(Link)
        .at(0)
        .props().to
    ).toEqual('https://t.me/Market_Protocol_Chat');
    expect(
      component
        .find(Link)
        .at(1)
        .props().to
    ).toEqual('https://twitter.com/MarketProtocol/');
    expect(
      component
        .find(Link)
        .at(2)
        .props().to
    ).toEqual('https://medium.com/market-protocol');
    expect(
      component
        .find(Link)
        .at(3)
        .props().to
    ).toEqual('https://github.com/MARKETProtocol/');
  });

  it;
});
