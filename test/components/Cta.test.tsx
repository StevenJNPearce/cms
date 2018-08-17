import React from 'react';
import { shallow } from 'enzyme';
import { Button, Col, Icon, Row, Form } from 'antd';
import MarketSubscriberForm from '@components/MarketSubscriberForm';
import { MarketHeader } from '@src/Styles';
import EmailConstant from '@constants/email';

import Cta, { SectionWrapper } from '@components/Cta';

describe('<Cta />', () => {
  it('renders SectionWrapper', () => {
    const component = shallow(<Cta />);
    expect(component.find(SectionWrapper)).to.have.length(1);
    expect(component.find(SectionWrapper).props().id).to.equal('subscribe');
  });

  it('renders one Row and two Col components', () => {
    const component = shallow(<Cta />);
    expect(component.find(Row)).to.have.length(1);
    expect(component.find(Col)).to.have.length(2);
  });

  it('renders MarketSubscriberForm on first column', () => {
    const component = shallow(<Cta />);
    const marketSubscriberFormComponent = component.find(MarketSubscriberForm).at(0);
    expect(marketSubscriberFormComponent).to.have.length(1);
  });

  it('renders MarketText and Button on second column', () => {
    const component = shallow(<Cta />);
    const secondColComponent = component.find(Col).at(1);
    expect(
      secondColComponent
        .find(MarketHeader)
        .render()
        .text()
    ).to.equal('Become a Partner');
    const emailLink = `mailto:${EmailConstant.PARTNERS_EMAIL.email}?subject=${
      EmailConstant.PARTNERS_EMAIL.subject
    }&body=${EmailConstant.PARTNERS_EMAIL.body}`;
    expect(secondColComponent.find(Button).props().href).to.equal(emailLink);
  });

  it('renders just the subscribe button if onlyShowSubscribeButton prop is present', () => {
    const component = shallow(<Cta onlyShowSubscribeButton />);
    expect(component.find(Button).length).toEqual(1);
    expect(component.find(Button).render().text().trim()).toEqual("Join our Newsletter");
    expect(component.find(Button).find(Icon).length).toEqual(1);
    expect(component.find(MarketSubscriberForm).length).toEqual(1);
  });

  it('renders just the subscribe button with updated text', () => {
    const component = shallow(<Cta onlyShowSubscribeButton text="Updated text" />);
    expect(component.find(Button).render().text().trim()).toEqual("Updated text");
  });

  it('renders beforeIcon if beforeIcon props are passed', () => {
    const component = shallow(<Cta onlyShowSubscribeButton beforeIcon="src" />);
    expect(component.find('img').length).toEqual(1);
  });

  it('should not render afterIcon if afterIcon props are set to false', () => {
    const component = shallow(<Cta onlyShowSubscribeButton afterIcon={false} />);
    expect(component.find(Icon).length).toEqual(0);
  });

  it('updates state.subscriptionPopUpVisible when subscribe button is clicked', () => {
    const component = shallow(<Cta />);
    const origState = component.state();
    component.find('#subscribe-button').props().onClick();
    const newState = component.state();
    expect(origState.subscriptionPopUpVisible === false && newState.subscriptionPopUpVisible === true).toEqual(true);

    // do the same test with onlyShowSubscribeButton prop
    const component2 = shallow(<Cta onlyShowSubscribeButton />);
    const origState2 = component2.state();
    component2.find('#subscribe-button').props().onClick();
    const newState2 = component2.state();
    expect(origState2.subscriptionPopUpVisible === false && newState2.subscriptionPopUpVisible === true).toEqual(true);

  });

  it('updates state.subscriptionPopUpVisible when subscription form is cancelled', () => {
    const component = shallow(<Cta />);
    const origState = component.state();
    component.find('#subscribe-button').props().onClick();
    const midState = component.state();
    component.find(MarketSubscriberForm).props().onCancel();
    const newState = component.state();
    expect(origState.subscriptionPopUpVisible === false && midState.subscriptionPopUpVisible === true && newState.subscriptionPopUpVisible === false).toEqual(true);

    // do the same test with onlyShowSubscribeButton prop
    const component2 = shallow(<Cta onlyShowSubscribeButton />);
    const origState2 = component2.state();
    component2.find('#subscribe-button').props().onClick();
    const midState2 = component2.state();
    component2.find(MarketSubscriberForm).props().onCancel();
    const newState2 = component2.state();
    expect(origState2.subscriptionPopUpVisible === false && midState2.subscriptionPopUpVisible === true && newState2.subscriptionPopUpVisible === false).toEqual(true);
  });
});
