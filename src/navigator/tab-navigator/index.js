import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../screens/home';
import SectionScreen from '../../screens/section';
import CoursesScreen from '../../screens/courses';
import ProjectsScreen from '../../screens/projects';

import HomeIcon from '../../assets/icon-home.svg';
import CoursesIcon from '../../assets/icon-courses.svg';
import ProjectsIcon from '../../assets/icon-star.svg';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <HomeIcon width={26} height={26} />,
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="CoursesScreen"
        component={CoursesStack}
        options={{
          tabBarIcon: () => <CoursesIcon width={26} height={26} />,
          tabBarLabel: 'Courses',
        }}
      />
      <Tab.Screen
        name="ProjectsScreen"
        component={ProjectsStack}
        options={{
          tabBarIcon: () => <ProjectsIcon width={26} height={26} />,
          tabBarLabel: 'Projects',
        }}
      />
    </Tab.Navigator>
  );
};

const CoursesStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Courses" component={CoursesScreen} />
    </Stack.Navigator>
  );
};

const ProjectsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Projects" component={ProjectsScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen
        name="Sections"
        component={SectionScreen}
        options={{
          presentation: 'modal',
          gestureEnabled: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default TabNavigator;
