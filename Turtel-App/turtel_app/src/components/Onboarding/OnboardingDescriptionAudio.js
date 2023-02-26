import React from 'react';
import {StyleSheet, Alert, SafeAreaView, Keyboard, KeyboardAvoidingView, View, Text, TextInput, TouchableWithoutFeedback} from 'react-native';
import OwnButton from '../Buttons/TurtelButton.js';
import Audio1 from '../../../assets/images/audio1.jsx';
import Audio2 from '../../../assets/images/audio2.jsx';

export function  OnboardingDescriptionAudio({ navigation }) {

    return (
        <SafeAreaView style={style.pageStyle}>
            <KeyboardAvoidingView style={{alignItems: 'center', top: '20%'}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <Audio1 />
                <Text style={style.textStyle}>Audio aufnehmen</Text>
                <Text style={style.textStyle}>oder</Text>
                <Audio2 />
                <Text style={style.textStyle}>Audio hochladen</Text>
                <OwnButton name="Weiter" onPress={() => navigation.pop()} />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const style = StyleSheet.create ( {
    textStyle: {
        textAlign: 'center',
        justifyContent: 'center',
        margin: 40,
        color: '#4C4C4C',
   },
   input: {
        height: "70%",
        width: "90%",
        margin: 12,
        padding: 12,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#000',
        alignSelf: 'center',
    }
});