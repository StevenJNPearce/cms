import React from 'react';
import styled from 'styled-components';
import SocialLinks from './SocialLinks';

const RootWrap = styled.div`
  > #root {
    background: #ffffff;
    box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.05);
    padding: 30px;
    width: 100%;
    display: block;
    text-align: center;

    #title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 25px;
    }
  }
`;

export default () => {
  return (
    <RootWrap>
      <div id="root">
        <h2 id="title">Follow Us</h2>
        <SocialLinks size={50} />
      </div>
    </RootWrap>
  );
};
