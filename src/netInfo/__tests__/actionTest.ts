import { ConnectionInfo } from 'react-native';
import {
  connectionChangeAction,
  connectivityChangeAction,
} from '../../netInfo/action';
import { mockStore } from '../../test/storeHelper';

describe('netInfoAction', () => {
  let store = mockStore();

  describe('connectivityChangeAction', () => {
    it('dispatches action', async () => {
      const payload = true;
      await store.dispatch(connectivityChangeAction(payload));
      expect(store.getActions().length).toBe(1);
      expect(store.getActions()[0]).toEqual({
        type: 'CONNECTIVITY_CHANGE',
        payload,
      });
    });
  });

  describe('connectionChangeAction', () => {
    it('dispatches action', async () => {
      const payload: ConnectionInfo = {
        type: 'wifi',
        effectiveType: '4g',
      };
      await store.dispatch(connectionChangeAction(payload));
      expect(store.getActions().length).toBe(1);
      expect(store.getActions()[0]).toEqual({
        type: 'CONNECTION_CHANGE',
        payload,
      });
    });
  });

  afterEach(() => {
    store = mockStore(); // need to reset mock store
  });
});
