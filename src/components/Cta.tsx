import React from 'react';
import { Button, Col, Icon, Row } from 'antd';
import styled from 'styled-components';
import MarketSubscriberForm from './MarketSubscriberForm';
import { MarketHeader } from '@src/Styles';
import { device, size } from '@src/breakpoints';
import EmailConstant from '@constants/email';

interface Props {
  bg?: string;
  beforeIcon?: string;
  text?: string;
  afterIcon?: boolean;
  onlyShowSubscribeButton?: boolean;
}

interface CtaState {
  subscriptionPopUpVisible: boolean;
}

export const SectionWrapper = styled.section`
  background: #f0f0f0;
  padding: 70px 70px;

  @media ${device.mobileS} and (max-width: ${size.tablet}) {
    padding: 70px 30px 0px 30px;
  }
`;

const ButtonContainer = styled(Col)`
  width: 90%;
  margin: 0 auto;

  @media ${device.mobileS} and (max-width: ${size.tablet}) {
    width: 90%;
    padding: 0px;
    margin-bottom: 70px;
  }
`;

export const emailLink = `mailto:${
  EmailConstant.PARTNERS_EMAIL.email
}?subject=${EmailConstant.PARTNERS_EMAIL.subject}&body=${
  EmailConstant.PARTNERS_EMAIL.body
}`;

class Cta extends React.Component<Props, CtaState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      subscriptionPopUpVisible: false
    };
  }

  render() {
    const { subscriptionPopUpVisible } = this.state;
    const {
      bg,
      beforeIcon = '',
      onlyShowSubscribeButton,
      text,
      afterIcon = true
    } = this.props;

    if (onlyShowSubscribeButton) {
      return (
        <div style={{ width: '100%', height: '100%' }}>
          <Button
            onClick={() => this.setState({ subscriptionPopUpVisible: true })}
            type="primary"
            id="subscribe-button"
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: afterIcon ? 'space-between' : 'center',
              padding: afterIcon || beforeIcon ? '' : '0 4rem',
              width: afterIcon || beforeIcon ? '100%' : ''
            }}
          >
            {!!beforeIcon && (
              <img
                alt="join mailing list"
                src={beforeIcon}
                style={{ marginRight: '10px', width: '19px' }}
              />
            )}
            {text || `Join our Newsletter${' '}`}
            {afterIcon && (
              <Icon
                type="arrow-right"
                style={{ position: 'absolute', top: '35%', right: '15px' }}
              />
            )}
          </Button>

          <MarketSubscriberForm
            onCancel={() => this.setState({ subscriptionPopUpVisible: false })}
            visible={subscriptionPopUpVisible}
          />
        </div>
      );
    }

    return (
      <SectionWrapper
        id="subscribe"
        style={{
          background: bg
        }}
      >
        <MarketSubscriberForm
          onCancel={() => this.setState({ subscriptionPopUpVisible: false })}
          visible={subscriptionPopUpVisible}
        />
        <Row type="flex" justify="center">
          <Col xs={24} md={12} lg={9} xl={6}>
            <ButtonContainer>
              <MarketHeader
                align="center"
                style={{ fontSize: '24px', marginBottom: '30px' }}
              >
                Join our Newsletter
              </MarketHeader>
              <Button
                onClick={() =>
                  this.setState({ subscriptionPopUpVisible: true })
                }
                id="subscribe-button"
                type="primary"
                style={{ width: '100%', textAlign: 'left' }}
              >
                Click To Subscribe{' '}
                <Icon
                  type="arrow-right"
                  style={{ position: 'absolute', top: '35%', right: '15px' }}
                />
              </Button>
            </ButtonContainer>
          </Col>
          <Col xs={24} md={12} lg={9} xl={6}>
            <ButtonContainer>
              <MarketHeader
                align="center"
                style={{ fontSize: '24px', marginBottom: '30px' }}
              >
                Become a Partner
              </MarketHeader>
              <Button
                href={emailLink}
                id="email-button"
                type="primary"
                style={{ width: '100%', textAlign: 'left' }}
              >
                Email Us{' '}
                <Icon
                  type="arrow-right"
                  style={{ position: 'absolute', top: '35%', right: '15px' }}
                />
              </Button>
            </ButtonContainer>
          </Col>
        </Row>
      </SectionWrapper>
    );
  }
}
export default Cta;
