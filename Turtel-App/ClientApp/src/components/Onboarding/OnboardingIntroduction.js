import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, SafeAreaView, Alert} from 'react-native';
import OwnButton from '../Buttons/TurtelButton.js';
import OwnCheckButton from '../Buttons/TurtelCheckButton.js';

export function  OnboardingIntroduction({ navigation }) {

    return (
        <SafeAreaView style={style.pageStyle}>
            <Text style={style.textStyle}>Erzähle uns etwas von dir</Text>
            <View style={style.biological}>
                <OwnCheckButton name="Text schreiben" style={{flex: 1}}/>
            </View>
            <View style={style.biological}>
                <OwnCheckButton name="Audio aufnehmen" style={{flex: 1}}/>
            </View>
            <View style={style.biological}>
                <OwnCheckButton name="Video drehen" style={{flex: 1}}/>
            </View>
            <OwnButton name="Weiter" onPress={() => Alert.alert("Hier geht es nicht weiter")} />
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