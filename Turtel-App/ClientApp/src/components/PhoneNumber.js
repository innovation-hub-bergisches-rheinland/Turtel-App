import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, SafeAreaView} from 'react-native';
import {InputOutline} from 'react-native-input-outline';
import OwnButton from './TurtelButton.js';
import DropDownPicker from 'react-native-dropdown-picker';
import BackButton from '../images/back_button.jsx';
import LogoHeader from '../images/logo_header.jsx';
import HelpButton from '../images/help_button.jsx';

export function  PhoneNumber({ navigation }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Dänemark (+45)', value: '+45'},
        {label: 'Deutschland (+49)', value: '+49'},
        
    ]);

    return (
        <SafeAreaView style={style.phoneNumberPageStyle}>
            <DropDownPicker 
                placeholder='Vorwahl'
                open={open}
                dropDownContainerStyle={style.containerStyle}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={style.input}
            />
            <InputOutline placeholder='Handynummer' style={style.input} fontColor="#4C4C4C"/>
            <Text style={style.textStyle}>Wir brauchen Deine Telefonnummer, um dich anzumelden.</Text>
            <OwnButton name="Weiter" />
        </SafeAreaView>
        
    );
}

const style = StyleSheet.create ( {
    phoneNumberPageStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    backButton: {
        bottom: "22%",
        right: "38%",
        shadowColor: '#000000',
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    logoHeader: {
        bottom: "28%",
    },
    helpButton: {
        bottom: "34%",
        left: "38%",
        shadowColor: '#000000',
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    input: {
        height: 52,
        width: "90%",
        margin: 12,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#4C4C4C',
        justifyContent: 'center',
        alignSelf: 'center',
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