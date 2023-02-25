import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, View, Text, SafeAreaView, Pressable, Image, Alert } from 'react-native';
import Taube2InFrame from '../../../assets/images/Taube2InFrame.jsx';
import OwnSplashButton from '../Buttons/TurtelSplashButton.js';
import { LinearGradient } from 'expo-linear-gradient';
import { Onboarding } from './Onboarding';


export function OnboardingWelcomeSplash({ navigation }) {


    return (
        <SafeAreaView style={style.pageStyle}>
            <LinearGradient colors={["#9777BF", "#7B8ACE"]} start={[0, 0]} end={[1, 1]} style={style.pageStyle}>
                <View style={style.tauben}>
                    <Taube2InFrame />
                </View>
                <View style={{ justifyContent: 'center', height: '100%', top: "5%" }}>
                    <Text style={style.text1}>Juhu!</Text>
                    <Text style={style.text2}>Los gehts!</Text>
                    <Text style={style.text3}>Zuerst richten wir dein Profil ein.</Text>
                    <OwnSplashButton name="Weiter" style={style.buttonStyle} onPress={() => { navigation.navigate(Onboarding) }} />
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    tauben: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        top: '35%',
        left: '9%'
    },
    buttonStyle: {
        boxShadow: '0px 2px 7px rgba(0, 0, 0, 0.15)',
        borderRadius: '25px',
        backgroundColor: '#FFFF',
        zIndex: 3,
        elevation: 3,
        right: '1%',
        top: '60%'
    },
    pageStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        zIndex: 3,
        elevation: 3
    },
    text1: {
        color: '#FFF',
        fontStyle: 'normal',
        fontSize: 70,
        fontWeight: '500',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4
    },
    text2: {
        color: '#FFF',
        fontStyle: 'normal',
        fontSize: 70,
        fontWeight: '300',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
        bottom: '3%'
    },
    text3: {
        color: '#FFF',
        fontStyle: 'normal',
        fontSize: 20,
        fontWeight: '300',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4
    }
});