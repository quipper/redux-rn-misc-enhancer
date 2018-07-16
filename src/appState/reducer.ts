import { AppState, AppStateStatus } from 'react-native';
import { AppStateAction } from './action';

export interface AppStateState {
  state: AppStateStatus;
}

export const initialState: AppStateState = {
  state: AppState.currentState,
};

export default function reducer(
  state: AppStateState = initialState,
  action: AppStateAction,
): AppStateState {
  switch (action.type) {
    case 'APP_STATE_CHANGE':
      if (state.state === action.payload) {
        return state;
      } else {
        return { state: action.payload };
      }
    default:
      return state;
  }
}
