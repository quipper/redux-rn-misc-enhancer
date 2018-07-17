import { mockStore } from '../../test/storeHelper';
import { appStateChangeAction } from '../action';

describe('appStateAction', () => {
  let store = mockStore();

  describe('appStateChangeAction', () => {
    it('dispatches action', async () => {
      const payload = 'active';
      await store.dispatch(appStateChangeAction(payload));
      expect(store.getActions().length).toBe(1);
      expect(store.getActions()[0]).toEqual({
        type: 'APP_STATE_CHANGE',
        payload,
      });
    });
  });

  afterEach(() => {
    store = mockStore(); // need to reset mock store
  });
});
