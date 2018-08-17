import React from 'react';
import { shallow } from 'enzyme';
import SocialLinks from '@components/Blog/SocialLinks';

describe('<SocialLinks />', () => {
  it('renders without crashing', () => {
    const c = shallow(<SocialLinks />);
    expect(c.exists());
  });

  it('renders a root component', () => {
    const c = shallow(<SocialLinks/>);
    expect(c.find('#root').length).toEqual(1);
  });

  /*it('renders sharable links when passed slug', () => {
    const slug = 'slug';
    const c = shallow(<SocialLinks slug={slug} />);
    expect(c.find('#twitter').prop('to')).toEqual('https://twitter.com/intent/tweet?url=https://marketprotocol.io/blog/post/slug&via=MarketProtocol');
  });*/
});
