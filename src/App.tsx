import React from 'react';
import { Redirect, Router } from 'react-static';
import { Helmet } from 'react-helmet';
import { injectGlobal } from 'styled-components';
import { hot } from 'react-hot-loader';
import Routes from 'react-static-routes';
import { Layout } from 'antd';

import MarketFooter from '@components/Footer';
import Navbar from '@components/Navbar';
import Popup from '@components/Popup';
import { getLocationOrigin } from '@helpers/url';
import EnvironmentConstant from '@constants/environment';

injectGlobal`
  #root {
    min-width: 100%;
    min-height: 100%;
    display: flex;
  }
`;

const { Content } = Layout;

const isClient = typeof window !== 'undefined';
const isProduction =
  EnvironmentConstant.getNodeEnv() ===
  EnvironmentConstant.ENVIRONMENTS.PRODUCTION;

const getGtmId = () => {
  const origin = getLocationOrigin();

  if (origin.indexOf(EnvironmentConstant.STAGING.URL) !== -1) {
    return EnvironmentConstant.STAGING.GOOGLE_TAG_MANAGER;
  } else if (origin.indexOf(EnvironmentConstant.PROD.URL) !== -1) {
    return EnvironmentConstant.PROD.GOOGLE_TAG_MANAGER;
  }

  return '';
};

class App extends React.Component {
  componentDidMount() {
    if (isClient && isProduction) {
      const noscript = document.createElement('noscript');

      noscript.innerHTML =
        '<iframe ' +
        'src="https://www.googletagmanager.com/ns.html?id=' +
        getGtmId() +
        '" ' +
        'height="0" width="0" style="display: none; visibility: hidden">' +
        '</iframe>';

      document.body.insertBefore(noscript, document.body.firstChild);
    }
  }

  render() {
    return (
      <Router>
        <Layout style={{ width: '100%' }}>
          <Helmet>
            <title>
              MARKET Protocol - Decentralized trading on the Ethereum blockchain
              - cryptocurrency derivatives, futures, and hedging
            </title>
            <meta
              name="keywords"
              content="trustless trading, decentralized derivatives,
              decentralized futures, cryptocurrency derivatives,
              cryptocurrency futures, crypto shorting, crypto hedging,
              altcoin, bitcoin, ethereum, market protocol ico"
            />
            <meta
              name="description"
              content="MARKET Protocol provides a secure, flexible,
              open source foundation for decentralized trading on the
              Ethereum blockchain"
            />
            {isClient &&
              isProduction && (
                <script type="text/javascript">{`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${getGtmId()}');
              `}</script>
              )}
          </Helmet>
          <Navbar />
          <Content style={{ background: '#FFFFFF', width: '100%' }}>
            <Redirect to={'/blog'} />
            <Routes />
          </Content>
          <Popup />
          <MarketFooter />
        </Layout>
      </Router>
    );
  }
}

export default hot(module)(App);
