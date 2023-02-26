import React, { Component, useState } from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';


export default function OwnCheckButton(props) {
    const [active, setActive] = useState(false); 
    const linearGradientColorsActive = ["#9676BE", "#5C9FDD"]
    const linearGradientColorsInactive = ["#fff", "#fff"]
    const white = '#fff'
    const grey = '#4C4C4C'

    return (
        <Pressable onPress={() =>  setActive(props.onPress)} style={props.style}>
            <LinearGradient colors={active ? linearGradientColorsActive : linearGradientColorsInactive} start={[0.1, 0.1]} end={[1.8, 0.9]} style={[active ? style.buttonsBiologicalActive : style.buttonsBiologicalInactive]}>
                <Text style={{color: active ? white : grey}}>{props.name}</Text>
            </LinearGradient>
        </Pressable>
    );
}

const style = StyleSheet.create({

    buttonsBiologicalActive: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        borderRadius: 25,
        borderColor: '#fff',
        borderWidth: 1,
        height: 52,
    },
    buttonsBiologicalInactive: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#4C4C4C',
        borderRadius: 25,
        borderColor: '#4C4C4C',
        borderWidth: 1,
        height: 52,
    },
});