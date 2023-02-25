import React, { Component } from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

export default function OwnButton(props) {

    return (
        <Pressable onPress={props.onPress}>
            <LinearGradient colors={["#9676BE", "#5C9FDD"]} start={[0.1, 0.1]} end={[1.8, 0.9]} style={[props.style, style.buttonStyle]}>
                <Text style={style.textStyle}>{props.name}</Text>
            </LinearGradient>
        </Pressable>
    );
}

const style = StyleSheet.create({
    buttonStyle: {
        alignSelf: 'stretch',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        height: 52,
        width: 256,
    },   
    textStyle: {
        fonstSize: 50,
        color: '#fff',
    }
});