import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import {DataProvider} from './Src/hooks';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import search from './Src/Tab';
import writeReview from './Src/writeReview';

// import Dashboard from './screens/Dashboard';

// import QA from './screens/Q&A';

const Stack = createNativeStackNavigator();
const AppStarting = ({navigation}) => {
  const [getStarted, setGetStarted] = useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingBottom: 0,
      }}>
      <View style={{flex: 1}}>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" backgroundColor={'black'} />
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="tabs">
            <Stack.Screen name="tabs" component={search} />
            <Stack.Screen name="writeReview" component={writeReview} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
};
export default function App() {
  return (
    <DataProvider>
      <AppStarting />
    </DataProvider>
  );
}
