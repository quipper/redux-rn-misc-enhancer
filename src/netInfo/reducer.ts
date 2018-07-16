import { ConnectionInfo } from 'react-native';
import { NetInfoAction } from './action';

export interface NetInfoState {
  isConnected: boolean | undefined;
  info: ConnectionInfo | undefined;
}

export const initialState: NetInfoState = {
  isConnected: undefined,
  info: undefined,
};

export default function reducer(
  state: NetInfoState = initialState,
  action: NetInfoAction,
): NetInfoState {
  switch (action.type) {
    case 'CONNECTIVITY_CHANGE':
      if (typeof action.payload === 'boolean') {
        if (state.isConnected === action.payload) {
          return state;
        } else {
          return { info: state.info, isConnected: action.payload };
        }
      }
      return state;
    case 'CONNECTION_CHANGE':
      if (typeof action.payload !== 'boolean') {
        if (state.info === action.payload) {
          return state;
        } else {
          return { info: action.payload, isConnected: state.isConnected };
        }
      }
      return state;
    default:
      return state;
  }
}
