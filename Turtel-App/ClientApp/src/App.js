import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, StatusBar, Platform} from 'react-native';
import {Register} from './components/Register';
import {PhoneNumber} from './components/PhoneNumber';
import Header from './components/Header';
import {Onboarding} from './components/Onboarding/Onboarding';
import { OnboardingLocation } from './components/Onboarding/OnboardingLocation';
import {OnboardingSearchRelation} from './components/Onboarding/OnboardingSearchRelation';
import {OnboardingSearchPerson} from './components/Onboarding/OnboardingSearchPerson';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingIntroduction } from './components/Onboarding/OnboardingIntroduction';


const Stack = createNativeStackNavigator();

export default class App extends Component {
  static displayName = App.name;

  

  render () {
    return (
      <NavigationContainer>
        <StatusBar barStyle={Platform.OS === 'android' ? 'light-content': 'dark-content'}/>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Register'>
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
          <Stack.Screen name="PhoneNumber" component={PhoneNumber} options={{ header: Header, headerShown: true }}/>
          <Stack.Screen name="Onboarding" component={Onboarding} options={{ header: Header, headerShown: true }}/>
          <Stack.Screen name="OnboardingLocation" component={OnboardingLocation} options={{ header: Header, headerShown: true }}/>
          <Stack.Screen name="OnboardingSearchRelation" component={OnboardingSearchRelation} options={{ header: Header, headerShown: true }}/>
          <Stack.Screen name="OnboardingSearchPerson" component={OnboardingSearchPerson} options={{ header: Header, headerShown: true }}/>
          <Stack.Screen name="OnboardingIntroduction" component={OnboardingIntroduction} options={{ header: Header, headerShown: true }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
   
}

const styles = StyleSheet.create({
  viewAll: {
    marginTop: 35,
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
  }
});
