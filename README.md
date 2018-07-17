# redux-rn-misc-enhancer [![CircleCI](https://circleci.com/gh/quipper/redux-rn-misc-enhancer.svg?style=svg)](https://circleci.com/gh/quipper/react-native-i18n-ts) [![npm version](https://badge.fury.io/js/redux-rn-misc-enhancer.svg)](https://badge.fury.io/js/redux-rn-misc-enhancer)

`redux-rn-misc-enhancer` is a light weight wrapper of [AppState](https://facebook.github.io/react-native/docs/appstate) and [NetInfo](https://facebook.github.io/react-native/docs/netinfo) which connects those changes directly to your Redux store.

## Installation

```sh
yarn add redux-rn-misc-enhancer
```

## Usage

### 1. Enhancer

Add `applyAppStateListener` and `applyNetInfoListener` enhancers for your redux store.

```ts
import { compose, createStore } from 'redux';
import {
  applyAppStateListener,
  applyNetInfoListener,
} from 'redux-rn-misc-enhancer';

const enhancer = compose(
  applyAppStateListener(),
  applyNetInfoListener(),
);
const store = createStore(reducers, initialState, enhancer);
```

2. Reducer

Add `appStateReducer` and `netInfoReducer`(and other stuff) to your redux reducer.

```ts
import { Action, combineReducers, Reducer } from 'redux';
import {
  AppStateInitialState,
  appStateReducer,
  AppStateState,
  NetInfoInitialState,
  netInfoReducer,
  NetInfoState,
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
```

And that's it! You can receive app state and network info changes from redux store in any React components.

For more detail check [example](https://github.com/quipper/redux-rn-misc-enhancer/tree/master/example) app.

## Licence

```
Copyright 2018 Quipper Limited.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```