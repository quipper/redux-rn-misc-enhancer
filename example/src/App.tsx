import React, { Component } from 'react';
import {
  AppStateStatus,
  ConnectionInfo,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { State } from './reducer';

interface Props {
  state: AppStateStatus;
  info: ConnectionInfo | undefined;
  isConnected: boolean | undefined;
}

const mapStateToProps = (state: State): any => {
  return {
    appState: state.appState.state,
    netInfo: state.netInfo.info,
    isConnected: state.netInfo.isConnected,
  };
};

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class App extends Component<Props> {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    // tslint:disable-next-line:no-console
    console.log(this.props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{'example'}</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  undefined,
)(App);
