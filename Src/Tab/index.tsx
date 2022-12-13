/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import search from './search';
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
    screenOptions={{
        headerShown: false,
      }}
      initialRouteName="search" >
      <Tab.Screen name="search" component={search} />
      <Tab.Screen name="Review" component={HomeScreen} />
    </Tab.Navigator>
  );
}
