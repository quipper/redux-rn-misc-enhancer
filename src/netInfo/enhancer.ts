import {
  ConnectionInfo,
  ConnectionType,
  NetInfo,
  Platform,
} from 'react-native';
import { StoreEnhancer, StoreEnhancerStoreCreator } from 'redux';
import { connectionChangeAction, connectivityChangeAction } from './action';

export default (): StoreEnhancer => <S>(
  createStore: StoreEnhancerStoreCreator<S>,
): StoreEnhancerStoreCreator => (reducer, preloadedState) => {
  const store = createStore(reducer, preloadedState);

  const handleConnectivityChange = (isConnected: boolean) => {
    store.dispatch<any>(connectivityChangeAction(isConnected));
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
    store.dispatch<any>(connectionChangeAction(info));
  };

  NetInfo.addEventListener('connectionChange', handleConnectionChange);

  return store;
};
