import React, {Component} from 'react';
import {StyleSheet, Button, View, FlatList, Text} from 'react-native';
import {init, triggerScan, stopScan} from './Bluetooth'

type Props = {};
export default class ScanScreen extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      devices: []
    }
    init((res) => this.addScanResult(res))
  }
  addScanResult(res) {
    this.setState(previousState => ({
      devices: previousState.devices.some((d) => d.id === res.id) === true ?
        previousState.devices :
        [...previousState.devices, res]
    }))
  }
  triggerScan = () => {
    this.setState({scanning: true})
    triggerScan()
  }
  stopScan = () => {
    stopScan()
    this.setState({scanning: false})
  }
  render() {
    let button
    if(this.state.scanning) {
      button = <Button
        onPress={this.stopScan}
        title='Stop Scan'
      />
    } else {
      button = <Button
        onPress={this.triggerScan}
        title='Scan'
      />
    }
    return (
      <View style={styles.container}>
        {button}
        <FlatList data={this.state.devices}
                  keyExtractor={(item, index) => item.id}
                  renderItem={({item}) => <Button onPress={() => { this.props.navigation.navigate('Device', {'id': item.id})}} title={item.name + '(' + item.id + ')'} />} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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