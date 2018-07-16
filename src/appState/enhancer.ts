import { AppState, AppStateStatus } from 'react-native';
import { Store } from 'redux';
import { appStateChangeAction } from './action';

export default () => (createStore: () => Store) => {
  const store = createStore();

  const handleAppStateChange = (nextState: AppStateStatus) => {
    store.dispatch(appStateChangeAction(nextState));
  };

  AppState.addEventListener('change', handleAppStateChange);

  return store;
};
