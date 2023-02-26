import React, { Component } from 'react';
import { StyleSheet, StatusBar, Platform, Pressable, Alert } from 'react-native';
import { Register } from './src/components/Register';
import { PhoneNumber } from './src/components/PhoneNumber';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogoHeader from './assets/images/logo_header.jsx';
import HelpButton from './assets/images/help_button.jsx';
import BackButton from './assets/images/back_button.jsx';

import { Onboarding } from './src/components/Onboarding/Onboarding';
import { OnboardingLocation } from './src/components/Onboarding/OnboardingLocation';
import { OnboardingSearchRelation } from './src/components/Onboarding/OnboardingSearchRelation';
import { OnboardingSearchPerson } from './src/components/Onboarding/OnboardingSearchPerson';
import { OnboardingIntroduction } from './src/components/Onboarding/OnboardingIntroduction';
import { OnboardingDoneSplash } from './src/components/Onboarding/OnboardingDoneSplash';
import { OnboardingGoSplash } from './src/components/Onboarding/OnboardingGoSplash';
import { OnboardingDescriptionText } from './src/components/Onboarding/OnboardingDescriptionText';
import { Menu } from './src/components/Menu/Menu';
import { OnboardingDescriptionAudio } from './src/components/Onboarding/OnboardingDescriptionAudio';


const Stack = createNativeStackNavigator();

const header = ({ navigation, route }) => ({
    headerShown: true,
    headerBackVisible: false,
    headerTitle: (props) => <LogoHeader />,
    headerLeft: () => <Pressable onPress={() => navigation.pop()}><BackButton /></Pressable>,
    headerRight: () => <Pressable onPress={() => Alert.alert("Hier steht sp�ter ein Hilfetext! :) ")}><HelpButton /></Pressable>,
    headerTitleAlign: 'center',
    headerTitleStyle: {
        textAlign: "center",
        alignSelf: "center",
    }
});

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <NavigationContainer>
                <StatusBar barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
                <Stack.Navigator screenOptions={{
                    headerShown: false,
                    cardStyle: { backgroundColor: '#fff' }
                }} initialRouteName='Register'>
                    <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                    <Stack.Screen name="PhoneNumber" component={PhoneNumber} options={header} />
                    <Stack.Screen name="OnboardingGoSplash" component={OnboardingGoSplash} options={{ headerShown: false }} />
                    <Stack.Screen name="Onboarding" component={Onboarding} options={header} />
                    <Stack.Screen name="OnboardingLocation" component={OnboardingLocation} options={header} />
                    <Stack.Screen name="OnboardingSearchRelation" component={OnboardingSearchRelation} options={header} />
                    <Stack.Screen name="OnboardingSearchPerson" component={OnboardingSearchPerson} options={header} />
                    <Stack.Screen name="OnboardingIntroduction" component={OnboardingIntroduction} options={header} />
                    <Stack.Screen name="OnboardingDoneSplash" component={OnboardingDoneSplash} options={header} />
                    <Stack.Screen name="OnboardingDescriptionText" component={OnboardingDescriptionText} options={header} />
                    <Stack.Screen name="Menu" component={Menu} options={header} />
                    <Stack.Screen name="OnboardingDescriptionAudio" component={OnboardingDescriptionAudio} options={header} />
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
