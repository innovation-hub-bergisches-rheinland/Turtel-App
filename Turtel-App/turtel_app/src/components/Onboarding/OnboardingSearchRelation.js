import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, SafeAreaView, Alert} from 'react-native';
import OwnButton from '../Buttons/TurtelButton.js';
import OwnCheckButton from '../Buttons/TurtelCheckButton.js';
import { OnboardingSearchPerson } from './OnboardingSearchPerson.js';

export function  OnboardingSearchRelation({ navigation }) {

    return (
        <SafeAreaView style={style.pageStyle}>
            <Text style={style.textStyle}>Ich suche</Text>
            <View style={style.biological}>
                <OwnCheckButton name="Beziehung" style={{flex: 3}}/>
                <OwnCheckButton name="Freundschaft" style={{flex: 3}}/>
                <OwnCheckButton name="Sex" style={{flex: 3}}/>
            </View>
            <View style={style.biological}>
                <OwnCheckButton name="Körperliche Nähe" style={{flex: 3}}/>
                <OwnCheckButton name="Weiß nicht" style={{flex: 3}}/>
            </View>
            <OwnButton name="Weiter" onPress={() => navigation.navigate(OnboardingSearchPerson)} />
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