import { Action, combineReducers, Reducer } from 'redux';
import {
  AppStateInitialState,
  appStateReducer,
  AppStateState,
  NetInfoInitialState,
  netInfoReducer,
  NetInfoState,
  // tslint:disable-next-line:no-implicit-dependencies
} from 'redux-rn-misc-enhancer';

export interface State {
  appState: AppStateState;
  netInfo: NetInfoState;
}

export const initialState: State = {
  appState: AppStateInitialState,
  netInfo: NetInfoInitialState,
};

const appReducer: Reducer<State> = combineReducers({
  appState: appStateReducer,
  netInfo: netInfoReducer,
});

const rootReducer = (state: State, action: Action) => appReducer(state, action);

export default rootReducer;
