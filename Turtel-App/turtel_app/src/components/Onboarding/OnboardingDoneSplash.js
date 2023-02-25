import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, View, Text, SafeAreaView, Pressable, Image, Alert } from 'react-native';
import Taube3InFrame from '../../../assets/images/Taube3InFrame.jsx';
import OwnSplashButton from '../Buttons/TurtelSplashButton.js';
import { LinearGradient } from 'expo-linear-gradient';


export function OnboardingDoneSplash({ navigation }) {


    return (
        <SafeAreaView style={style.pageStyle}>
            <LinearGradient colors={["#9777BF", "#7B8ACE"]} start={[0, 0]} end={[1, 1]} style={style.pageStyle}>
                <View style={style.tauben}>
                    <Taube3InFrame/>
                </View>
                <View style={{ justifyContent: 'center', height: '100%', top: "5%" }}>
                    <Text style={style.text1}>Super</Text>
                    <Text style={style.text2}>geschafft!</Text>
                    <Text style={style.text3}>Jetzt kann es losgehen.</Text>
                    <Text style={style.text4}>Bist du bereit zum Turteln?</Text>
                    <OwnSplashButton name="Ja, los gehts!" style={style.buttonStyle} onPress={() => { alert("Weiter gehts hier leider noch nicht.")} } />
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
        right: '5%',
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
        fontWeight: '300',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
        left: '1%'
    },
    text2: {
        color: '#FFF',
        fontStyle: 'normal',
        fontSize: 70,
        fontWeight: '500',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
        bottom: '3%',
        right: '3%'
    },
    text3: {
        color: '#FFF',
        fontStyle: 'normal',
        fontSize: 20,
        fontWeight: '300',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4
    },
    text4: {
        color: '#FFF',
        fontStyle: 'normal',
        fontSize: 20,
        fontWeight: '400',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4
    }
});