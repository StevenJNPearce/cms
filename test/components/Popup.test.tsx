import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-static';
import telegram from '@images/telegram.svg';
import Cta from '@components/Cta';

import Popup, {
  PopupArt,
  PopupText,
  PopupButton,
  PopupButtonText,
  PopupClose
} from '../../src/components/Popup';

describe('<Popup />', () => {
  it('renders null if popupDisplay is false', () => {
    const component = shallow(<Popup />);
    expect(component.getElement()).to.be.null;
  });

  it('renders Popup content if popupDisplay is true', () => {
    const component = shallow(<Popup />);
    component.setState({ popupDisplay: true });
    expect(component.find(PopupArt)).to.have.length(1);
    expect(
      component
        .find(PopupText)
        .render()
        .html()
    ).to.equal('Chat with us');
    expect(component.find(Link).props().to).to.equal(
      'https://t.me/Market_Protocol_Chat'
    );
    expect(component.find(PopupButton).props().type).to.equal('primary');
    expect(
      component
        .find(PopupButtonText)
        .render()
        .text()
    ).to.equal('Join our Telegram');
    expect(component.find('img').props().src).to.equal(telegram);
  });

  it('renders Cta with text', () => {
    const component = shallow(<Popup />);
    component.setState({ popupDisplay: true });
    const ctaButton = component.find(Cta).props();
    expect(ctaButton.afterIcon).to.equal(false)
    expect(ctaButton.text).to.equal('Join Our Email List');
    expect(ctaButton.onlyShowSubscribeButton).to.equal(true)
  });


  it('sets popupDisplay to true on componentDidMount after a timeout', () => {
    jest.useFakeTimers();
    const component = shallow(<Popup />);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    jest.runAllTimers();
    expect(component.state().popupDisplay).to.equal(true);
    jest.useRealTimers();
  });

  it('sets popupDisplay to false on click of PopupClose', () => {
    const component = shallow(<Popup />);
    component.setState({ popupDisplay: true });
    const PopupCloseComponent = component.find(PopupClose);
    PopupCloseComponent.simulate('click');
    expect(component.state().popupDisplay).to.equal(false);
  });
});
