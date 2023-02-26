import React, { Component } from 'react';
import { StyleSheet, StatusBar, Platform, SafeAreaView, Text, Pressable, Alert, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TurtelButtonIcon from '../../../assets/images/turtelButtonIcon.jsx';
import MessageButtonIcon from '../../../assets/images/MessageButtonIcon.jsx';
import TurtelProfileIcon from '../../../assets/images/TurtelProfileIcon.jsx';
import TurtelFeedbackButton from '../../../assets/images/TurtelFeedbackButton.jsx';
import Taube1Left from '../../../assets/images/Taube1Left';
import Taube1Right from '../../../assets/images/Taube1Right';
import TurtelHeart from '../../../assets/images/TurtelHeart';
import { ceil } from 'react-native-reanimated';



export function Menu({ navigation }) {

    return (
        <SafeAreaView style={style.pageStyle}>
            <Pressable name="turtelbutton" onPress={() => { Alert.alert("Oh nein! Turteln ist derzeit noch nicht möglich.") }} style={style.turtelButton}>
                <LinearGradient colors={["#9676BE", "#5C9FDD"]} start={[0.1, 0.1]} end={[1.8, 0.9]} style={style.turtelButtonGradient}>
                    <TurtelButtonIcon style={ style.turtelButtonIcon} />
                    <Text style={style.turtelButtonText}>Turteln</Text>
                </LinearGradient>
            </Pressable>
            <Pressable name="messageButton" onPress={() => { Alert.alert("Oh nein! Die Nachrichtenfunktion ist derzeit noch nicht verfügbar.") }} style={style.messageButton}>
                <LinearGradient colors={["#FFF", "#FFF"]} start={[0.1, 0.1]} end={[1.8, 0.9]} style={style.messageButtonGradient}>
                    <MessageButtonIcon style={style.messageButtonIcon} />
                    <Text style={style.messageButtonText}>Nachrichten und Matches</Text>
                </LinearGradient>
            </Pressable>
            <View style={style.buttonGroup}>
                <Pressable name="profilButton" onPress={() => { Alert.alert("Oh nein! Die Profilübersicht ist derzeit noch nicht verfügbar.") }} style={style.profilButton}>
                    <LinearGradient colors={["#FFF", "#FFF"]} start={[0.1, 0.1]} end={[1.8, 0.9]} style={style.profilButtonGradient}>
                        <TurtelProfileIcon style={style.profilButtonIcon} />
                        <Text style={style.profilButtonText}>Dein Profil</Text>
                    </LinearGradient>
                </Pressable>
                <Pressable name="feedbackButton" onPress={() => { Alert.alert("Oh nein! Die Feedbackfunktion ist derzeit noch nicht verfügbar..") }} style={style.feedbackButton}>
                    <LinearGradient colors={["#FFF", "#FFF"]} start={[0.1, 0.1]} end={[1.8, 0.9]} style={style.feedbackButtonGradient}>
                        <Text style={style.feedbackButtonText}>Deine Meinung</Text>
                        <TurtelFeedbackButton style={style.feedbackButtonIcon} />
                    </LinearGradient>
                </Pressable>
            </View>
            <View style={style.turtelDoves}>
                <TurtelHeart style={{
                    top: '0%',
                    left: '40%'
                }} />

                <Taube1Left style={style.turtelL} />
                
                <Taube1Right style={style.turtelR} />
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    turtelDoves: {
        height: '40%',
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    turtelL: {
        top: '2%',
        right: '30%',
        transform: [{ rotateZ: '-20deg' }]
    },
    turtelR: {
        bottom: '12%',
        right: '27%',
        transform: [{ rotateZ: '-10deg' }, {scale: 1.2}]
    },
    pageStyle: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%'
    },
    buttonGroup: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        height: '15%',
        width: '90%',
        marginTop: '5%',
    },
    turtelButtonText: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 25,
        left: '0%',
        width: '40%'
    },
    turtelButtonGradient: {
        alignSelf: 'auto',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 20 },
        shadowOpacity: 1,
        shadowRadius: 1,
        backgroundColor: '#0000',
        elevation: 5
    },
    turtelButton: {
        alignItems: 'center',
        alignSelf: 'center',
        height: '20%',
        width: '90%',
        marginTop: '10%'
    },
    turtelButtonIcon: {
        margin: '10%',
        width: '40%'
    },
    messageButtonText: {
        textAlign: 'center',
        color: '#7747AB',
        fontSize: 20,
        left: '45%',
        width: '40%'
    },
    messageButtonGradient: {
        alignSelf: 'auto',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 20 },
        shadowOpacity: 1,
        shadowRadius: 1,
        backgroundColor: '#0000',
        elevation: 5

    },
    messageButton: {
        alignItems: 'center',
        alignSelf: 'center',
        height: '15%',
        width: '90%',
        marginTop: '5%',
    },
    messageButtonIcon: {
        margin: '10%',
        width: '40%',
        left: '20%'
    },
    profilButton: {
        alignItems: 'center',
        alignSelf: 'center',
        height: '100%',
        width: '48%'
    },
    profilButtonGradient: {
        alignSelf: 'auto',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 20 },
        shadowOpacity: 1,
        shadowRadius: 1,
        backgroundColor: '#0000',
        elevation: 5
    },
    profilButtonText: {
        textAlign: 'center',
        color: '#7747AB',
        fontSize: 20,
        width: '60%'
    },
    profilButtonIcon: {
        marginTop: '13%',
        marginBottom: '5%',
        width: '40%'
    },
    feedbackButton: {
        alignItems: 'center',
        alignSelf: 'center',
        height: '100%',
        width: '48%',
        marginLeft: '4%',
    },
    feedbackButtonGradient: {
        alignSelf: 'auto',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 20 },
        shadowOpacity: 1,
        shadowRadius: 1,
        backgroundColor: '#0000',
        elevation: 5
    },
    feedbackButtonText: {
        textAlign: 'center',
        color: '#7747AB',
        fontSize: 20,
        width: '55%',
        marginLeft: '15%',
        textAlign: 'left'
    },
    feedbackButtonIcon: {
        width: '40%'
    },
});