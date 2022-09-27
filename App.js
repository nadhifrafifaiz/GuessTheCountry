import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import IntroScreen from './src/screens/IntroScreen';
import SolarSystemScreen from './src/screens/SolarSystemScreen';
// import MainNavigator from './src/navigator/MainNavigator'

const App = () => {
  return (
    <SafeAreaProvider>
      <SolarSystemScreen />
    </SafeAreaProvider>
  )
};
export default App;