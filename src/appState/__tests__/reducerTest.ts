import { default as reducer } from '../reducer';

describe('reducer', () => {
  it('should return payload when state and payload is different', () => {
    expect(
      reducer(
        { state: 'active' },
        { type: 'APP_STATE_CHANGE', payload: 'inactive' },
      ),
    ).toEqual({
      state: 'inactive',
    });
  });

  it('should return state when state and payload is the same', () => {
    expect(
      reducer(
        { state: 'inactive' },
        { type: 'APP_STATE_CHANGE', payload: 'inactive' },
      ),
    ).toEqual({
      state: 'inactive',
    });
  });
});
