import React, { Component } from 'react';
import {StyleSheet, StatusBar, Platform, Pressable, Alert} from 'react-native';
import {Register} from './components/Register';
import {PhoneNumber} from './components/PhoneNumber';
import {Onboarding} from './components/Onboarding/Onboarding';
import {OnboardingLocation} from './components/Onboarding/OnboardingLocation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogoHeader from './images/logo_header.jsx';
import HelpButton from './images/help_button.jsx'; 
import BackButton from './images/back_button.jsx';
import { OnboardingSearchRelation } from './components/Onboarding/OnboardingSearchRelation';
import { OnboardingSearchPerson } from './components/Onboarding/OnboardingSearchPerson';
import { OnboardingIntroduction } from './components/Onboarding/OnboardingIntroduction';
import { OnboardingDescriptionText } from './components/Onboarding/OnboardingDescriptionText';


const Stack = createNativeStackNavigator();

const header = ({navigation, route}) => ({
  headerShown: true,
  headerBackVisible: false,
  headerTitle: (props) => <LogoHeader />,
  headerLeft: () => <Pressable  onPress={() => navigation.pop()}><BackButton /></Pressable>,
  headerRight: () => <Pressable onPress={() => Alert.alert("Hier steht später ein Hilfetext! :) ")}><HelpButton /></Pressable>,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    textAlign: "center",
    alignSelf: "center",
  }
});

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <NavigationContainer>
        <StatusBar barStyle={Platform.OS === 'android' ? 'light-content': 'dark-content'}/>
        <Stack.Navigator screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: '#fff'}
          }} initialRouteName='Register'>
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
          <Stack.Screen name="PhoneNumber" component={PhoneNumber} options={header}/>
          <Stack.Screen name="Onboarding" component={Onboarding} options={header} />
          <Stack.Screen name="OnboardingLocation" component={OnboardingLocation} options={header} />
          <Stack.Screen name="OnboardingSearchRelation" component={OnboardingSearchRelation} options={header} />
          <Stack.Screen name="OnboardingSearchPerson" component={OnboardingSearchPerson} options={header} />
          <Stack.Screen name="OnboardingIntroduction" component={OnboardingIntroduction} options={header} />
          <Stack.Screen name="OnboardingDescriptionText" component={OnboardingDescriptionText} options={header} />
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
  },
});
