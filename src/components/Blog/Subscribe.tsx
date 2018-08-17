import React from 'react';
import styled from 'styled-components';
import Cta from '@components/Cta';

const RootWrap = styled.div`
  > #root {
    background: #ffffff;
    box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.05);
    padding: 30px;
    display: flex;
    text-align: left;
    flex-direction: column;
    justify-content: space-between;

    #title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 0px;
    }

    #subtitle {
      color: #646469;
      margin-top: 10px;
      font-size: 14px;
    }
  }
`;

const CtaContainer = styled.div`
  text-align: center;
`;

export default () => {
  return (
    <RootWrap>
      <div id="root">
        <h2 id="title">Sign up for our newsletter</h2>
        <p id="subtitle">
          Receive our newsletter to stay on top of the latest posts.
        </p>
        <CtaContainer>
          <Cta
            onlyShowSubscribeButton={true}
            id="button"
            text="Subscribe"
            afterIcon={false}
          />
        </CtaContainer>
      </div>
    </RootWrap>
  );
};
