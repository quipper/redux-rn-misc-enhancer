import { ConnectionInfo } from 'react-native';
import { Action } from 'redux';

export type NetInfoActionType = 'CONNECTIVITY_CHANGE' | 'CONNECTION_CHANGE';

export type NetInfoAction = ConnectivityChangeAction | ConnectionChangeAction;

interface ConnectivityChangeAction extends Action {
  type: NetInfoActionType;
  payload: boolean;
}

interface ConnectionChangeAction extends Action {
  type: NetInfoActionType;
  payload: ConnectionInfo;
}

export function connectivityChangeAction(
  isConnected: boolean,
): ConnectivityChangeAction {
  return { type: 'CONNECTIVITY_CHANGE', payload: isConnected };
}

export function connectionChangeAction(
  info: ConnectionInfo,
): ConnectionChangeAction {
  return { type: 'CONNECTION_CHANGE', payload: info };
}
