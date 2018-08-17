import React from 'react';
import { mount } from 'enzyme';
import { Form } from 'antd';

import MarketSubscriberForm from '@components/MarketSubscriberForm';

describe('<MarketSubscriberForm />', () => {
  it('renders h2 with header text', () => {
    const component = mount(<MarketSubscriberForm visible />);
    expect(component.find('h2')).to.have.length(1);
    expect(
      component
        .find('h2')
        .render()
        .text()
    ).to.equal('Join Our Newsletter');
  });

  it('renders form', () => {
    const component = mount(<MarketSubscriberForm visible />);
    const formComponent = component.find(Form);
    const formComponentProps = formComponent.props();
    expect(formComponent).to.have.length(1);
    expect(formComponentProps.action).to.equal(
      'https://marketprotocol.us17.list-manage.com/subscribe/post'
    );
    expect(formComponentProps.method).to.equal('post');
  });

  it('renders two hidden input elements', () => {
    const component = mount(<MarketSubscriberForm visible />);
    const hiddenInputs = component.find('input[type="hidden"]');
    expect(hiddenInputs).to.have.length(2);
    expect(hiddenInputs.at(0).props().value).to.equal(
      'ef1f265a21b4aae9002084ee3'
    );
    expect(hiddenInputs.at(0).props().name).to.equal('u');
    expect(hiddenInputs.at(1).props().value).to.equal('491f750dec');
    expect(hiddenInputs.at(1).props().name).to.equal('id');
  });

  it('adds validation for first name', () => {
    const component = mount(<MarketSubscriberForm visible />);
    const firstNameInput = component.find('input[name="MERGE1"]');
    firstNameInput.simulate('change', { target: { value: '  ' }});
    expect(
      component
      .find('.ant-form-explain')
      .render()
      .text()
    ).to.equal('Please input your first name!');
  });

  it('adds validation for last name', () => {
    const component = mount(<MarketSubscriberForm visible />);
    const lastNameInput = component.find('input[name="MERGE2"]');
    lastNameInput.simulate('change', { target: { value: '  ' } });
    expect(
      component
        .find('.ant-form-explain')
        .render()
        .text()
    ).to.equal('Please input your last name!');
  });

  it('adds validation for email field', () => {
    const component = mount(<MarketSubscriberForm visible />);
    const emailInput = component.find('input[name="MERGE0"]');
    emailInput.simulate('change', { target: { value: 'hello' } });
    expect(
      component
        .find('.ant-form-explain')
        .render()
        .text()
    ).to.equal('Please input a correct Email');
    emailInput.simulate('change', { target: { value: '' } });
    expect(
      component
        .find('.ant-form-explain')
        .render()
        .text()
    ).to.equal('Please input an Email!');
  });

  it('displays validation on submitting form without entering value', () => {
    const preventDefaultMock = jest.fn();
    const component = mount(<MarketSubscriberForm visible />);
    const formComponent = component.find(Form);
    expect(component.find('.ant-form-explain')).to.have.length(0);
    formComponent.simulate('submit', { preventDefault: preventDefaultMock });
    expect(component.find('.ant-form-explain')).to.have.length(3);
    expect(preventDefaultMock.mock.calls.length).to.equal(1);
  });

  it('does not display validation on submitting form if valid value is entered', () => {
    const preventDefaultMock = jest.fn();
    const component = mount(<MarketSubscriberForm visible />);
    const formComponent = component.find(Form);
    const emailInput = component.find('input[name="MERGE0"]');
    const firstNameInput = component.find('input[name="MERGE1"]');
    const lastNameInput = component.find('input[name="MERGE2"]');
    expect(component.find('.ant-form-explain')).to.have.length(0);
    emailInput.simulate('change', { target: { value: 'trial@gmail.com' } });
    firstNameInput.simulate('change', { target: { value: 'firstname' } });
    lastNameInput.simulate('change', { target: { value: 'lastname' } });
    formComponent.simulate('submit', { preventDefault: preventDefaultMock });
    expect(component.find('.ant-form-explain')).to.have.length(0);
    expect(preventDefaultMock.mock.calls.length).to.equal(0);
  });
});
