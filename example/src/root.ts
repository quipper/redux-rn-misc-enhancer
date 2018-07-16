import { AppRegistry } from 'react-native';
import App from './App';
import configureStore from './store';
import { withReduxStore } from './withReduxStore';

export const start = () => {
  const store = configureStore();
  AppRegistry.registerComponent('example', () => withReduxStore(App, store));
};
