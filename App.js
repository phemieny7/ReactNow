import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet, SafeAreaView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import ForgetScreen from './screens/ForgetScreen'
import TermScreen from './screens/TermScreen'
import HomeScreen from './screens/HomeScreen'

export default function App({navigation}) {
  const Stack = createStackNavigator();
  return (
       <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{
              headerShown: false
            }}>
          <Stack.Screen 
            name="Welcome" 
            component={WelcomeScreen} 
          />
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
          />
            <Stack.Screen 
            name="Signup" 
            component={SignupScreen} 
          />
          <Stack.Screen 
            name="Forget" 
            component={ForgetScreen} 
          />
           <Stack.Screen 
            name="Term" 
            component={TermScreen} 
          />
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
