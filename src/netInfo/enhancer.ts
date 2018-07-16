import {
  ConnectionInfo,
  ConnectionType,
  NetInfo,
  Platform,
} from 'react-native';
import { Store } from 'redux';
import { connectionChangeAction, connectivityChangeAction } from './action';

export default () => (createStore: () => Store) => {
  const store = createStore();

  const handleConnectivityChange = (isConnected: boolean) => {
    store.dispatch(connectivityChangeAction(isConnected));
  };

  NetInfo.isConnected.addEventListener(
    'connectionChange',
    handleConnectivityChange,
  );

  // On Android the listener does not fire on startup
  if (Platform.OS === 'android') {
    NetInfo.isConnected.fetch().then(handleConnectivityChange);
  }

  // https://facebook.github.io/react-native/docs/netinfo#addeventlistener
  const handleConnectionChange = (info: ConnectionInfo | ConnectionType) => {
    if (typeof info === 'string') {
      return;
    }
    store.dispatch(connectionChangeAction(info));
  };

  NetInfo.addEventListener('connectionChange', handleConnectionChange);

  return store;
};
