import {createStackNavigator, createAppContainer} from 'react-navigation';
import ScanScreen from './ScanScreen'
import DeviceScreen from './DeviceScreen'

const MainNavigator = createStackNavigator({
  Home: ScanScreen,
  Device: DeviceScreen,
}, {
  initialRouteName: "Home"
});

const App = createAppContainer(MainNavigator);

export default App;