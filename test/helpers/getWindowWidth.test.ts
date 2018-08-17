import getWindowWidth from '@src/helpers/getWindowWidth';

describe('getWindowWidth Util', () => {
  it('gives window width', () => {
    expect(getWindowWidth()).to.equal(window.innerWidth);
  });
  it('gives window width', () => {
    window.innerWidth = null;
    expect(getWindowWidth()).to.equal(document.documentElement.clientWidth);
  });
});
