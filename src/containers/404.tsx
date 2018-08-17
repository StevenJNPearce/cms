import React from 'react';

import image404 from '@images/asset_9.svg';
import { MarketHeader, TeamDivWithResponsiveWidth } from '@styledComponents';

export const headerText =
  'Something went wrong and we cannot find what you\'re looking for...';
export const homepageUrl = 'https://marketprotocol.io/';
export const docsUrl = 'https://docs.marketprotocol.io/';
export const faqUrl = 'https://docs.marketprotocol.io/#faq-general';

class Page404 extends React.Component {
  render() {
    return (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <TeamDivWithResponsiveWidth style={{ padding: '40px 0px 20px 0px' }}>
          <div style={{ textAlign: 'center' }}>
            <MarketHeader>{headerText}</MarketHeader>
            <br />
            <img alt="404" src={image404} />
          </div>

          <TeamDivWithResponsiveWidth style={{ padding: '40px 0px 20px 0px' }}>
            <MarketHeader style={{ textAlign: 'center' }}>
              Get back on track
            </MarketHeader>
            <ul>
              <li>
                Try heading back to our <a href={homepageUrl}>homepage</a>
              </li>
              <li>
                Check out our <a href={faqUrl}>FAQ</a>
              </li>
              <li>
                Read our <a href={docsUrl}>docs</a>
              </li>
            </ul>
          </TeamDivWithResponsiveWidth>
        </TeamDivWithResponsiveWidth>
      </div>
    );
  }
}

export default Page404;
