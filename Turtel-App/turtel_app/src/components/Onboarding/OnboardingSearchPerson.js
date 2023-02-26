import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, SafeAreaView, Alert} from 'react-native';
import OwnButton from '../Buttons/TurtelButton.js';
import OwnCheckButton from '../Buttons/TurtelCheckButton.js';
import { OnboardingIntroduction } from './OnboardingIntroduction.js';

function registerPress(map, index) {
    let check = !map[index];
    map[index] = check;
    return check;
}


export function  OnboardingSearchPerson({ navigation }) {
    var map = {
        "male": false,
        "female": false,
        "diverse": false,
        "any": false
    };


    return (
        <SafeAreaView style={style.pageStyle}>
            <Text style={style.textStyle}>Ich suche</Text>
            <View style={style.biological}>
                <OwnCheckButton onPress={() => registerPress(map, "male")} name="Männer" style={{flex: 1}}/>
                <OwnCheckButton onPress={() => registerPress(map, "female")} name="Frauen" style={{flex: 1}}/>
            </View>
            <View style={style.biological}>
                <OwnCheckButton onPress={() => registerPress(map, "diverse")} name="Divers" style={{flex: 1}}/>
                <OwnCheckButton onPress={() => registerPress(map, "any")} name="Egal" style={{flex: 1}}/>
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