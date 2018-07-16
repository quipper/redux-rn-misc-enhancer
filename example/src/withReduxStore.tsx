import React, { Component, ComponentClass, StatelessComponent } from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';

export const withReduxStore = (
  WrappedComponent: ComponentClass<any> | StatelessComponent<any>,
  store: Store<any>,
) =>
  class extends Component {
    render() {
      return (
        <Provider store={store}>
          <WrappedComponent {...this.props} />
        </Provider>
      );
    }
  };
