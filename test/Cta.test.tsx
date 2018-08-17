import React from 'react';
import { mount } from 'enzyme';
import Cta from '@components/Cta.tsx';
import MarketSubscriberForm from '@components/MarketSubscriberForm';


it('render without crash', () => {
  mount(<Cta />);
});

it('click <click to subscribe> button show the modal, then click x button dismiss it', () => {
  const wrapper = mount(<Cta/>);
  expect(wrapper.find(MarketSubscriberForm).props().visible).toEqual(false);
  wrapper.find('button').simulate('click');
  expect(wrapper.find(MarketSubscriberForm).props().visible).toEqual(true);
  wrapper.find('.ant-modal-close-x').simulate('click');
  expect(wrapper.find(MarketSubscriberForm).props().visible).toEqual(false);
});

