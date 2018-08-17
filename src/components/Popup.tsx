import React from 'react';
import { Button, Icon } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-static';
import EmailConstant from '@constants/email';
//
import telegram from '@images/telegram.svg';
import mail from '@images/mail.svg';
import Cta from '@components/Cta';
import { device } from '@src/breakpoints';

export const PopupArt = styled.div`
  /*layout*/
  background-color: #fff;
  font-size: 1rem;
  width: 18rem;
  text-align: center;

  /*positioning*/
  bottom: 1.5rem;
  right: 1.5rem;
  padding: 30px;
  position: fixed;

  /*material*/
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 10;
`;

/*text stuff*/
export const PopupText = styled.div`
  color: #000000;
  margin-bottom: 15px;
  font-weight: 600;
`;

export const PopupButton = styled(Button)`
  width: 14rem;
`;

export const PopupButtonText = styled.div`
  color: #212121;
  padding: 0.3rem;
  img {
    fill: #fefefe;
  }
`;

export const PopupClose = styled(Icon)`
  position: absolute;
  top: 0.9rem;
  right: 1rem;
  cursor: pointer;
  &:hover {
    color: #26e1c1;
  }
`;

export const CtaWrapper = styled.div`
  width: 14rem;
  margin: 0 auto;
  margin-top: 10px;

  @media ${device.mobileS} and (max-width: 767px) {
    display: none;
  }
`;

export const emailLink = `mailto:${
  EmailConstant.PARTNERS_EMAIL.email
}?subject=${EmailConstant.PARTNERS_EMAIL.subject}&body=${
  EmailConstant.PARTNERS_EMAIL.body
}`;

interface PopupState {
  popupDisplay: boolean;
}

class Popup extends React.Component<{}, PopupState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      popupDisplay: false
    };
    this.closePopupDisplay = this.closePopupDisplay.bind(this);
  }
  componentDidMount() {
    setTimeout(
      function() {
        this.setState({
          popupDisplay: true
        });
      }.bind(this),
      1000
    );
  }
  closePopupDisplay() {
    this.setState({
      popupDisplay: false
    });
  }
  render() {
    if (this.state.popupDisplay) {
      return (
        <PopupArt>
          <PopupText>Chat with us</PopupText>
          <Link to="https://t.me/Market_Protocol_Chat" target="_blank">
            <PopupButton type="primary">
              <PopupButtonText>
                <img
                  alt="crypto trading telegram"
                  src={telegram}
                  height="100%"
                  style={{ marginRight: '15px' }}
                />
                Join our Telegram
              </PopupButtonText>
            </PopupButton>
          </Link>
          <CtaWrapper>
            <Cta
              beforeIcon={mail}
              onlyShowSubscribeButton
              text="Join Our Email List"
              afterIcon={false}
            />
          </CtaWrapper>
          <PopupClose type="close" onClick={this.closePopupDisplay} />
        </PopupArt>
      );
    }
    return null;
  }
}
export default Popup;
