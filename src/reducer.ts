import { AppState, AppStateStatus } from 'react-native';
import { Action } from 'redux';

export interface AppStateState {
  state: AppStateStatus;
}

interface IncrementAction extends Action {
  type: string;
  payload: AppStateStatus;
}

const initialState: AppStateState = {
  state: AppState.currentState,
};

export default function reducer(
  _: AppStateState = initialState,
  action: IncrementAction,
): AppStateState {
  return { state: action.payload };
}
