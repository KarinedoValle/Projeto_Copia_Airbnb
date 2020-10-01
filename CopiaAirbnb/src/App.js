import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login'
import Viajens from './Viajens'

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{cardStyle: {backgroundColor: '#fff'}}}>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Viajens" component={Viajens} options={{headerShown: false}}/>
        <Stack.Screen name="Root" component={Login} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}