import React from "react";
import { View } from 'react-native';
import { Accelerometer } from "expo";
import Round from './utils/Round';

export default class Tilt extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      gyro: {}
    }

    Accelerometer.setUpdateInterval(100);
    this._subscribe();
  }

  _subscribe () {
    this.subscription = Accelerometer.addListener((result) => {
      this.setState({
        gyro: result
      });
    });
  }

  render() {
    const { x, y } = this.state.gyro;
    const styles = {
      'transform': [
        { 'perspective': 300 },
        { 'rotateX': `${Round(y)}deg` },
        { 'rotateY': `${Round(x)}deg` },
      ]
    }

    return (
      <View style={styles}>
        { this.props.children }
      </View>
    )
  }
}
