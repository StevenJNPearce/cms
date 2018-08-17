import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

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
      font-size: 14px;
    }

    #button {
      width: 100%;
    }
  }
`;

export default () => {
  return (
    <RootWrap>
      <div id="root">
        <h2 id="title">Join Market Protocol</h2>
        <p id="subtitle">Create an account today and let’s get started.</p>
        <Button id="button" type="primary">
          Sign Up Now
        </Button>
      </div>
    </RootWrap>
  );
};
