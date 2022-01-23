import 'react-native-gesture-handler';
import React from 'react';
import { Easing, KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';

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

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? "padding" : "height"}
            style={{flex: 1}}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
          >
            <Stack.Navigator
              screenOptions={{
                headerShown: false
              }}
            >
              <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={options}
              />
              <Stack.Screen
                name='MapScreen'
                component={MapScreen}
                options={options}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}