import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';

import Login from './screens/Login';
import SignUp from './screens/SignUp';
import ToastProvider from './toast/ToastProvider';
import Toast from './toast/Toast';
import { SafeAreaProvider } from 'react-native-safe-area-context';

declare var global: { HermesInternal: null | {} };

enableScreens();
const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <ToastProvider>
        <NavigationNativeContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{
                title: 'Create an account',
              }}
            />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationNativeContainer>
        <Toast />
      </ToastProvider>
    </SafeAreaProvider>
  );
};

export default App;
