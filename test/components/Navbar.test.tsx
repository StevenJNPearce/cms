import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-static';
import logoImg from '@images/logo_light.svg';

import Navbar, { StyledMenu, Logo } from '@components/Navbar';

describe('<Navbar />', () => {
  it('renders StyledMenu', () => {
    const component = shallow(<Navbar />);
    expect(component.find(StyledMenu)).to.have.length(1);
  });

  it('renders Logo with a Link', () => {
    const component = shallow(<Navbar />);
    expect(component.find(Logo)).to.have.length(1);
    const logoLink = component.find(Logo).find(Link);
    expect(logoLink.props().to).to.equal('https://marketprotocol.io');
    const logoImageProps = logoLink.find('img').props();

    expect(logoImageProps.alt).to.equal('Decentralized derivatives and exchange');
    expect(logoImageProps.width).to.equal('100%');
    expect(logoImageProps.src).to.equal(logoImg);
  });

  it('sets the state for current key on click of Logo', () => {
    const component = shallow(<Navbar />);
    const logoLink = component.find(Logo).find(Link);
    logoLink.simulate('click');
    expect(component.state().current).to.equal('https://marketprotocol.io');
  });

  it('renders Popover', () => {
    const component = shallow(<Navbar />);
    expect(component.find('Popover')).to.have.length(1);
    const getPopupContainerFn = component.find('Popover').props()
      .getPopupContainer;
    const triggerNode = { parentNode: { node: 'div' } };
    expect(getPopupContainerFn(triggerNode)).to.deep.equal({ node: 'div' });
  });
});
