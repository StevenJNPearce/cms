import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { Link } from 'react-static';

import twitter from '@images/twitter-white.svg';
import facebook from '@images/facebook-white.svg';
import medium from '@images/medium-white.svg';

const RootWrap = styled.div`
  > #root {
    text-align: center;
    display: inline-block;

    button {
      margin-left: 10px;
      border: none;
      background: black;

      :hover {
        background: rgba(0, 0, 0, 0.5);
      }
    }
  }
`;

interface Props {
  size?: number;
  slug?: string;
  external?: boolean;
}

const isClient = typeof window !== 'undefined';

const constructTwitter = (slug: string, external: boolean) => {
  const base = 'https://twitter.com/intent/tweet?url=';
  const marketProtocolUrl = 'https://marketprotocol.io';
  const via = '&via=MarketProtocol';
  return external ? base + slug + via : base + marketProtocolUrl + slug + via;
};

const constructFacebook = (slug: string, external: boolean) => {
  const base = 'https://www.facebook.com/sharer/sharer.php?u=';
  const marketProtocolUrl = 'https://marketprotocol.io/blog/post';
  return external ? base + slug : base + marketProtocolUrl + slug;
};

const SocialLinks = ({ size = 30, slug, external }: Props) => {
  const buttonStyle = {
    height: size,
    width: size
  };

  const twitterUrl = constructTwitter(slug, external);
  const secondaryUrl = constructFacebook(slug, external);

  const secondaryIcon = slug ? facebook : medium;

  const openLink = (e: React.FormEvent<{}>, url: string) => {
    e.preventDefault();

    if (isClient) {
      window.open(url, '_blank');
    }
  };

  return (
    <RootWrap>
      <div id="root">
        <Button
          size="small"
          type="primary"
          style={buttonStyle}
          onClick={e => openLink(e, twitterUrl)}
        >
          <img alt="twitter" src={twitter} width="80%" />
        </Button>
        <Button
          size="small"
          type="primary"
          style={buttonStyle}
          onClick={e => openLink(e, secondaryUrl)}
        >
          <img alt="fb" src={secondaryIcon} width="80%" />
        </Button>
      </div>
    </RootWrap>
  );
};

export { SocialLinks as default };
