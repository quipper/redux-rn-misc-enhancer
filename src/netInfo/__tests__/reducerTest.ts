import { ConnectionInfo } from 'react-native';
import { default as reducer, initialState } from '../reducer';

describe('reducer', () => {
  it('should return isConnected payload as a state', () => {
    const payload = true;
    expect(
      reducer(initialState, { type: 'CONNECTIVITY_CHANGE', payload }),
    ).toEqual({
      isConnected: payload,
      info: undefined,
    });
  });

  it('should return isConnected payload as a state', () => {
    const payload = true;
    expect(
      reducer(
        { isConnected: false, info: undefined },
        { type: 'CONNECTIVITY_CHANGE', payload },
      ),
    ).toEqual({
      isConnected: payload,
      info: undefined,
    });
  });

  it('should not return isConnected payload as a state', () => {
    const payload = true;
    expect(
      reducer(
        { isConnected: false, info: undefined },
        { type: 'CONNECTION_CHANGE', payload },
      ),
    ).toEqual({
      isConnected: false,
      info: undefined,
    });
  });

  it('should return info payload as a state', () => {
    const payload: ConnectionInfo = {
      type: 'wifi',
      effectiveType: '4g',
    };
    expect(
      reducer(initialState, { type: 'CONNECTION_CHANGE', payload }),
    ).toEqual({
      isConnected: undefined,
      info: payload,
    });
  });

  it('should return info payload as a state', () => {
    const payload: ConnectionInfo = {
      type: 'wifi',
      effectiveType: '4g',
    };
    expect(
      reducer(initialState, { type: 'CONNECTION_CHANGE', payload }),
    ).toEqual({
      isConnected: undefined,
      info: payload,
    });
  });

  it('should return info payload as a state', () => {
    const payload: ConnectionInfo = {
      type: 'wifi',
      effectiveType: '4g',
    };
    expect(
      reducer(
        {
          isConnected: undefined,
          info: {
            type: 'wifi',
            effectiveType: '3g',
          },
        },
        { type: 'CONNECTION_CHANGE', payload },
      ),
    ).toEqual({
      isConnected: undefined,
      info: payload,
    });
  });

  it('should not return info payload as a state', () => {
    const payload: ConnectionInfo = {
      type: 'wifi',
      effectiveType: '4g',
    };
    expect(
      reducer(initialState, { type: 'CONNECTIVITY_CHANGE', payload }),
    ).toEqual({
      isConnected: undefined,
      info: undefined,
    });
  });
});
