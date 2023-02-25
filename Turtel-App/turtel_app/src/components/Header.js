import React, { Component } from 'react';
import {StyleSheet, Text, Pressable, SafeAreaView, View, DrawerLayoutAndroid} from 'react-native';
import BackButton from '../../assets/images/back_button.jsx';
import LogoHeader from '../../assets/images/logo_header.jsx';
import HelpButton from '../../assets/images/help_button.jsx'; 

export default function Header() {

    handleBackButton = () => {
        this.navigation.goBack();
    }

    return (
        <SafeAreaView style={style.headerContainer}>
            <Pressable onPress={handleBackButton}>
                <View style={style.backButton}>
                    <BackButton />
                </View>
            </Pressable>
            <View style={style.logoHeader}>
                <LogoHeader />
            </View>
            <Pressable onPress={() => console.log("Help!")}>
                <View style={style.helpButton}>
                    <HelpButton />
                </View>
            </Pressable>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    backButton: {
        marginLeft: 10,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    helpButton: {
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    logoHeader: {

    }
});