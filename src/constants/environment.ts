const EnvironmentConstant = {
  ENVIRONMENTS: {
    PRODUCTION: 'production',
    TEST: 'test'
  },
  PROD: {
    GOOGLE_TAG_MANAGER: 'GTM-TN3ZVBH',
    URL: 'marketprotocol.io'
  },
  STAGING: {
    GOOGLE_TAG_MANAGER: 'GTM-WDMKD33',
    URL: 'dev.website.marketprotocol.io'
  },
  getNodeEnv: () => process.env.NODE_ENV
};

export default EnvironmentConstant;
