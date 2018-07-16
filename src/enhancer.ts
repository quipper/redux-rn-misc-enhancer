import { AppState, AppStateStatus } from 'react-native';
import { Store } from 'redux';

export default () => (createStore: () => Store) => {
  const store = createStore();

  let currentState = AppState.currentState;

  const handleAppStateChange = (nextState: AppStateStatus) => {
    if (currentState === nextState) {
      return;
    }
    store.dispatch({
      type: 'CHANGE_EVENT',
      payload: nextState,
    });
    currentState = nextState;
  };

  AppState.addEventListener('change', handleAppStateChange);

  return store;
};
