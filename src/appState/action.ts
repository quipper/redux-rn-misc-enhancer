import { AppStateStatus } from 'react-native';
import { Action } from 'redux';

export type AppStateActionType = 'APP_STATE_CHANGE';

export type AppStateAction = AppStateChangeAction;

interface AppStateChangeAction extends Action {
  type: AppStateActionType;
  payload: AppStateStatus;
}

export function appStateChangeAction(
  state: AppStateStatus,
): AppStateChangeAction {
  return { type: 'APP_STATE_CHANGE', payload: state };
}
