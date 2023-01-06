import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, SafeAreaView, Alert} from 'react-native';
import OwnButton from '../Buttons/TurtelButton.js';
import {Onboarding} from '../Onboarding/Onboarding';
import OwnCheckButton from '../Buttons/TurtelCheckButton.js';
import { OnboardingIntroduction } from './OnboardingIntroduction.js';

export function  OnboardingSearchPerson({ navigation }) {

    const onPressForward = () => {
        console.log(areacode + phoneNumber)
        if(areacode == null || phoneNumber == null) {
            Alert.alert("Achtung! Du musst eine Eingabe tätigen!")
        } else {
            navigation.navigate(Onboarding)
        }
    }

    return (
        <SafeAreaView style={style.pageStyle}>
            <Text style={style.textStyle}>Ich suche</Text>
            <View style={style.biological}>
                <OwnCheckButton name="Männer"/>
                <OwnCheckButton name="Frauen"/>
                <OwnCheckButton name="Beides"/>
            </View>
            <View style={style.biological}>
                <OwnCheckButton name="Divers"/>
                <OwnCheckButton name="Egal"/>
            </View>
            <OwnButton name="Weiter" onPress={() => navigation.navigate(OnboardingIntroduction)} />
        </SafeAreaView>
        
    );
}

const style = StyleSheet.create ( {
    pageStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    input: {
        height: 52,
        width: "90%",
        margin: 12,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#000',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    biological: {
        width: '90%',
        flexDirection: 'row',
        marginBottom: 12,
    },
    containerStyle: {
        width: "90%",
        justifyContent: 'center',
        alignSelf: 'center',
    },
    textStyle: {
        textAlign: 'center',
        margin: 20,
        color: '#4C4C4C',
    }
});