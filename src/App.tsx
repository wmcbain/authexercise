import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';

import Login from './screens/Login';
import SignUp from './screens/SignUp';

declare var global: { HermesInternal: null | {} };

enableScreens();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
};

export default App;
