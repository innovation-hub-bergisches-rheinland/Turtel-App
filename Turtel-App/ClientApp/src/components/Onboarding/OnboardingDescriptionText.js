import React from 'react';
import {StyleSheet, Alert, SafeAreaView, Keyboard, KeyboardAvoidingView, View, Text, TextInput, TouchableWithoutFeedback} from 'react-native';
import OwnButton from '../Buttons/TurtelButton.js';

export function  OnboardingDescriptionText({ navigation }) {

    return (
        <SafeAreaView style={style.pageStyle}>
            <KeyboardAvoidingView style={{alignItems: 'center'}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={{width: '100%', alignItems: 'center'}}>
                        <Text style={style.textStyle}>Erzähle uns etwas über dich</Text>
                        <TextInput style={style.input} multiline />
                        <OwnButton name="Weiter" onPress={() => Alert.alert("Hier geht es nicht weiter")} />
                    </View>
                </TouchableWithoutFeedback>  
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const style = StyleSheet.create ( {
    textStyle: {
        textAlign: 'center',
        margin: 20,
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