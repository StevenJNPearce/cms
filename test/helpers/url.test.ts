import { getLocationOrigin } from '../../src/helpers/url';

describe('URL Helper', () => {
  describe('getLocationOrigin', () => {
    it('returns the location', () => {
      const result = getLocationOrigin();
      expect(result).to.equal(window.location.origin);
    });
  });
});
