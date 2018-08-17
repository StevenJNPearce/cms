import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-static';

import telegram from '@images/telegram.svg';
import twitter from '@images/twitter.svg';
import medium from '@images/medium.svg';
import github from '@images/github.svg';

const SocialLinks = () => {
  return (
    <div>
      <Button size="small" type="primary" style={{ marginRight: '10px' }}>
        <Link to="https://t.me/Market_Protocol_Chat" target="_blank">
          <img alt="telegram" src={telegram} width="80%" />
        </Link>
      </Button>
      <Button size="small" type="primary" style={{ marginRight: '10px' }}>
        <Link to="https://twitter.com/MarketProtocol/" target="_blank">
          <img alt="twitter" src={twitter} width="80%" />
        </Link>
      </Button>
      <Button size="small" type="primary" style={{ marginRight: '10px' }}>
        <Link to="https://medium.com/market-protocol" target="_blank">
          <img alt="medium" src={medium} width="80%" />
        </Link>
      </Button>
      <Button size="small" type="primary" style={{ marginRight: '10px' }}>
        <Link to="https://github.com/MARKETProtocol/" target="_blank">
          <img alt="github" src={github} width="80%" />
        </Link>
      </Button>
    </div>
  );
};

export { SocialLinks as default };
