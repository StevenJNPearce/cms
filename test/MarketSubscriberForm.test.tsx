import React from 'react';
import { mount } from 'enzyme';
import MarketSubscriberForm from '@components/MarketSubscriberForm';

it('render without crash', () => {
  mount(<MarketSubscriberForm visible />);
});

it('indicate lack of first name error', () => {
  const wrapper = mount(<MarketSubscriberForm visible />);
  wrapper.find('form').simulate('submit');
  expect(
    wrapper
      .find('.ant-form-explain')
      .at(0)
      .text()
  ).toEqual('Please input your first name!');
});

it('indicate lack of last name error', () => {
  const wrapper = mount(<MarketSubscriberForm visible />);
  wrapper.find('form').simulate('submit');
  expect(
    wrapper
      .find('.ant-form-explain')
      .at(1)
      .text()
  ).toEqual('Please input your last name!');
});

it('indicate email error', () => {
  const wrapper = mount(<MarketSubscriberForm visible />);
  wrapper.find('form').simulate('submit');
  expect(
    wrapper
      .find('.ant-form-explain')
      .last()
      .text()
  ).toEqual('Please input an Email!');
});
