import React, {Component} from 'react';
import {Text, View} from 'react-native';

type Props = {};
export default class DeviceScreen extends Component<Props> {
  render() {
    const { navigation } = this.props
    const deviceId = navigation.getParam('id', null)
    return (
      <View><Text>Device {deviceId}</Text></View>
    )
  }
}