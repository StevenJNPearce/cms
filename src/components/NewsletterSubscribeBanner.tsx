import React from 'react';
import { Link } from 'react-static';
import { Button, Form, Icon, Input } from 'antd';
import styled from 'styled-components';
import { device, size } from '@src/breakpoints';
import { FormComponentProps } from 'antd/lib/form';

const NewsletterSubscribeBannerWrapper = styled.div`
  padding: 70px 20%;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${size.laptop}) {
    flex-wrap: wrap;
    padding: 70px 30px;
  }

  @media ${device.tablet} and (max-width: ${size.laptop}) {
    padding: 70px 5%;
  }
`;

export const StyledCol = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  flex: 1;

  @media (max-width: ${size.tablet}) {
    margin-top: 0;
    flex: 0 0 100%;
    margin-bottom: 40px;
    padding: 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 500;
  text-align: center;

  @media (max-width: ${size.laptop}) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;
export const JoinNewsletterWrapper = styled.div`
  input {
    border-radius: 25px;
    background-color: #f0f0f0;
    ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: #000;
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      color: #000;
    }
    ::-ms-input-placeholder {
      /* IE 10+ */
      color: #000;
    }
    ::-moz-placeholder {
      /* Firefox 18- */
      color: #000;
    }
  }
`;
export const LearnAboutTeamWrapper = styled.div`
  input {
    border-radius: 25px;
    background-color: #00e2c1;
    ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: #000;
      font-weight: 700;
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      color: #000;
      font-weight: 700;
    }
    ::-ms-input-placeholder {
      /* IE 10+ */
      color: #000;
      font-weight: 700;
    }
    ::-moz-placeholder {
      /* Firefox 18- */
      color: #000;
      font-weight: 700;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  input {
    padding-left: 20px;
    padding-right: 44px;
  }
`;

export const InputIconButton = styled(Button)`
  &.ant-btn.ant-btn-circle.ant-btn-lg {
    position: absolute;
    top: 2px;
    right: 2px;
    width: 44px;
    height: 44px;
  }
`;

class NewsletterSubscribeBannerComponent extends React.Component<
  FormComponentProps
> {
  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <NewsletterSubscribeBannerWrapper>
        <StyledCol>
          <JoinNewsletterWrapper>
            <SectionTitle>Join our Newsletter</SectionTitle>
            <Form
              action="https://marketprotocol.us17.list-manage.com/subscribe/post"
              onSubmit={e => {
                form.validateFields(errors => {
                  if (errors) {
                    e.preventDefault();
                  }
                });
              }}
              acceptCharset="utf-8"
              method="post"
            >
              <input type="hidden" name="u" value="ef1f265a21b4aae9002084ee3" />
              <input type="hidden" name="id" value="491f750dec" />
              <Form.Item>
                <InputWrapper style={{ display: 'flex' }}>
                  {getFieldDecorator('email', {
                    rules: [
                      {
                        message: 'Please input an Email!',
                        required: true
                      },
                      {
                        message: 'Please input a correct Email',
                        type: 'email'
                      }
                    ]
                  })(
                    <Input
                      name="MERGE0"
                      type="email"
                      placeholder="Enter your email"
                    />
                  )}
                  <InputIconButton
                    type="primary"
                    shape="circle"
                    size={'large'}
                    htmlType="submit"
                    icon="arrow-right"
                  />
                </InputWrapper>
              </Form.Item>
            </Form>
          </JoinNewsletterWrapper>
        </StyledCol>
        <StyledCol>
          <LearnAboutTeamWrapper>
            <SectionTitle>Learn about our team</SectionTitle>
            <Link to="/team">
              <Button
                size={'large'}
                style={{
                  alignItems: 'center',
                  backgroundColor: '#00E2C1',
                  color: '#000',
                  display: 'flex',
                  fontSize: 12,
                  fontWeight: 300,
                  justifyContent: 'space-between',
                  width: '100%'
                }}
              >
                <b>The minds behind MARKET Protocol</b>
                <Icon type="arrow-right" style={{ fontSize: 18 }} />
              </Button>
            </Link>
          </LearnAboutTeamWrapper>
        </StyledCol>
      </NewsletterSubscribeBannerWrapper>
    );
  }
}

const NewsletterSubscribeBanner = Form.create<FormComponentProps>()(
  NewsletterSubscribeBannerComponent
);

export default NewsletterSubscribeBanner;
