import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../screens/home';
import SectionScreen from '../../screens/section';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Section"
        component={SectionScreen}
        options={{
          gestureEnabled: true,
          swipeEnabled: true,
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
