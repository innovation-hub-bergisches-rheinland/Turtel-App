import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Platform } from 'react-native';
import { Register } from './src/components/Register';
import { PhoneNumber } from './src/components/PhoneNumber';
import Header from './src/components/Header';
import { Onboarding } from './src/components/Onboarding/Onboarding';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

export default class App extends Component {
    static displayName = App.name;

    render() {

        var lReg = Register;

        return (
            <NavigationContainer>
                <StatusBar barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Onboarding'>
                    <Stack.Screen name="Register" component={lReg} options={{ headerShown: false }} />
                    <Stack.Screen name="PhoneNumber" component={PhoneNumber} options={{ header: Header, headerShown: true }} />
                    <Stack.Screen name="Onboarding" component={Onboarding} options={{ header: Header, headerShown: true }} />
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