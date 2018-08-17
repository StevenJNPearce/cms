import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import { Form, Input } from 'antd';

import NewsletterSubscribeBanner, {
  StyledCol,
  SectionTitle,
  LearnAboutTeamWrapper
} from '@components/NewsletterSubscribeBanner';


describe('<NewsletterSubscribeBanner />', () => {
  let component: typeof NewsletterSubscribeBanner;

  beforeEach(() => {
    component = mount(
      <MemoryRouter><NewsletterSubscribeBanner/></MemoryRouter>
    );
  });

  it('renders without crashing', () => {
    expect(component.find('NewsletterSubscribeBannerComponent').length).toEqual(
      1
    );
  });

  describe('layout', () => {
    it('renders 2 StyledCol', () => {
      expect(component.find(StyledCol).length).toBe(2);
    });

    it('renders 2 SectionTitle\'s with the correct text', () => {
      expect(component.find(SectionTitle).length).toBe(2);
      expect(
        component
          .find(SectionTitle)
          .at(0)
          .text()
      ).toEqual('Join our Newsletter');
      expect(
        component
          .find(SectionTitle)
          .at(1)
          .text()
      ).toEqual('Learn about our team');
    });
  });

  describe('Newsletter signup form', () => {
    it('renders a Form with the correct action url', () => {
      expect(component.find(Form).length).toBe(1);
      expect(
        component
          .find(Form)
          .at(0)
          .props().action
      ).toEqual('https://marketprotocol.us17.list-manage.com/subscribe/post');
    });

    it('renders a text Input', () => {
      expect(component.find(Form).find(Input).length).toBe(1);
      expect(
        component
          .find(Form)
          .find(Input)
          .at(0)
          .props().type
      ).toEqual('email');
    });

    it('indicates an email error', () => {
      component.find('form').simulate('submit');
      expect(
        component
          .find('.ant-form-explain')
          .last()
          .text()
      ).toEqual('Please input an Email!');
    });
  });

  describe('Learn more about team', () => {
    it('renders a link to team page', () => {
      expect(component.find(LearnAboutTeamWrapper).find('a').length).toBe(1);
      expect(
        component
          .find(LearnAboutTeamWrapper)
          .find('a')
          .props().href
      ).toEqual('/team');
    });
  });
});
