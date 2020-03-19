import React from "react";
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Accelerometer } from "expo";
import Round from './utils/Round';

class Tilt extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      gyro: {}
    }

    Accelerometer.setUpdateInterval(100);
    this._subscribe();
  }

  _subscribe () {
    Accelerometer.addListener((result) => {
      this.setState({
        gyro: result
      });
    });
  }

  render() {
    const { children, perspective } = this.props;
    const { x, y } = this.state.gyro;
    const styles = {
      'transform': [
        { 'perspective': perspective },
        { 'rotateX': `${Round(y)}deg` },
        { 'rotateY': `${Round(x)}deg` },
      ]
    }

    return (
      <View style={styles}>
        { children }
      </View>
    )
  }
}

Tilt.defaultProps = {
  perspective: 300
}

Tilt.propTypes = {
  perspective: PropTypes.number
}

export default Tilt;
