import React from 'react';
import styled from 'styled-components';
import { Timeline } from 'react-twitter-widgets';

const RootWrap = styled.div`
  > #root {
    background: #ffffff;
    box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.05);
    padding: 30px;
    width: 100%;
    display: block;

    #title {
      font-size: 18px;
      font-weight: bold;
      line-height: 21px;
    }
  }
`;

export default () => {
  return (
    <RootWrap>
      <div id="root">
        <h2 id="title">Recent Tweets</h2>
        <Timeline
          dataSource={{
            screenName: 'marketprotocol',
            sourceType: 'timeline'
          }}
          options={{
            chrome: ['nofooter', 'noheader', 'noborders'],
            height: '400',
            username: 'MARKETProtocol'
          }}
        />
      </div>
    </RootWrap>
  );
};
