import { Easing, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Map from '../components/Map';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';

const Stack = createStackNavigator();

const timingConfig = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear
  }
}

const options = {
  gestureEnabled: true,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  transitionSpec: {
    open: timingConfig,
    close: timingConfig
  }
}

const MapScreen = () => {

  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name='NavigateCard' component={NavigateCard} options={options}/>
          <Stack.Screen name='RideOptionsCard' component={RideOptionsCard} options={options} />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
