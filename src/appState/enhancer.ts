import { AppState, AppStateStatus } from 'react-native';
import { StoreEnhancer, StoreEnhancerStoreCreator } from 'redux';
import { appStateChangeAction } from './action';

export default (): StoreEnhancer => <S>(
  createStore: StoreEnhancerStoreCreator<S>,
): StoreEnhancerStoreCreator => (reducer, preloadedState) => {
  const store = createStore(reducer, preloadedState);

  const handleAppStateChange = (nextState: AppStateStatus) => {
    store.dispatch<any>(appStateChangeAction(nextState));
  };

  AppState.addEventListener('change', handleAppStateChange);

  return store;
};
