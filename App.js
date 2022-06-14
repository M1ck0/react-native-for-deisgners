import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';

import TabNavigator from './src/navigator/tab-navigator';

const App = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
