import React, {useState} from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, SafeAreaView, Alert } from 'react-native';
import {InputOutline} from 'react-native-input-outline';
import OwnButton from './Buttons/TurtelButton.js';
import DropDownPicker from 'react-native-dropdown-picker';
import {Onboarding} from './Onboarding/Onboarding';

export function PhoneNumber({ navigation }) {
    const [errorPostalcode, setErrorPostalcode] = useState(undefined);
    const [errorPhonenumber, setErrorPhonenumber] = useState(undefined);

    const [open, setOpen] = useState(false);
    const [areacode, setAreacode] = useState(null);
    const [items, setItems] = useState([
        { label: 'Dänemark (+45)', value: '+45' },
        { label: 'Deutschland (+49)', value: '+49' },

    ]);
    const [phoneNumber, setPhoneNumber] = useState(null);

    const onPressForward = () => {
        console.log(areacode + phoneNumber)
        if (phoneNumber == null) {
            setErrorPhonenumber("Feld darf nicht leer sein!");
        } else if (areacode == null) {
            setErrorPostalcode("Du musst eine Auswahl treffen!");
        } else {
            navigation.navigate(Onboarding)
        }
    }

    return (
        <SafeAreaView style={style.phoneNumberPageStyle}>
            <KeyboardAvoidingView style={{ alignItems: 'center' }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <DropDownPicker
                    placeholder='Vorwahl'
                    open={open}
                    dropDownContainerStyle={style.containerStyle}
                    value={areacode}
                    items={items}
                    setOpen={setOpen}
                    setValue={setAreacode}
                    setItems={setItems}
                    style={style.input}
                />

                <InputOutline placeholder='Handynummer' style={style.input} onChangeText={newText => setPhoneNumber(newText) & setErrorPhonenumber(undefined)} error={errorPhonenumber} inactiveColor='#000' />
                <Text style={style.textStyle}>Wir brauchen Deine Telefonnummer, um dich anzumelden.</Text>
                <OwnButton name="Weiter" onPress={() => onPressForward()} />
            </KeyboardAvoidingView>
        </SafeAreaView>

    );
}

const style = StyleSheet.create({
    phoneNumberPageStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#fff'
    },
    backButton: {
        bottom: "22%",
        right: "38%",
        shadowColor: '#000000',
        shadowOffset: { width: 3, height: 3 },
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
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
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