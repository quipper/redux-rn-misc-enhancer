import { compose, createStore, Store } from 'redux';
import {
  applyAppStateListener,
  applyNetInfoListener,
  // tslint:disable-next-line:no-implicit-dependencies
} from 'redux-rn-misc-enhancer';
import rootReducer, { initialState } from './reducer';

export default function configureStore(): Store {
  const enhancer = compose(
    applyAppStateListener(),
    applyNetInfoListener(),
  );
  const store = createStore(rootReducer, initialState, enhancer);
  return store;
}
