/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { s } from 'react-native-wind';

import WatchList from './WatchList';
import NativeStack from './NativeStack';

import Icon from '../components/Icon';

const tab = createBottomTabNavigator();

function Tabs() {
  return (
    <NavigationContainer>
      <tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: s`absolute bottom-6 left-5 right-5 bg-white rounded-full h-20 shadow-lg`,
        }} >
        <tab.Screen
          component={NativeStack}
          name="Ana Sayfa"
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name={'home'}
                size={30}
                color={focused ? s`text-black`.color : s`text-gray-400`.color} />),
          }} />
        <tab.Screen
          component={WatchList}
          name="İzleme Listem"
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name={'eye'}
                size={30}
                color={focused ? s`text-black`.color : s`text-gray-400`.color} />),
          }} />
      </tab.Navigator>
    </NavigationContainer>
  );
}

export default Tabs;
